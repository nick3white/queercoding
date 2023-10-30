import { component$ } from "@builder.io/qwik";
import { flags } from "~/root";

const csss = flags.map((flag, index) => {
  const varis = flag.colors.map((c, i) => `--${i}: ${c.rgb.join()};`);
  return `.${flag.name} { ${varis.join(" ")} }`;
});

export default component$(() => {
  return (
    <div>
      New route works.
      <ul></ul>
      <pre>{csss}</pre>
    </div>
  );
});
