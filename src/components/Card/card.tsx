import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export interface CardProps {
  url: string;
  text: string;
  flip: string;
}

export const Card = component$<CardProps>((props) => {
  return (
    <div
      id={props.url.substring(1)}
      class={css({
        backgroundColor: "transparent",
        width: "300px",
        height: "300px",
        perspective: "1000px",

        /* This container is needed to position the front and back side */
        "& .flip-card-inner": {
          position: "relative",
          width: "100%",
          height: "100%",
          textAlign: "center",
          transition: "transform 0.8s",
          transformStyle: "preserve-3d",
        },

        /* Do an horizontal flip when you move the mouse over the flip box container */
        "&:hover .flip-card-inner": {
          // transform: "rotateY(180deg)",
          opacity: 0.99,
          background:
            "repeating-linear-gradient(45deg, var(--color6), var(--color6) 10px, var(--color2) 10px, var(--color2) 20px )",
          "& span": {
            background: "var(--background)",
            borderBlock: "2px solid var(--foreground)",
          },
        },
        "&:hover ~ #[data-flip]": {
          background: "black",
        },
        /* Position the front and back side */
        "& .flip-card-front, .flip-card-back": {
          position: "absolute",
          width: "100%",
          height: "100%",
          backfaceVisibility: "hidden",
        },

        /* Style the front side (fallback if image is missing) */
        "& .flip-card-front": {
          justifyContent: "center",
          alignItems: "center",
          color: "var(--foreground)",
          fontSize: "1.5rem",
          position: "relative",
          opacity: 0.87,
          background: "var(--color2)",
          border: "1px solid var(--color7)",
        },

        /* Style the back side */
        "& .flip-card-back": {
          backgroundColor: "dodgerblue",
          color: "var(--foreground)",
          transform: "rotateY(180deg)",
        },
        "& .flip-card-inner[data-flip]": {
          width: "300px",
          height: "300px",
        },
      })}
    >
      <div
        class="flip-card-inner"
        data-flip={props.flip.substring(1)}
        id={props.url.substring(1)}
      >
        <div class="flip-card-front">
          <span>{props.text}</span>
        </div>
        <div class="flip-card-back">
          <h1>Coding</h1>
          <p>Code</p>
        </div>
      </div>
    </div>
  );
});
