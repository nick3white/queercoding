import { component$ } from "@builder.io/qwik";
import { ThemeSelector } from "../ThemeSelector/themeselector";

// export interface HeaderProps {}

export const Header = component$(() => {
  return (
    <header>
      <ThemeSelector />
      <div class="surface-1">
        <h2>Welcome to</h2>
        <h1>Queer Coding</h1>
        <p>
          like coding, but this time <em>for gays</em>
        </p>
      </div>
    </header>
  );
});
