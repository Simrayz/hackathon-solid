import solid from "solid-start/vite";
import { defineConfig } from "vite";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";
import vercel from "solid-start-vercel";

const pwaOptions: Partial<VitePWAOptions> = {
  base: "/",
  includeAssets: ["favicon.ico", "robots.txt"],
  manifest: {
    name: "Carweb GO",
    short_name: "CWGO",
    description: "A PWA for Carweb using Solid and Vite",
    theme_color: "#1b1c1d",
    display: "standalone",
    icons: [
      {
        src: "android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "apple-touch-icon.png",
        size: "180x180",
        type: "image/png",
      },
    ],
  },
  devOptions: {
    enabled: true,
    type: "module",
  },
};

export default defineConfig({
  plugins: [solid({ adapter: vercel({}) }), VitePWA(pwaOptions)],
});
