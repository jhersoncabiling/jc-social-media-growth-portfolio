const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelectorAll(".sidebar-nav a, .mobile-menu a");
const sections = [...document.querySelectorAll("main section[id]")];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function closeMenu() {
  if (!menuButton || !mobileMenu) return;
  menuButton.setAttribute("aria-expanded", "false");
  mobileMenu.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuButton.querySelector(".sr-only").textContent = "Open navigation menu";
}

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(willOpen));
    mobileMenu.classList.toggle("open", willOpen);
    document.body.classList.toggle("menu-open", willOpen);
    menuButton.querySelector(".sr-only").textContent = willOpen
      ? "Close navigation menu"
      : "Open navigation menu";
  });

  mobileMenu.addEventListener("click", (event) => {
    if (event.target.matches("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

function setActiveNav(id) {
  navLinks.forEach((link) => {
    const active = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("active", active);
    if (active) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) setActiveNav(visible.target.id);
    },
    {
      rootMargin: "-24% 0px -62% 0px",
      threshold: [0.01, 0.25, 0.5],
    }
  );

  sections.forEach((section) => navObserver.observe(section));

  if (!reduceMotion) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));
  }
} else {
  document.querySelectorAll(".reveal").forEach((item) => item.classList.add("visible"));
}

if (reduceMotion) {
  document.querySelectorAll(".reveal").forEach((item) => item.classList.add("visible"));
}

const form = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

const fields = {
  "full-name": {
    error: "full-name-error",
    validate: (value) =>
      value.trim().length >= 2 ? "" : "Please enter your full name.",
  },
  email: {
    error: "email-error",
    validate: (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
        ? ""
        : "Please enter a valid email address.",
  },
  "project-details": {
    error: "project-details-error",
    validate: (value) =>
      value.trim().length >= 20
        ? ""
        : "Please share at least 20 characters about your project.",
  },
};

function validateField(input) {
  const rules = fields[input.id];
  if (!rules) return true;

  const message = rules.validate(input.value);
  const error = document.getElementById(rules.error);
  input.setAttribute("aria-invalid", String(Boolean(message)));
  error.textContent = message;
  return !message;
}

if (form && formStatus) {
  Object.keys(fields).forEach((id) => {
    const input = document.getElementById(id);
    input.addEventListener("blur", () => validateField(input));
    input.addEventListener("input", () => {
      if (input.getAttribute("aria-invalid") === "true") validateField(input);
    });
  });

  form.addEventListener("submit", (event) => {
  const inputs = Object.keys(fields).map((id) => document.getElementById(id));
  const isValid = inputs.map(validateField).every(Boolean);

  if (!isValid) {
    event.preventDefault();
    formStatus.classList.remove("visible");
    inputs.find((input) => input.getAttribute("aria-invalid") === "true")?.focus();
    return;
  }

  // Allow Formspree to handle the form submission
  formStatus.textContent = "Sending message...";
  formStatus.classList.add("visible");
});
}

document.getElementById("year").textContent = new Date().getFullYear();
