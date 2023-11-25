import { component$, useSignal } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { CloseBtn } from "../CloseBtn/closebtn";

// export interface ClickHereProps {
//   link: string;
//   text: string;
// }

export const ClickHere = component$(() => {
  const show = useSignal(true);
  if (show.value) {
    return (
      <div
        class={css({
          padding: "10px",
          background: "var(--background)",
          border: "2px solid var(--foreground)",
          position: "fixed",
          paddingRight: "40px",
          bottom: "9%",
          right: "10px",
          width: "33%",
          fontSize: "clamp(1.66rem, 6vw, 2.5rem)",
          lineHeight: "clamp(1.66rem, 6vw, 2.5rem) !important",
          overflow: "hidden",

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
        })}
      >
        If you're not sure where to go, <a href="/js">click here!</a>
        <CloseBtn open={show} />
      </div>
    );
  } else {
    return <div />;
  }
});
