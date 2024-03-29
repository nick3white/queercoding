import { component$ } from "@builder.io/qwik";

// const themes = {
//   foreground: {
//     value: {
//       _arst: "#eaf0e2",
//       _berries: "#f0ccde",
//       _chicago: "#86cddb",
//       _flowers: "#ece9e3",
//       _growing: "#aed2bf",
//       _ibm: "#f4dfc4",
//       _nightlights: "#9eb9c4",
//       _sun: "#c8e4ef",
//       _trees: "#d1c1a3",
//       _winter: "#b6c0c7",
//       _wood: "#d7c6b5",
//     },
//   },
//   number: {
//     value: {
//       _arst: "#eaf0e2",
//       _berries: "#f0ccde",
//       _chicago: "#86cddb",
//       _flowers: "#ece9e3",
//       _growing: "#aed2bf",
//       _ibm: "#f4dfc4",
//       _nightlights: "#9eb9c4",
//       _sun: "#c8e4ef",
//       _trees: "#d1c1a3",
//       _winter: "#b6c0c7",
//       _wood: "#d7c6b5",
//     },
//   },
//   parens: {
//     value: {
//       _arst: "#DDF0A4",
//       _berries: "#C7AA92",
//       _chicago: "#0C8FB1",
//       _flowers: "#DACAC9",
//       _growing: "#7AC352",
//       _ibm: "#EC9C59",
//       _nightlights: "#CC8969",
//       _sun: "#A3A7D4",
//       _trees: "#8E9207",
//       _winter: "#657A89",
//       _wood: "#A18262",
//     },
//   },
//   result: {
//     value: {
//       _arst: "#56A4CF",
//       _berries: "#BA9A87",
//       _chicago: "#507987",
//       _flowers: "#D5C7B6",
//       _growing: "#65AE56",
//       _ibm: "#E18E48",
//       _nightlights: "#EFAF47",
//       _sun: "#CB9BB3",
//       _trees: "#7B8604",
//       _winter: "#5E7382",
//       _wood: "#927055",
//     },
//   },
//   comment: {
//     value: {
//       _arst: "#a3a89e",
//       _berries: "#a88e9b",
//       _chicago: "#5d8f99",
//       _flowers: "#a5a39e",
//       _growing: "#799385",
//       _ibm: "#aa9c89",
//       _nightlights: "#6e8189",
//       _sun: "#8c9fa7",
//       _trees: "#928772",
//       _winter: "#7f868b",
//       _wood: "#968a7e",
//     },
//   },
//   matched: {
//     value: {
//       _arst: "#56A4CF",
//       _berries: "#BA9A87",
//       _chicago: "#507987",
//       _flowers: "#D5C7B6",
//       _growing: "#65AE56",
//       _ibm: "#E18E48",
//       _nightlights: "#EFAF47",
//       _sun: "#CB9BB3",
//       _trees: "#7B8604",
//       _winter: "#5E7382",
//       _wood: "#927055",
//     },
//   },
//   function: {
//     value: {
//       _arst: "#4F749A",
//       _berries: "#B48F72",
//       _chicago: "#BB9058",
//       _flowers: "#B47689",
//       _growing: "#56A71E",
//       _ibm: "#AC4F24",
//       _nightlights: "#524C57",
//       _sun: "#18CDE3",
//       _trees: "#8E6D20",
//       _winter: "#5D676E",
//       _wood: "#7A5B45",
//     },
//   },
//   operator: {
//     value: {
//       _arst: "#338CEE",
//       _berries: "#C2618B",
//       _chicago: "#077093",
//       _flowers: "#CAAAAC",
//       _growing: "#378E66",
//       _ibm: "#AD684B",
//       _nightlights: "#476579",
//       _sun: "#A493AA",
//       _trees: "#8E7354",
//       _winter: "#A48069",
//       _wood: "#8F6D4F",
//     },
//   },
//   variable: {
//     value: {
//       _arst: "#2067D7",
//       _berries: "#C0A46C",
//       _chicago: "#066E90",
//       _flowers: "#B89494",
//       _growing: "#2A864D",
//       _ibm: "#CC682D",
//       _nightlights: "#45586D",
//       _sun: "#5FD6F0",
//       _trees: "#C37916",
//       _winter: "#576975",
//       _wood: "#835E3C",
//     },
//   },
//   scrollbar: {
//     value: {
//       _arst: "#338CEE",
//       _berries: "#C2618B",
//       _chicago: "#077093",
//       _flowers: "#CAAAAC",
//       _growing: "#378E66",
//       _ibm: "#AD684B",
//       _nightlights: "#476579",
//       _sun: "#A493AA",
//       _trees: "#8E7354",
//       _winter: "#A48069",
//       _wood: "#8F6D4F",
//     },
//   },
//   separator: {
//     value: {
//       _arst: "#338CEE",
//       _berries: "#C2618B",
//       _chicago: "#077093",
//       _flowers: "#CAAAAC",
//       _growing: "#378E66",
//       _ibm: "#AD684B",
//       _nightlights: "#476579",
//       _sun: "#A493AA",
//       _trees: "#8E7354",
//       _winter: "#A48069",
//       _wood: "#8F6D4F",
//     },
//   },
//   background: {
//     value: {
//       _arst: "#0e1913",
//       _berries: "#0c0c04",
//       _chicago: "#021212",
//       _flowers: "#411d1a",
//       _growing: "#072614",
//       _ibm: "#110404",
//       _nightlights: "#210a1f",
//       _sun: "#130b15",
//       _trees: "#120c07",
//       _winter: "#101315",
//       _wood: "#0F0402",
//     },
//   },
//   editorbackground: {
//     value: {
//       _arst: "#0e1913",
//       _berries: "#0c0c04",
//       _chicago: "#021212",
//       _flowers: "#411d1a",
//       _growing: "#072614",
//       _ibm: "#110404",
//       _nightlights: "#210a1f",
//       _sun: "#130b15",
//       _trees: "#120c07",
//       _winter: "#101315",
//       _wood: "#0F0402",
//     },
//   },
// };
// console.log(refactor);
// const content = [
//   ["/start", "getting started"],
//   ["/you", "is this for me?"],
//   ["/langs", "overview of languages"],
//   ["/js", "javascript 101"],
//   ["/react", "react 101"],
//   ["/python", "python 101"],
//   ["/devops", "dev ops"],
//   ["/devsecops", "dev sec ops"],
//   ["/gitops", "git ops"],
//   ["/febe", "front end or back end?"],
//   ["/infosec", "information security (infosec)"],
//   ["/linux", "linux"],
//   ["/cli", "whats a command line??"],
// ];
export default component$(() => {
  return (
    <div class="surface-1">
      about us:
      {/* <ul> */}
      {/*   {content.map((c) => ( */}
      {/*     <li> */}
      {/*       mkdir -p .{c[0]} &amp;&amp; printf -- "---\ntitle: {c[1]}\n---\n\n" */}
      {/*       &gt;&gt; '.{c[0]} */}
      {/*       /index.mdx' */}
      {/*     </li> */}
      {/*   ))} */}
      {/* </ul> */}
    </div>
  );
});
