import { useTheme } from "qwik-themes";
import { component$ } from "@builder.io/qwik";

export const themes = [
  "arst",
  "flowers-berries",
  "flowers",
  "flowers-with-sun",
  "growing",
  // "heavy-psych",
  "ibm",
  // "icamera",
  "nightlights",
  "trees",
  "winter-chicago",
  "winter",
  "wood",
];

// function titleMaker(text: string) {
//   return (
//     text.charAt(0).toUpperCase() +
//     text.replace("-", " ").substr(1).toLowerCase()
//   );
// }

export const ThemeSelector = component$(() => {
  const { theme, setTheme } = useTheme();
  return (
    <div class="theme-btn-container">
      {themes.map((th) => (
        <button
          key={th}
          style={`background-image: url("sm${th}.jpg"); width: ${Math.floor(
            (1 / themes.length) * 100,
          )}vw`}
          class={`theme-btn ${th === theme ? "vis" : "invis"}`}
          onClick$={() => setTheme(th)}
        ></button>
      ))}
    </div>
  );
});
