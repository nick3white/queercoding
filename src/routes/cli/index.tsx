import { css } from "~/styled-system/css";
import { component$ } from "@builder.io/qwik";
import { Card } from "~/components/Card/card";

// import { Header } from "~/components/Header/header";

const content = [
  ["/start", "getting started"],
  ["/you", "is this for me?"],
  ["/langs", "overview of languages"],
  ["/js", "javascript 101"],
  ["/react", "react 101"],
  ["/python", "python 101"],
  ["/devops", "dev ops"],
  ["/devsecops", "dev sec ops"],
  ["/gitops", "git ops"],
  ["/febe", "front end or back end?"],
  ["/infosec", "information security (infosec)"],
  ["/linux", "linux"],
  ["/cli", "whats a command line??"],
  ["/bootcamps", "should you do a bootcamp?"],
];
export default component$(() => {
  return (
    <>
      {/* <Header /> */}
      <div
        class={css({
          "& .parent": {
            display: "flex",
            flexWrap: "wrap",
            gap: "0",
            minHeight: "100vh",
            justifyContent: "center",
            alignItems: "flex-start",
          },
          // "& .child": {
          //   justifyContent: "center",
          //   alignItems: "center",
          //   // width: "24vw",
          //   aspectRatio: "1 / 1",
          //   opacity: 0.8,
          //   // minHeight: "100px",
          //   background: "var(--background)",
          //   // border: "1px solid var( --foreground )",
          //   "&:hover": {
          //     opacity: 1,
          //   },
          //   "&:hover ~ .queer": {
          //     opacity: 0,
          //   },
          // },
        })}
      >
        <div class="parent">
          {content.map((c, i) => {
            return (
              <Card
                key={i}
                url={c[0]}
                text={c[1]}
                flip={content[Math.floor(Math.random() * content.length)][0]}
              />
            );
          })}
        </div>
      </div>
    </>
  );
});
