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
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          border: "2px solid rgba(0,0,0,0)",
          background: "rgba(0,0,0,0)",
          lg: {
            background: "var(--background)",
            border: "2px solid var(--foreground)",
            alignItems: "center",
          },
          gap: "11px",
          textAlign: "center",
          transition: "100ms",
          "& h1, ul": {
            height: "100%",
            padding: "5px 10px",
            background: "var(--background)",
            border: "2px solid var(--foreground)",
            lg: {
              border: "2px solid rgba(0,0,0,0)",
              background: "rgba(0,0,0,0)",
            },
          },
          "& .wide": {
            display: "none",
            lg: {
              display: "block",
            },
          },
          "& .skinny": {
            display: "block",
            lg: {
              display: "none",
            },
          },
        })}
      >
        <a href="/">
          <h1 class="wide">Queer Coding</h1>
          <h1 class="skinny">QC</h1>
        </a>
        <ul
          class={css({
            listStyleType: "none",
            display: "flex",
            flexDirection: "row",
            lg: {
              flexDirection: "column",
            },
            "& p": {
              cursor: "not-allowed",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingInline: "7px",
              border: "2px solid var(--color3)",
              transition: "200ms",
              "&:hover": {
                background: "var(--color6)",
                color: "var(--background)",
              },
            },
          })}
        >
          {navlinks.map((link) => (
            <li key={link}>
              <p href={`/${link}`}>{link}</p>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
});
