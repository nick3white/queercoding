import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Cards } from "~/components/Cards/cards";
import { Header } from "~/components/Header/header";

export default component$(() => {
  return (
    <>
      <Header />
      <Cards />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Queer Coding!",
  meta: [
    {
      name: "description",
      content:
        "A site to help people in and around the LGBT community learn to code.",
    },
  ],
};
