import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { flags } from "../Hero/hero";
// export interface CardsectionProps {}

function getFlag(index) {
  // const flagIndex = Math.floor(Math.random() * flags.length);
  const flagIndex = index % flags.length;
  const flag = flags[flagIndex];
  const gradientPercentage = Math.round((1 / flag.colors.length) * 100);
  const gradient =
    "linear-gradient(45deg, " +
    flag.colors
      .map(
        (color, i) =>
          "#" +
          color.hex +
          " " +
          gradientPercentage * i +
          "%, #" +
          color.hex +
          " " +
          gradientPercentage * (i + 1) +
          "%",
      )
      .join() +
    ")";
  console.log(index, gradient);
  return gradient;
}

// export const Cardsection = component$<CardsectionProps>((props) => {
export const Cardsection = component$(() => {
  return (
    <div
      class={css({
        "& .grid-container": {
          width: "75vw",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "1fr",
          // gap: "10px",
        },

        "& .div1": { gridArea: "1 / 1 / 2 / 2" },
        "& .div2": { gridArea: "1 / 2 / 2 / 3" },
        "& .div3": { gridArea: "1 / 3 / 2 / 4" },
        "& .div4": { gridArea: "1 / 4 / 2 / 5" },

        // bar
        "& .bar5": { gridArea: "2 / 2 / 4 / 3" },

        "& .div6": { gridArea: "3 / 1 / 4 / 2" },
        "& .div7": { gridArea: "3 / 2 / 4 / 3" },
        "& .div8": { gridArea: "3 / 3 / 4 / 5" }, // rectangle
        "& .div9": { gridArea: "4 / 1 / 5 / 2" },
        "& .div10": { gridArea: "4 / 2 / 5 / 3" },
        "& .div11": { gridArea: "4 / 3 / 5 / 4" },
        "& .div12": { gridArea: "4 / 4 / 5 / 5" },
        "& .div13": { gridArea: "5 / 1 / 6 / 3" }, // rectangle
        "& .div14": { gridArea: "5 / 3 / 6 / 4" },
        "& .div15": { gridArea: "5 / 4 / 6 / 5" },

        // bar

        "& .div15": { gridArea: "5 / 1 / 7 / 3" }, // big square
        "& .div16": { gridArea: "5 / 3 / 6 / 4" },
        "& .div17": { gridArea: "5 / 4 / 6 / 5" },
        "& .div18": { gridArea: "6 / 3 / 7 / 4" },
        "& .div19": { gridArea: "6 / 4 / 7 / 5" },
        "& .div20": { gridArea: "7 / 1 / 8 / 2" },
        "& .div21": { gridArea: "7 / 2 / 8 / 3" },
        "& .div22": { gridArea: "7 / 3 / 8 / 5" }, // rectangle
        "& .div23": { gridArea: "8 / 1 / 9 / 3" }, // rectangle
        "& .div24": { gridArea: "8 / 3 / 9 / 4" },
        "& .div25": { gridArea: "8 / 4 / 9 / 5" },

        // bar

        "& .div26": { gridArea: "9 / 1 / 10 / 2" },
        "& .div27": { gridArea: "9 / 2 / 10 / 3" },
        "& .div28": { gridArea: "9 / 3 / 10 / 4" },
        "& .div29": { gridArea: "9 / 4 / 10 / 5" },
        "& .div30": { gridArea: "10 / 1 / 11 / 3" }, // rectangle
        "& .div31": { gridArea: "10 / 3 / 12 / 5" }, // big square
        "& .div32": { gridArea: "11 / 1 / 13 / 3" }, // big square
        "& .div33": { gridArea: "12 / 3 / 13 / 4" },
        "& .div34": { gridArea: "12 / 4 / 13 / 5" },
        "& .box": {
          // margin: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "var(--fontColor)",
          backgroundColor: "rgba(var(--splash), 0.2)",
          position: "relative",
          background:
            "repeating-linear-gradient(45deg, #eee, #eee 1px, #333 1px, #333 20px)",
          // borderRadius: "7px",
          transition: "0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          "&:hover": {
            background: "rgba(var(--splash), 0.77)",
          },
          "&.sq": {
            aspectRatio: "1 / 1",
          },
          "&.rect": {
            aspectRatio: "2 / 1",
            // aspectRatio: "calc(2 - 10px) / 1", // gotta use calc on rectangles bcause of the gap
            // height: "calc(100% - 20px)", // alternate method, only works if rect is next to a 1u square
          },
        },
        "& .section-header": {
          width: "75%",
          margin: "33px auto",
          fontSize: "33px",
          color: "var(--fontColor)",
        },
        "& .cover": {
          position: "absolute",

          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0,0,0,0.77)",
        },
      })}
    >
      <header class="section-header">
        <h3>Featured content! FEEATURRRED CONNNNTENNNNT!!!</h3>
      </header>

      <header class="section-header">
        <h3>
          Check out these boxes! They are links to extremely amazing content
        </h3>
      </header>
      <div class="grid-container">
        {Array.from({ length: 34 }).map((_, i) => (
          <div
            key={i + 1}
            style={`background: ${getFlag(i)};`}
            class={`box doubles div${i + 1} ${
              [6, 11, 21, 22, 29].includes(i) ? "rect" : "sq"
            }`}
          >
            <div class="cover">doubles {i + 1}</div>
          </div>
        ))}
      </div>
      <header class="section-header">
        <h3>
          I put even more boxes down here, to represent the *SHEER ENORMITY* of
          our content selection
        </h3>
      </header>
    </div>
  );
});
