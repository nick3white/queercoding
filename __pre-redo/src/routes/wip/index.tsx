import { component$ } from "@builder.io/qwik";
import { Cards } from "~/components/Cards/cards";
// import { ThemeSelector } from "~/components/ThemeSelector/themeselector";
import { css } from "~/styled-system/css";

export default component$(() => {
  return (
    <div
      class={css({
        display: "flex",
        flexDirection: "column",
        "& .actual-real-header": {
          zIndex: 99,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "100px",
          background: "#333",
          // boxShadow: "0 5px 5px rgb(0, 0, 0, 0.33)",
          // backdropFilter: "blur(10px) saturate(0)",
          // background:
          //   "repeating-linear-gradient(45deg, rgba(26, 39, 118, 1), rgba(26, 39, 118, 1) 10px, rgba(0, 12, 72, 1) 10px, rgba(0, 12, 72, 1) 20px)",
        },
        "& h1": {
          fontFamily: "big-blue",
          textShadow:
            "0 0 5px #333, 0 0 10px #333, 0 0 20px #333, 0 0 40px #333, 0 0 80px #333",
          fontSize: "clamp(2rem, 7vw, 3.3rem)",
          marginTop: "37vh",
          position: "sticky",
          top: 0,
          zIndex: 9001,
          textAlign: "center",
          lineHeight: "100px",
          color: "var(--fontColor)",
        },
      })}
    >
      <header class="actual-real-header">{/* <ThemeSelector /> */}</header>
      <h1>Queer Coding</h1>
      <main>
        <Cards />
      </main>
    </div>
  );
});
