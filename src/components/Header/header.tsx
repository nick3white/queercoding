import { component$ } from "@builder.io/qwik";
import { ThemeSelector } from "../ThemeSelector/themeselector";
import { css } from "~/styled-system/css";

// export interface HeaderProps {}

const navlinks = ["about", "contact"];

export const Header = component$(() => {
  return (
    <header
      class={css({
        width: "100%",
        position: "sticky",
        top: "3px",
        zIndex: "1000",
        boxSizing: "border-box",
        // overflow: "hidden",
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
          borderBlock: "2px solid rgba(0,0,0,0)",
          background: "rgba(0,0,0,0)",
          lg: {
            background: "var(--background)",
            borderBlock: "2px solid var(--foreground)",
            alignItems: "center",
          },
          gap: "11px",
          textAlign: "center",
          transition: "100ms",
          overflow: "hidden",
          "&  a ": {
            overflow: "hidden",
            lg: {
              overflow: "visible",
            },
          },
          "& h1, ul": {
            transition: "300ms",
            height: "100%",
            padding: "5px 10px",
            background: "var(--background)",
            border: "2px solid var(--foreground)",
            lg: {
              border: "2px solid rgba(0,0,0,0)",
              background: "rgba(0,0,0,0)",
            },
          },
          "& h1:hover": {
            textShadow:
              "0 0 10px var(--color15), 0 0 20px var(--color15), 0 0 40px var(--color15), 0 0 80px var(--color15), 0 0 160px var(--color15), 0 0 320px var(--color15), 0 0 640px var(--color15)",
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
            "& a": {
              height: "48px",
              lg: {
                height: "50px",
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingInline: "7px",
              border: "2px solid var(--color6)",
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
              <a href={`/${link}`}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
});
