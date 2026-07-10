import "./style/styles.scss";

class NavigationController {
  constructor() {
    this.body = document.body;
    this.header = document.querySelector("[data-header]");
    this.toggle = document.querySelector("[data-nav-toggle]");
    this.menu = document.querySelector("[data-nav-menu]");
    this.mobileQuery = window.matchMedia("(max-width: 820px)");
    this.openClass = "is-navigation-open";
    this.scrolledClass = "is-scrolled";
  }

  init() {
    this.setHeaderState();
    this.syncMenuState();
    window.addEventListener("scroll", () => this.setHeaderState(), { passive: true });
    window.addEventListener("keydown", (event) => this.handleEscape(event));
    this.mobileQuery.addEventListener("change", () => this.closeMenu());
    this.toggle?.addEventListener("click", () => this.toggleMenu());
    this.menu?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => this.closeMenu());
    });
  }

  get isOpen() {
    return this.body.classList.contains(this.openClass);
  }

  setHeaderState() {
    this.header?.classList.toggle(this.scrolledClass, window.scrollY > 12);
  }

  syncMenuState(isOpen = this.isOpen) {
    if (!this.menu || !this.toggle) {
      return;
    }

    if (this.mobileQuery.matches) {
      this.menu.inert = !isOpen;
      this.menu.setAttribute("aria-hidden", String(!isOpen));
      this.toggle.setAttribute("aria-expanded", String(isOpen));
      return;
    }

    this.body.classList.remove(this.openClass);
    this.menu.inert = false;
    this.menu.removeAttribute("aria-hidden");
    this.toggle.setAttribute("aria-expanded", "false");
  }

  toggleMenu() {
    const isOpen = this.body.classList.toggle(this.openClass);
    this.syncMenuState(isOpen);
  }

  closeMenu() {
    this.body.classList.remove(this.openClass);
    this.syncMenuState(false);
  }

  handleEscape(event) {
    if (event.key !== "Escape" || !this.isOpen) {
      return;
    }

    this.closeMenu();
    this.toggle?.focus();
  }
}

class RevealController {
  constructor() {
    this.elements = [...document.querySelectorAll("[data-reveal]")];
    this.visibleClass = "is-visible";
  }

  init() {
    if (!this.elements.length) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      this.showAll();
      return;
    }

    const observer = new IntersectionObserver((entries) => this.reveal(entries, observer), {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.12,
    });

    this.elements.forEach((element) => observer.observe(element));
  }

  reveal(entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add(this.visibleClass);
      observer.unobserve(entry.target);
    });
  }

  showAll() {
    this.elements.forEach((element) => element.classList.add(this.visibleClass));
  }
}

class RailScroller {
  constructor() {
    this.buttons = [...document.querySelectorAll("[data-scroll-button]")];
  }

  init() {
    this.buttons.forEach((button) => {
      button.addEventListener("click", () => this.scrollRail(button));
    });
  }

  scrollRail(button) {
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
  }
}

class Accordion {
  constructor() {
    this.buttons = [...document.querySelectorAll("[data-accordion-trigger]")];
  }

  init() {
    this.buttons.forEach((button) => {
      button.addEventListener("click", () => this.togglePanel(button));
    });
    window.addEventListener("resize", () => this.refreshOpenPanels());
  }

  togglePanel(button) {
    const nextState = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(nextState));
    this.setPanelHeight(button, nextState);
  }

  refreshOpenPanels() {
    this.buttons.forEach((button) => {
      if (button.getAttribute("aria-expanded") === "true") {
        this.setPanelHeight(button, true);
      }
    });
  }

  setPanelHeight(button, isExpanded) {
    const panel = document.getElementById(button.getAttribute("aria-controls"));

    if (!panel) {
      return;
    }

    panel.style.maxHeight = isExpanded ? `${panel.scrollHeight}px` : "0px";
  }
}

class NewsletterForm {
  constructor() {
    this.form = document.querySelector("[data-newsletter-form]");
    this.status = document.querySelector("[data-form-status]");
    this.successMessage = "Thank you. Studio notes will arrive quietly.";
  }

  init() {
    this.form?.addEventListener("submit", (event) => this.handleSubmit(event));
  }

  handleSubmit(event) {
    event.preventDefault();

    const email = String(new FormData(this.form).get("email") || "").trim();

    if (!email) {
      return;
    }

    this.form.reset();

    if (this.status) {
      this.status.textContent = this.successMessage;
    }
  }
}

class SiteApp {
  constructor(controllers) {
    this.controllers = controllers;
  }

  init() {
    this.controllers.forEach((controller) => controller.init());
  }
}

new SiteApp([
  new NavigationController(),
  new RevealController(),
  new RailScroller(),
  new Accordion(),
  new NewsletterForm(),
]).init();
