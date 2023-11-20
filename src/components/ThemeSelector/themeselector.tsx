import { useTheme } from "qwik-themes";
import { $, component$, useOnWindow, useSignal } from "@builder.io/qwik";

export const themes = [
  "arst",
  "berries",
  "flowers",
  "sun",
  "growing",
  // "heavy-psych",
  "ibm",
  // "icamera",
  "nightlights",
  "trees",
  "chicago",
  "winter",
  "wood",
  // "basic",
];

// function titleMaker(text: string) {
//   return (
//     text.charAt(0).toUpperCase() +
//     text.replace("-", " ").substr(1).toLowerCase()
//   );
// }
export const ThemeSelector = component$(() => {
  const { theme, setTheme } = useTheme();
  // const esc = useSignal(0);

  // useEffect$(() => {
  //   const handleKeyPress = (event) => {
  //     if (event.key === "Escape") {
  //       esc.value++;
  //     }
  //   };
  //   window.addEventListener("keypress", handleKeyPress);
  //
  //   return () => {
  //     window.removeEventListener("keypress", handleKeyPress);
  //   };
  // });
  // useOnWindow(
  //   "keyup",
  //   $((event) => {
  //     if (event.key === "Escape") {
  //       esc.value++;
  //       console.log(esc.value);
  //       if (esc.value > 2) {
  //         setTheme("basic");
  //       }
  //     } else {
  //       console.log(event.key);
  //     }
  //   }),
  // );
  return (
    <div class="theme-btn-container">
      {themes.map((th) => (
        <button
          key={th}
          style={`background-image: url("/sm${th}.jpg"); width: ${Math.floor(
            (1 / themes.length) * 100,
          )}vw`}
          class={`theme-btn ${th === theme ? "vis" : "invis"}`}
          onClick$={() => setTheme(th)}
        ></button>
      ))}
    </div>
  );
});
