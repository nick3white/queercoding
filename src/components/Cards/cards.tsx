import { component$ } from "@builder.io/qwik";
// import { component$, useStyles$ } from "@builder.io/qwik";
// import styles from "./cards.css?inline";
// import { css } from "~/styled-system/css";
const bars = [0, 7, 20, 36];
const rectangles = [3, 4, 12, 23, 25, 27, 31, 35, 45];
const bigsquares = [17, 37, 40, 41];
// const leftOffAt = "phoenix project 2:22:39";
const headers = [
  "Featured content!  FEEEEATURRED CONNTEENNNNTTT!!!!",
  "Check out these boxes! They are links to extremely amazing content",
  "I put even more boxes down here, to represent the *SHEER ENORMITY* of our content selection",
  "we probably can't fill all these, but w/e, I like making boxes",
];
export const Cards = component$(() => {
  return (
    <div class="container">
      <div class="grid-container">
        {Array.from({ length: 47 }).map((_, i) => (
          <div
            key={i}
            class={
              bars.includes(i)
                ? "bar"
                : rectangles.includes(i)
                ? "box rect"
                : bigsquares.includes(i)
                ? "box sq2x2"
                : "box sq1x1"
            }
          >
            {bars.includes(i) ? (
              <h3 class="surface-1">{headers[Math.round((i / 47) * 4)]}</h3>
            ) : (
              <span>{i}</span>
            )}
          </div>
        ))}
        <div class="sq1x1"></div>
        <div class="sq2x2"></div>
        <div class="bar">
          all of our sponsers can have their logos here, which will be like a
          million
        </div>
      </div>
    </div>
  );
});
