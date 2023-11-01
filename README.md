# queercoding

Like coding, but this time, for the gays

just putting this here so I have it somewhere:

        "& .singles.div1": { gridArea: "1 / 1 / 2 / 2" },
        "& .singles.div2": { gridArea: "1 / 2 / 2 / 3" },
        "& .singles.div3": { gridArea: "1 / 3 / 2 / 4" },
        "& .singles.div4": { gridArea: "1 / 4 / 2 / 5" },

        "& .doubles.div1": { gridArea: "1 / 1 / 2 / 2" },
        "& .doubles.div2": { gridArea: "1 / 2 / 2 / 3" },
        "& .doubles.div3": { gridArea: "1 / 3 / 2 / 4" },
        "& .doubles.div4": { gridArea: "1 / 4 / 2 / 5" },
        "& .doubles.div5": { gridArea: "2 / 1 / 3 / 2" },
        "& .doubles.div6": { gridArea: "2 / 2 / 3 / 3" },
        "& .doubles.div7": { gridArea: "2 / 3 / 3 / 5" }, // rectangle
        "& .doubles.div8": { gridArea: "3 / 1 / 4 / 2" },
        "& .doubles.div9": { gridArea: "3 / 2 / 4 / 3" },
        "& .doubles.div10": { gridArea: "3 / 3 / 4 / 4" },
        "& .doubles.div11": { gridArea: "3 / 4 / 4 / 5" },
        "& .doubles.div12": { gridArea: "4 / 1 / 5 / 3" }, // rectangle
        "& .doubles.div13": { gridArea: "4 / 3 / 5 / 4" },
        "& .doubles.div14": { gridArea: "4 / 4 / 5 / 5" },

        "& .busy.div1": { gridArea: "1 / 1 / 3 / 3" }, // big square
        "& .busy.div2": { gridArea: "1 / 3 / 2 / 4" },
        "& .busy.div3": { gridArea: "1 / 4 / 2 / 5" },
        "& .busy.div4": { gridArea: "2 / 3 / 3 / 4" },
        "& .busy.div5": { gridArea: "2 / 4 / 3 / 5" },
        "& .busy.div6": { gridArea: "3 / 1 / 4 / 2" },
        "& .busy.div7": { gridArea: "3 / 2 / 4 / 3" },
        "& .busy.div8": { gridArea: "3 / 3 / 4 / 5" }, // rectangle
        "& .busy.div9": { gridArea: "4 / 1 / 5 / 3" }, // rectangle
        "& .busy.div10": { gridArea: "4 / 3 / 5 / 4" },
        "& .busy.div11": { gridArea: "4 / 4 / 5 / 5" },
        "& .busy.div12": { gridArea: "5 / 1 / 6 / 2" },
        "& .busy.div13": { gridArea: "5 / 2 / 6 / 3" },
        "& .busy.div14": { gridArea: "5 / 3 / 6 / 4" },
        "& .busy.div15": { gridArea: "5 / 4 / 6 / 5" },
        "& .busy.div16": { gridArea: "6 / 1 / 7 / 3" }, // rectangle
        "& .busy.div17": { gridArea: "6 / 3 / 8 / 5" }, // big square
        "& .busy.div18": { gridArea: "7 / 1 / 9 / 3" }, // big square
        "& .busy.div19": { gridArea: "8 / 3 / 9 / 4" },
        "& .busy.div20": { gridArea: "8 / 4 / 9 / 5" },

## Vercel Edge

This starter site is configured to deploy to [Vercel Edge Functions](https://vercel.com/docs/concepts/functions/edge-functions), which means it will be rendered at an edge location near to your users.

## Installation

The adaptor will add a new `vite.config.ts` within the `adapters/` directory, and a new entry file will be created, such as:

```
└── adapters/
    └── vercel-edge/
        └── vite.config.ts
└── src/
    └── entry.vercel-edge.tsx
```

Additionally, within the `package.json`, the `build.server` script will be updated with the Vercel Edge build.

## Production build

To build the application for production, use the `build` command, this command will automatically run `bun build.server` and `bun build.client`:

```shell
bun build
```

[Read the full guide here](https://github.com/BuilderIO/qwik/blob/main/starters/adapters/vercel-edge/README.md)

## Dev deploy

To deploy the application for development:

```shell
bun deploy
```

Notice that you might need a [Vercel account](https://docs.Vercel.com/get-started/) in order to complete this step!

## Production deploy

The project is ready to be deployed to Vercel. However, you will need to create a git repository and push the code to it.

You can [deploy your site to Vercel](https://vercel.com/docs/concepts/deployments/overview) either via a Git provider integration or through the Vercel CLI.
