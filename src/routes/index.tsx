import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Cards } from "~/components/Cards/cards";
import { Header } from "~/components/Header/header";
import { Intro } from "~/components/Intro/intro";
// import { theee } from "./layout";

export default component$(() => {
  return (
    <>
      <Header />
      <Intro />
      <Cards />
    </>
  );
});
const theword = "Queer";
export const head: DocumentHead = {
  title: `${theword} Coding!`,
  meta: [
    {
      name: "description",
      content:
        "A site to help people in and around the LGBT community learn to code.",
    },
  ],
};
