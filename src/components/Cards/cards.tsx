import { component$ } from "@builder.io/qwik";
// import { component$, useStyles$ } from "@builder.io/qwik";
// import styles from "./cards.css?inline";
// import { css } from "~/styled-system/css";
// const bars = [0, 7, 20, 36];
const rectangles = [2, 3, 12, 23, 25, 27, 31, 35, 45];
const bigsquares = [8, 9, 37, 40, 41];
// const leftOffAt = "phoenix project 2:22:39";
const headers = [
  "Featured content!  ",
  "Check out these boxes! They are extremely amazing content",
  "I put even more boxes down here, to represent the *SHEER ENORMITY* of our content selection",
  "we probably can't fill all these, but w/e, I like making boxes",
];
export const Cards = component$(() => {
  return (
    <div class="cards">
      <h2 class="surface-1">{headers[0]}</h2>
      <div class="flex-container">
        {/* <div class="grid-container"> */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            class={rectangles.includes(i) ? "box rect" : "box sq1x1"}
          >
            <span>{i}</span>
          </div>
        ))}
        <h2 class="surface-1">{headers[1]}</h2>
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            class={
              rectangles.includes(i)
                ? "box rect"
                : bigsquares.includes(i)
                ? "box sq2x2"
                : "box sq1x1"
            }
          >
            <span>{i}</span>
          </div>
        ))}
        <h2 class="surface-1">
          all of our sponsers can have their logos here, which will be like a
          million
        </h2>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} class="box sq1x1">
            <span>{i}</span>
          </div>
        ))}
      </div>
    </div>
  );
});
