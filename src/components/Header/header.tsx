import { component$ } from "@builder.io/qwik";
import { ThemeSelector } from "../ThemeSelector/themeselector";
import { css } from "~/styled-system/css";

// export interface HeaderProps {}

const navlinks = ["about"];

export const Header = component$(() => {
  return (
    <header
      class={css({
        width: "100vw",
        position: "sticky",
        top: "3px",
        zIndex: "1000",
      })}
    >
      <ThemeSelector />
      <div
        class={css({
          padding: "10px",
          background: "var(--background)",
          border: "2px solid var(--foreground)",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "11px",
          textAlign: "center",
        })}
      >
        <h2>Welcome to</h2>
        <h1>Queer Coding</h1>
        <ul class="nav-list">
          {navlinks.map((link) => (
            <li key={link}>
              <a href={link}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
});
