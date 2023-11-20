import { component$, Slot } from "@builder.io/qwik";
import { useDocumentHead } from "@builder.io/qwik-city";
import { Header } from "~/components/Header/header";
import { css } from "~/styled-system/css";

export default component$(() => {
  const { frontmatter } = useDocumentHead();
  console.log("frontmatter", frontmatter);
  return (
    <>
      <Header />
      <div
        class={css({
          "& > *": {
            width: "75%",
            margin: "20px auto",
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
          "& a": {
            color: "inherit !important",
            textDecoration: "none",
            background:
              "linear-gradient(to right, var(--color15), var(--color15)), linear-gradient(to right, var(--color7), var(--color7))",
            backgroundSize: "100% 0.1rem, 0 0.1rem",
            backgroundPosition: "100% 100%, 0 100%",
            backgroundRepeat: "no-repeat",
            transition: "background-size 400ms",
            "&:hover": {
              backgroundSize: "0 0.1rem, 100% 0.1rem",
            },
          },
          "& .md-title": {
            fontSize: "2rem !important",
          },
        })}
      >
        <h1 class="md-title">{frontmatter.pagetitle}</h1>
        <Slot />
      </div>
    </>
  );
});
