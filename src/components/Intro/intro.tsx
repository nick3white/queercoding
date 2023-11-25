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
              Queer Coding provides guidance and information for people in the
              LGBTQ+ community who'd like to learn to code.{" "}
            </p>
            <p>
              At QC, we've known{" "}
              <a class="llines" href="/myr">
                way too many people
              </a>{" "}
              who{" "}
              <a class="llines" href="/bravery">
                get through
              </a>{" "}
              incredibly difficult transition and/or coming out experiences -
              only to find themselves without skills or training to find a job.
              If that sounds like you, and you're interested in web development,
              software engineering, infosec, or any of that cool stuff, you're
              in the right place!
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
