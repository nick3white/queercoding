import { component$ } from "@builder.io/qwik";
import { Cards } from "~/components/Cards/cards";
import { css } from "~/styled-system/css";

export default component$(() => {
  return (
    <div
      class={css({
        display: "flex",
        flexDirection: "column",
        "& .actual-real-header": {
          zIndex: 99,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "100px",
          background: "#333",
          // boxShadow: "0 5px 5px rgb(0, 0, 0, 0.33)",
          // backdropFilter: "blur(10px) saturate(0)",
          // background:
          //   "repeating-linear-gradient(45deg, rgba(26, 39, 118, 1), rgba(26, 39, 118, 1) 10px, rgba(0, 12, 72, 1) 10px, rgba(0, 12, 72, 1) 20px)",
        },
        "& .hero": {
          marginTop: "133px",
          height: "50vh",
          width: "100%",
          position: "relative",
          "& .hero-text": {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            height: "100%",
            backdropFilter: "var(--bgFilter)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            "& p": {
              fontSize: "33px",
              color: "var(--fontColor)",
            },
          },
        },
        "& h1": {
          marginTop: "37vh",
          position: "sticky",
          top: 0,
          zIndex: 9001,
          textAlign: "center",
          fontSize: "77px",
          lineHeight: "77px",
          color: "var(--fontColor)",
        },
      })}
    >
      <header class="actual-real-header">
        {/* <ul class="links"> */}
        {/*   <li>a link</li> */}
        {/* </ul> */}
      </header>
      <h1>Queer Coding</h1>
      <main>
        <Cards />
      </main>
    </div>
  );
});
