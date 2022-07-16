import { RenderFunction, renderToString } from "@capri-js/preact/server";

import { App } from "./App";

let isCold = true;

export const render: RenderFunction = async (
  url: string,
  { getHeader, setHeader }
) => {
  if (url !== "/") return;
  setHeader("x-is-cold", isCold.toString()), (isCold = false);
  const city = decodeURIComponent(getHeader("x-vercel-ip-city")!);
  const props = {
    isCold,
    city: city === "null" ? null : city,
    ip: (getHeader("x-forwarded-for") ?? "127.0.0.1").split(",")[0],
  };

  return {
    "#app": renderToString(<App {...props} />),
  };
};
