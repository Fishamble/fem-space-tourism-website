import type { Config } from "tailwindcss";

// Custom line-heights
// 25 1.5625rem
// 28 1.6255rem
// 32 25rem
// 100 6.255rem
// 150 9.3755rem

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow_condensed: ["var(--font-barlow-condensed)"],
        bellefair: ["var(--font-bellefair)"],
      },
      letterSpacing: {
        "ls-1": "1.25px",
        "ls-2": "2px",
        "ls-3": "2.362px",
        "ls-4": "2.7px",
        "ls-5": "3.375px",
        "ls-6": "4.725px",
      },
    },
    fontSize: {
      "fs-100": "0.875rem",
      "fs-200": "0.9375rem",
      "fs-300": "1rem",
      "fs-400": "1.125rem",
      "fs-500": "1.25rem",
      "fs-600": "1.75rem",
      "fs-700": "2rem",
      "fs-800": "3.5rem",
      "fs-900": "5rem",
      "fs-1000": "6.25rem",
      "fs-1100": "9,375rem",
    },

    screens: {
      tablet: "480px",
      desktop: "769px",
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      lilac: "hsl(231, 77%, 90%)",
      black: "hsl(230, 25%, 7%)",
      yellow: "hsl(59, 100%, 75%)",
      brown: "hsl(48, 77%, 42%)",
    },
    backgroundImage: {
      "home-mobile": "url('/home/background-home-mobile.jpg')",
      "home-tablet": "url('/home/background-home-tablet.jpg')",
      "home-desktop": "url('/home/background-home-desktop.jpg')",
      "destination-mobile":
        "url('/destination/background-destination-mobile.jpg')",
      "destination-tablet":
        "url('/destination/background-destination-tablet.jpg')",
      "destination-desktop":
        "url('/destination/background-destination-desktop.jpg')",
      "crew-mobile": "url('/crew/background-crew-mobile.jpg')",
      "crew-tablet": "url('/crew/background-crew-tablet.jpg')",
      "crew-desktop": "url('/crew/background-crew-desktop.jpg')",
      "technology-mobile":
        "url('/technology/background-technology-mobile.jpg')",
      "technology-tablet":
        "url('/technology/background-technology-tablet.jpg')",
      "technology-desktop":
        "url('/technology/background-technology-desktop.jpg')",
    },
  },
  plugins: [],
};
export default config;
