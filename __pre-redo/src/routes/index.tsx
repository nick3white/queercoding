import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Background } from "~/components/Background/background";
import { css } from "~/styled-system/css";

export default component$(() => {
  return (
    <main
      class={css({
        height: "100vh",
        width: "100vh",
      })}
    >
      <Background />
      <article
        class={css({
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          flexDirection: "column",
          width: "100%",
          height: "100%",

          backdropFilter: "var(--bgFilter)",
          "& p, h1, h2, h3": {
            color: "var(--fontColor)",
          },
          "& h2, h3, em": {
            fontSize: "clamp(1.66rem,6vw,3rem)",
          },
          "& p": {
            fontSize: "clamp(1.44rem,4vw,2.5rem)",
          },
          "& h1": {
            fontSize: "clamp(2rem,7vw,3.5rem)",
          },
          "& em": {
            fontStyle: "italic",
          },
        })}
      >
        <h2>Welcome to</h2>
        <h1>Queer Coding</h1>
        <p>like coding, but this time</p>
        <p>
          <em>for gays</em>
        </p>
      </article>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Queer Coding",
  meta: [
    {
      name: "description",
      content: "Coding Resources, but for The Gays",
    },
  ],
};
