import capri from "@capri-js/preact";
import vercel from "@capri-js/vercel";
import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    preact(),
    capri({
      prerender: false,
      target: vercel({ edge: true }),
    }),
  ],
});
