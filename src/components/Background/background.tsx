import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { flags, type Flag } from "~/root";
export const Background = component$(() => {
  const rando = Math.floor(Math.random() * flags.length);
  const flag = flags[rando];
  function getFlag(flag: Flag) {
    const gradientPercentage = Math.round((1 / flag.colors.length) * 100);
    const gradient =
      "linear-gradient(45deg, " +
      flag.colors
        .map(
          (color, i: number) =>
            "#" + color.hex + " " + gradientPercentage * i + "% ",
        )
        .join() +
      ")";
    console.log(gradient);
    return gradient;
  }
  const flaGradient = getFlag(flag);
  return (
    <div
      style={`background: ${flaGradient}`}
      class={css({
        zIndex: 0,

        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        // flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        // position: "relative",
        // position: "sticky",
        // top: 0,
        "& p": {
          textAlign: "center",
          width: "100%",
          border: "1px solid black",
        },
      })}
    >
      <p>background: {flag.name} flag</p>
    </div>
  );
});
