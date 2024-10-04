class ThemeSwitcher extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.themes = this.getAttribute("themes").split(",");
    this.ext = this.getAttribute("ext") || "jpg";
    this.includeDarkMode = this.getAttribute("include-darkmode") === "true";

    this.render();
    this.setupEventListeners();
    this.loadSavedTheme();
    this.loadSavedDarkMode();
  }

  render() {
    const style = `
      :host {
position: fixed;
top: 3px;
left: 3px;
right: 3px;
      box-sizing: border-box;
        display: flex;
        width: calc(100% - 9px);
z-index: 5;
        gap: 3px;
        padding: 3px;
      }
      button {
        transition: 200ms;
        height: 50px;
        border: 1px solid var(--bg);
        cursor: pointer;

      }
      #dark-mode-toggle {
        display: grid;
        place-content: center;
        width: 50px;
        background-size: cover;
        background-position: center;
      }
      .theme-btn {
        flex: 1;
        border: 1px solid var(--bg);
        background-size: cover;
        background-position: center;
        display: block;
        position: relative;
        }

      #icon-moon, #icon-sun {
        width: 24px;
        height: 24px;
      }

      .spin-left, .spin-right {
        animation: spin 575ms cubic-bezier(0.075, 0.82, 0.17, 1.135);
      }

      @keyframes spin {
        0% {
          transform: scale(0) rotate(0deg);
        }
        100% {
          transform: scale(1) rotate(720deg);
        }
      }

      @keyframes spin {
        0% {
          transform: scale(0) rotate(0deg);
        }
        100% {
          transform: scale(1) rotate(-720deg);
        }
      }

    `;

    const themeButtons = this.themes
      .map(
        (theme) => `
      <button id="${theme}" class="theme-btn" style="background-image: url('/images/${theme}-sm.${this.ext}')"></button>
    `,
      )
      .join("");

    const darkModeButton = this.includeDarkMode
      ? `
      <button id="dark-mode-toggle" style="background: var(--fg);">\
        <svg id="icon-moon" class="spin-left" width="24px" height="24px" stroke-width="1.49" viewBox="0 0 24 24" fill="none" color="var(--color-light, #0f0)">
          <path d="M3 11.507a9.493 9.493 0 0018 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.494 9.494 0 003 11.507z" stroke="var(--color-light, #ccc)" stroke-width="1.49" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <svg id="icon-sun" class="spin-right" style="display: none;" width="24px" height="24px" stroke-width="1.49" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" color="var(--color-dark, #333)">
          <path d="M12 18a6 6 0 100-12 6 6 0 000 12zM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1" stroke="var(--color-dark, #333)" stroke-width="1.49" stroke-linecap="round" stroke-linejoin="round" fill="var(--color-dark, #333)"></path>
        </svg>
      </button>
    `
      : "";

    this.shadowRoot.innerHTML = `
      <style>${style}</style>
      ${themeButtons}
      ${darkModeButton}
    `;
  }

  setupEventListeners() {
    this.themes.forEach((theme) => {
      this.shadowRoot
        .getElementById(theme)
        .addEventListener("click", () => this.switchTheme(theme));
    });

    if (this.includeDarkMode) {
      this.shadowRoot
        .getElementById("dark-mode-toggle")
        .addEventListener("click", () => this.toggleDarkMode());
    }
  }

  switchTheme(theme) {
    this.themes.forEach((t) => document.body.classList.remove(t));
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }

  toggleDarkMode() {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", isDark);
    this.updateDarkModeIcon(isDark);
  }

  updateDarkModeIcon(isDark) {
    const moonIcon = this.shadowRoot.getElementById("icon-moon");
    const sunIcon = this.shadowRoot.getElementById("icon-sun");
    moonIcon.style.display = isDark ? "none" : "block";
    sunIcon.style.display = isDark ? "block" : "none";
  }

  loadSavedTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && this.themes.includes(savedTheme)) {
      this.switchTheme(savedTheme);
    }
  }

  loadSavedDarkMode() {
    if (this.includeDarkMode) {
      const savedDarkMode = localStorage.getItem("darkMode");
      if (savedDarkMode === "true") {
        document.body.classList.add("dark");
        this.updateDarkModeIcon(true);
      }
    }
  }
}

customElements.define("theme-switcher", ThemeSwitcher);
