import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export default component$(() => {
  return (
    <section
      class={css({
        position: "relative",
        border: "1px solid var(--color7)",
        // height: "100%",
        flex: 1,
        display: "flex",

        alignItems: "center",
        justifyContent: "center",
        // background: "var(--bg-color-1)",
        // backgroundAttachment: "fixed",
        "& form": {
          width: "50vw",
          // height: "37vh",
          // marginBottom: "10vh",
          display: "flex",
          flexDirection: "column",

          lg: {
            flexDirection: "row",
          },
          alignItems: "space-evenly",
          justifyContent: "space-evenly",
          gap: "16px",
          "& .left, .right": {
            display: "flex",
            flexDirection: "column",
            alignItems: "space-evenly",
            justifyContent: "space-evenly",
            gap: "16px",
          },
          "& input, textarea, button": {
            background: "var(--background)",
            border: "1px solid var(--color7)",
            boxShadow: "var(--shadow)",
            color: "var(--foreground)",
            padding: "16px",
            "&::placeholder": {
              color: "var(--foreground)",
            },
          },
          "& button": {
            cursor: "pointer",
            transition: "200ms",
            "&:hover": {
              background: "var(--color7)",
              color: "var(--background)",
            },
          },
        },
      })}
    >
      <article id="contact">
        <form
          method="POST"
          action="https://formsubmit.co/4c5fb5bc125c9ac8405bf2fbe9a6a4a2"
        >
          <div class="left">
            <input
              class="name"
              type="name"
              name="name"
              placeholder="Enter name..."
              required
            />
            <input
              class="email"
              type="email"
              name="email"
              placeholder="Enter email..."
              required
            />
          </div>
          <div class="right">
            <textarea
              class="message"
              name="message"
              cols={30}
              rows={10}
              placeholder="Add a message..."
              required
            ></textarea>
            <button class="submit">Say hi!</button>
          </div>
        </form>
      </article>
    </section>
  );
});
