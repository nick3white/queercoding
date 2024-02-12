import { component$, type Signal } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export interface CloseBtnProps {
  open: Signal;
}
export const CloseBtn = component$<CloseBtnProps>(({ open }) => {
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
        transition: "250ms",
        "&:hover ": {
          boxShadow:
            "0 0 10px var(--color15), 0 0 20px var(--color15), 0 0 40px var(--color15), 0 0 80px var(--color15), 0 0 160px var(--color15), 0 0 320px var(--color15), 0 0 640px var(--color15)",
        },
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
