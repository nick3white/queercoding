import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

// export interface HeroProps {
//
// }
// export const Hero = component$<HeroProps>((props) => {

interface Color {
  color: string;
  hex: string;
  rgb: number[];
  cmyk: number[];
}

interface Flag {
  name: string;
  colors: Color[];
}

export const flags: Flag[] = [
  {
    name: "agender",
    colors: [
      { color: "Black", hex: "000000", rgb: [0, 0, 0], cmyk: [0, 0, 0, 100] },
      {
        color: "Gray",
        hex: "BCC4C7",
        rgb: [188, 196, 199],
        cmyk: [6, 2, 0, 22],
      },
      {
        color: "White",
        hex: "FFFFFF",
        rgb: [255, 255, 255],
        cmyk: [0, 0, 0, 0],
      },
      {
        color: "Green",
        hex: "B7F684",
        rgb: [183, 246, 132],
        cmyk: [26, 0, 46, 4],
      },
    ],
  },
  {
    name: "nonbinary",
    colors: [
      {
        color: "Yellow",
        hex: "FCF434",
        rgb: [252, 244, 52],
        cmyk: [0, 3, 79, 1],
      },
      {
        color: "White",
        hex: "FFFFFF",
        rgb: [255, 255, 255],
        cmyk: [0, 0, 0, 0],
      },
      {
        color: "Purple",
        hex: "9C59D1",
        rgb: [156, 89, 209],
        cmyk: [25, 57, 0, 18],
      },
      { color: "Black", hex: "000000", rgb: [0, 0, 0], cmyk: [0, 0, 0, 100] },
    ],
  },
  {
    name: "genderfluid",
    colors: [
      {
        color: "Pink",
        hex: "FF76A4",
        rgb: [255, 118, 164],
        cmyk: [0, 54, 36, 0],
      },
      {
        color: "White",
        hex: "FFFFFF",
        rgb: [255, 255, 255],
        cmyk: [0, 0, 0, 0],
      },
      {
        color: "Purple",
        hex: "C011D7",
        rgb: [192, 17, 215],
        cmyk: [11, 92, 0, 16],
      },
      { color: "Black", hex: "000000", rgb: [0, 0, 0], cmyk: [0, 0, 0, 100] },
      {
        color: "Blue",
        hex: "2F3CBE",
        rgb: [47, 60, 190],
        cmyk: [75, 68, 0, 26],
      },
    ],
  },
  {
    name: "genderqueer",
    colors: [
      {
        color: "Lavender",
        hex: "B57EDC",
        rgb: [181, 126, 220],
        cmyk: [18, 43, 0, 14],
      },
      {
        color: "White",
        hex: "FFFFFF",
        rgb: [255, 255, 255],
        cmyk: [0, 0, 0, 0],
      },
      {
        color: "Green",
        hex: "4A8123",
        rgb: [74, 129, 35],
        cmyk: [43, 0, 73, 49],
      },
    ],
  },
  {
    name: "bisexual",
    colors: [
      {
        color: "Pink",
        hex: "D60270",
        rgb: [214, 2, 112],
        cmyk: [0, 99, 48, 16],
      },
      {
        color: "Purple",
        hex: "9B4F96",
        rgb: [155, 79, 150],
        cmyk: [0, 49, 3, 39],
      },
      {
        color: "Blue",
        hex: "0038A8",
        rgb: [0, 56, 168],
        cmyk: [100, 67, 0, 34],
      },
    ],
  },
  {
    name: "asexual",
    colors: [
      { color: "Black", hex: "000000", rgb: [0, 0, 0], cmyk: [0, 0, 0, 100] },
      {
        color: "Grey",
        hex: "A3A3A3",
        rgb: [163, 163, 163],
        cmyk: [0, 0, 0, 36],
      },
      {
        color: "White",
        hex: "FFFFFF",
        rgb: [255, 255, 255],
        cmyk: [0, 0, 0, 0],
      },
      {
        color: "Purple",
        hex: "800080",
        rgb: [128, 0, 128],
        cmyk: [0, 100, 0, 50],
      },
    ],
  },
  {
    name: "pansexual",
    colors: [
      {
        color: "Pink/Magenta",
        hex: "FF218C",
        rgb: [255, 33, 140],
        cmyk: [0, 87, 45, 0],
      },
      {
        color: "Yellow",
        hex: "FFD800",
        rgb: [255, 216, 0],
        cmyk: [0, 15, 100, 0],
      },
      {
        color: "Blue/Cyan",
        hex: "21B1FF",
        rgb: [33, 177, 255],
        cmyk: [87, 31, 0, 0],
      },
    ],
  },
  {
    name: "transgender",
    colors: [
      {
        color: "Blue",
        hex: "5BCEFA",
        rgb: [91, 206, 250],
        cmyk: [64, 18, 0, 2],
      },
      {
        color: "Pink",
        hex: "F5A9B8",
        rgb: [245, 169, 184],
        cmyk: [0, 31, 25, 4],
      },
      {
        color: "White",
        hex: "FFFFFF",
        rgb: [255, 255, 255],
        cmyk: [0, 0, 0, 0],
      },
    ],
  },
  {
    name: "gay",
    colors: [
      { color: "Red", hex: "E40303", rgb: [228, 3, 3], cmyk: [0, 99, 99, 11] },
      {
        color: "Orange",
        hex: "FF8C00",
        rgb: [255, 140, 0],
        cmyk: [0, 45, 100, 0],
      },
      {
        color: "Yellow",
        hex: "FFED00",
        rgb: [255, 237, 0],
        cmyk: [0, 7, 100, 0],
      },
      {
        color: "Green",
        hex: "008026",
        rgb: [0, 128, 38],
        cmyk: [100, 0, 70, 50],
      },
      {
        color: "Blue",
        hex: "24408E",
        rgb: [0, 77, 255],
        cmyk: [75, 55, 0, 44],
      },
      {
        color: "Purple/Violet",
        hex: "732982",
        rgb: [117, 7, 135],
        cmyk: [12, 69, 0, 49],
      },
    ],
  },
];
export const Hero = component$(() => {
  return (
    <div
      class={css({
        zIndex: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        // position: "sticky",
        // top: 0,
        width: "100%",
        height: "100%",
      })}
    >
      ok
      {flags.map((flag) => (
        <section
          class={css({
            width: "100%",
            height: "100%",
            flex: 1,
            display: "flex",
            position: "relative",
          })}
          key={flag.name}
        >
          {flag.colors.map((color: Color) => (
            <div
              class="color"
              key={color.hex}
              style={`background-color: rgb(${color.rgb.join()}); flex: 1;`}
            ></div>
          ))}
        </section>
      ))}
    </div>
  );
});
