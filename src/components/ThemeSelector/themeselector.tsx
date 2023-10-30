import { type Signal, component$, useSignal } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

import { flags } from "../../root";

const themes = flags.map((f) => f.name);
// const themes = ["light", "dark", "synth", "vapor"];

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
        width: "50px",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "300px",
        left: "10px",
        border: "1px solid var(--border)",
        transitionDuration: "1s",
        transitionDelay: "500ms",
        // "& .invisible": {
        //   transitionProperty: "opacity, height",
        //   transitionDuration: "150ms, 500ms",
        //   transitionDelay: "0, 100ms",
        //   height: 0,
        //   opacity: 0.01,
        //   border: 0,
        // },
        // "&:hover button.invisible, .visible": {
        //   transitionProperty: "opacity, height",
        //   transitionDuration: "150ms, 500ms",
        //   transitionDelay: "250ms, 0ms",
        //   height: "33px",
        //   opacity: 0.99,
        //   border: "1px solid rgb(var(--fg-1))",
        // },
        "& button": {
          width: "50px",
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
