import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#15130f",
        bg: "#faf6ef",
        card: "#ffffff",
        line: "#e7e0d3",
        mut: "#6d6a61",
        ac: "#ff6a2b",
        ac2: "#ffe0cf",
        dark: "#131210",
      },
      fontFamily: {
        sans: ["Onest", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "20px",
        xl3: "28px",
      },
      keyframes: {
        marquee: { to: { transform: "translateX(-50%)" } },
        pop: {
          from: { opacity: "0", transform: "scale(.85)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        marquee: "marquee 24s linear infinite",
        pop: "pop .5s cubic-bezier(.2,.8,.2,1)",
      },
    },
  },
  plugins: [],
};
export default config;
