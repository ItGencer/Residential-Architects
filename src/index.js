import "./styles.scss";

const body = document.body;
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const mobileNavQuery = window.matchMedia("(max-width: 820px)");

function syncMobileNavigation(isOpen = body.classList.contains("nav-open")) {
  if (!navMenu || !navToggle) {
    return;
  }

  if (mobileNavQuery.matches) {
    navMenu.inert = !isOpen;
    navMenu.setAttribute("aria-hidden", String(!isOpen));
  } else {
    body.classList.remove("nav-open");
    navMenu.inert = false;
    navMenu.removeAttribute("aria-hidden");
    navToggle.setAttribute("aria-expanded", "false");
  }
}

function setHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}

setHeaderState();
syncMobileNavigation();
window.addEventListener("scroll", setHeaderState, { passive: true });
mobileNavQuery.addEventListener("change", () => syncMobileNavigation(false));

navToggle?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  syncMobileNavigation(isOpen);
});

navMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
    syncMobileNavigation(false);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && body.classList.contains("nav-open")) {
    body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
    syncMobileNavigation(false);
    navToggle?.focus();
  }
});

const revealElements = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

document.querySelectorAll("[data-scroll-button]").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const direction = Number(button.getAttribute("data-direction")) || 1;
    const rail = document.getElementById(targetId);

    if (!rail) {
      return;
    }

    rail.scrollBy({
      left: direction * rail.clientWidth * 0.82,
      behavior: "smooth",
    });
  });
});

const accordionButtons = document.querySelectorAll(".accordion-trigger");

function setPanelHeight(button, isExpanded) {
  const panel = document.getElementById(button.getAttribute("aria-controls"));

  if (!panel) {
    return;
  }

  panel.style.maxHeight = isExpanded ? `${panel.scrollHeight}px` : "0px";
}

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    const nextState = !isExpanded;

    button.setAttribute("aria-expanded", String(nextState));
    setPanelHeight(button, nextState);
  });
});

window.addEventListener("resize", () => {
  accordionButtons.forEach((button) => {
    if (button.getAttribute("aria-expanded") === "true") {
      setPanelHeight(button, true);
    }
  });
});

const newsletterForm = document.querySelector("[data-newsletter-form]");
const formStatus = document.querySelector("[data-form-status]");

newsletterForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(newsletterForm);
  const email = String(formData.get("email") || "").trim();

  if (!email) {
    return;
  }

  newsletterForm.reset();

  if (formStatus) {
    formStatus.textContent = "Thank you. Studio notes will arrive quietly.";
  }
});
