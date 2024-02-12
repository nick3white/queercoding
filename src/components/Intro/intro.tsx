import { component$, useSignal } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

import { CloseBtn } from "../CloseBtn/closebtn";

export const Intro = component$(() => {
  const intro = useSignal(true);
  return (
    <div
      class={css({
        width: "75vw",
        margin: "50px auto",
        fontSize: "1.20rem",
        overflow: "hidden",
        "& .surface-1": {
          height: "100%",
          transition: "all 0.2s ease-in-out",
          position: "relative",
        },
        "& .intro": {
          fontSize: "1.33rem",
          textAlign: "center",
          margin: "20px",
        },
        "& button": {
          color: "white",
        },
      })}
    >
      <div class="surface-1">
        {intro.value ? (
          <>
            <p class="intro">
              Queer Coding will hopefully be a resource for people in the
              LGBTQ+ community who'd like to learn to code.{" "}
            </p>
            <p>
              While most of the lgbt+ nerds I know liked the name, people outside the community haven't responded well to it.  Gonna disable a lot of this until I come up with a better name.
            </p>
          </>
        ) : (
          <p>what is this i don't even</p>
        )}
        <CloseBtn open={intro} />
      </div>
    </div>
  );
});
