import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
const bars = [0, 7, 20, 36];
const rectangles = [3, 4, 12, 23, 25, 27, 31, 35];
const bigsquares = [17, 37, 42];
const headers = [
  "Featured content!  FEEEEATURRED CONNTEENNNNTTT!!!!",
  "Check out these boxes! They are links to extremely amazing content",
  "I put even more boxes down here, to represent the *SHEER ENORMITY* of our content selection",
  "we probably can't fill all these, but w/e, I like making boxes",
];
export const Cards = component$(() => {
  return (
    <div
      class={css({
        "& h2, h3": {
          fontSize: "33px",
        },
        "& .grid-container": {
          width: "75vw",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "1fr",
          // gap: "10px",
        },
        "& .sq1x1": {
          gridColumn: "span 1",
          gridRow: "span 1",
        },

        "& .sq2x2": {
          gridColumn: "span 2",
          gridRow: "span 2",
        },
        "& .rect": {
          gridColumn: "span 2",
          gridRow: "span 1",
          aspectRatio: "2 / 1",
        },
        "& .sq1x1, .sq2x2": {
          aspectRatio: "1 / 1",
        },
        "& .bar": {
          gridColumn: "span 4",
          gridRow: "span 1",
          aspectRatio: "4 / 1",
          textAlign: "center",
        },
        "& .box, .bar": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "var(--fontColor)",
          position: "relative",
        },
        "& .box": {
          background: "rgba(0, 0, 0, 0.2)",
          border: "1px solid rgba(0,0,0, 0.7)",
        },
        "& .box:hover": {
          background:
            "repeating-linear-gradient(45deg, rgba(26, 39, 118, 0.1), rgba(26, 39, 118, 0.1) 10px, rgba(0, 12, 72, 0.2) 10px, rgba(0, 12, 72, 0.2) 20px)",
        },
      })}
    >
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
              <h3>{headers[Math.round((i / 47) * 4)]}</h3>
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
