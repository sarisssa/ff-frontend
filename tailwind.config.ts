import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-content": "#000000",
        "ff-gray": "#f8f9fa",
        "ff-dark-gray": "#555e6d",
        "ff-border-light": "#f3f4f6",
        "ff-border-dark-gray": "#9095a0",
        "ff-light-gray": "#f8f9fa",
        "ff-recovery-background": "#dee1e6",
        "ff-settings-gray": "#fafafb",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
export default config;
