document.documentElement.classList.add("js-enabled");

const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector("#main-navigation");

if (menuToggle && mainNavigation) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    mainNavigation.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute(
      "aria-label",
      isExpanded ? "Open navigation menu" : "Close navigation menu",
    );
    mainNavigation.classList.toggle("is-open", !isExpanded);
  });

  mainNavigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 761px)").matches) {
      closeMenu();
    }
  });
}
