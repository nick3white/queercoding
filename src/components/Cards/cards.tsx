import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

// const bars = [0, 7, 20, 36];
const rectangles = [2, 3, 12, 23, 25, 27, 31, 35, 45];
const bigsquares = [8, 9, 37, 40, 41];

// const leftOffAt = "phoenix project 2:22:39";

const headers = [
  "Featured content!",
  "Check out these boxes! They are extremely amazing content",
  "I put even more boxes down here, to represent the *SHEER ENORMITY* of our content selection",
  "we probably can't fill all these, but w/e, I like making boxes",
];

const content = [
  ["/start", "getting started"],
  ["/you", "is this for me?"],
  ["/langs", "overview of languages"],
  ["/js", "javascript 101"],
  ["/react", "react 101"],
  ["/python", "python 101"],
  ["/devops", "dev ops"],
  ["/infosec", "information security (infosec)"],
  ["/engineering", "software engineering"],
  // ["/devsecops", "dev sec ops"],
  // ["/gitops", "git ops"],
  ["/febe", "front end or back end?"],
  ["/linux", "linux"],
  ["/cli", "whats a command line??"],
  // ["/bootcamps", "should you do a bootcamp?"],
];

export const Cards = component$(() => {
  return (
    <div
      class={css({
        "& .surface-1": {
          width: "75vw",
          margin: "20px auto",
        },
        "& .flex-container": {
          width: "75vw",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",

          "& .sq1x1": {
            aspectRatio: "1 / 1",
            width: "calc(37.5vw - 5px)",
            lg: {
              width: "calc(18.75vw - 10px)",
            },
          },
          "& .sq2x2": {
            aspectRatio: "1 / 1",
            width: "75vw",
            lg: {
              width: "calc(37.5vw - 10px)",
            },
          },
          "& .rect": {
            aspectRatio: "2 / 1",
            width: "75vw",
            lg: {
              width: "calc(37.5vw - 10px)",
            },
          },
        },
        "& .box": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "var(--foreground)",
          fontSize: "1.5rem",
          position: "relative",
          opacity: 0.87,
          background: "var(--color2)",
          border: "1px solid var(--color7)",
          transition: "200ms",
          "& span": {
            paddingBlock: "10px",
            textAlign: "center",
            width: "100%",
          },
          "&:hover": {
            opacity: 0.99,
            background:
              "repeating-linear-gradient(45deg, var(--color6), var(--color6) 10px, var(--color2) 10px, var(--color2) 20px )",
            "& span": {
              background: "var(--background)",
              border: "2px solid var(--foreground)",
            },
          },
        },
      })}
    >
      <h2 class="surface-1">{headers[0]}</h2>
      <div class="flex-container">
        {Array.from({ length: 6 }).map((_, i: number) => (
          <a
            href={i > content.length - 1 ? String(i) : content[i][0]}
            key={i}
            class={rectangles.includes(i) ? "box rect" : "box sq1x1"}
          >
            <span>{i > content.length - 1 ? String(i) : content[i][1]}</span>
          </a>
        ))}
        <h2 class="surface-1">{headers[1]}</h2>
        {Array.from({ length: 15 }).map((_, i) => (
          <a
            href={i + 6 > content.length - 1 ? String(i) : content[i + 6][0]}
            key={i}
            class={
              rectangles.includes(i)
                ? "box rect"
                : bigsquares.includes(i)
                ? "box sq2x2"
                : "box sq1x1"
            }
          >
            <span>
              {i + 6 > content.length - 1 ? String(i) : content[i + 6][1]}
            </span>
          </a>
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
