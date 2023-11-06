import { component$, Slot } from "@builder.io/qwik";
import { Header } from "~/components/Header/header";
import { css } from "~/styled-system/css";

export default component$(() => {
  return (
    <>
      <Header />
      <div
        class={css({
          "& > *": {
            width: "75%",
            margin: "10px auto",
            padding: "10px",
            background: "var(--background)",
            border: "2px solid var(--foreground)",
          },
          "& :not(h1, h2, h3, h4, h5, h6)": {
            lineHeight: "1.77rem",
          },

          "& ol": {
            listStyleType: "decimal",
          },
          "& li": {
            position: "relative",
            width: "85%",
            left: "50px",
          },
        })}
      >
        <Slot />
      </div>
    </>
  );
});
