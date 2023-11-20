import type { Signal } from "@builder.io/qwik";
import { component$, useSignal } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export interface CloseBtnProps {
  open: Signal;
}
const CloseBtn = component$<CloseBtnProps>(({ open }) => {
  return (
    <button
      onClick$={() => (open.value = !open.value)}
      class={css({
        position: "absolute",
        border: "1px solid var(--foreground)",
        background: "var(--background)",
        top: "3px",
        right: "3px",
        width: "40px",
        height: "40px",
        "& div": {
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "20px",
          height: "5px",
          background: "var(--foreground)",
          transition: "transform 0.2s ease-out",
          transformOrigin: "center",
        },
        "& .ex": {
          transform: "translate(-50%, -50%) rotate(45deg)",
          "&.turned": {
            transform: "translate(-50%, -50%) rotate(90deg) !important",
          },
        },
        "& .xe": {
          transform: "translate(-50%, -50%) rotate(-45deg)",
          "&.turned": {
            transform: "translate(-50%, -50%) rotate(0deg) !important",
          },
        },
      })}
    >
      <div class={open.value ? "ex" : "ex turned"}></div>
      <div class={open.value ? "xe" : "xe turned"}></div>
    </button>
  );
});
export const Intro = component$<IntroProps>((props) => {
  const intro = useSignal(true);
  return (
    <div
      class={css({
        width: "75vw",
        margin: "50px auto",
        fontSize: "1.20rem",
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
              only to find they haven't got much on their resume. If that sounds
              like you, and you're interested in web development, software
              engineering, infosec, or any of that cool stuff, you're in the
              right place!
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
