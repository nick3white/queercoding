import { type Signal, component$, useSignal } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

const themes = [
  "arst",
  "flowers-berries",
  "flowers",
  "flowers-with-sun",
  "growing",
  "heavy-psych",
  "ibm",
  "icamera",
  "IMG_0324",
  "nightlights",
  "trees",
  "whatcd",
  "winter-chicago",
  "winter",
];

function themeswap(theme: string, themeStore: Signal<string>) {
  themeStore.value = theme;
  document.documentElement.className = theme;
  localStorage.setItem("theme", theme);
}

export const ThemeSelector = component$(() => {
  const themeStore = useSignal("");
  return (
    <div
      id="theme-button-container"
      class={css({
        zIndex: 9001,
        display: "flex",
        flexDirection: "column",
        // width: "50px",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "300px",
        left: "10px",
        border: "1px solid var(--border)",
        transitionDuration: "1s",
        transitionDelay: "500ms",
        "& button": {
          // width: "50px",
          fontSize: "0.85rem",
          alignItems: "center",
          justifyContent: "center",
        },
      })}
    >
      {themes.map((theme) => (
        <p
          key={theme}
          id={`theme-btn-${theme}`}
          class={`theme-btn ${
            themeStore.value === theme ? "visible" : "invisible"
          }`}
          onClick$={() => themeswap(theme, themeStore)}
        >
          {theme}
        </p>
      ))}
    </div>
  );
});
