module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        px: "1px",
      },
      spacing: {
        px: "3px",
        128: "27rem",
        enorme: "55rem",
        98: "30rem",
        99: "35rem",
        100: "33rem",
      },
      colors: {
        box: "#B9FFFC",
        title: "#3FD1CB",
        nav: "#7579E7",
        "ltr-cr": "#10C518",
        violet: "#9900F8",
        jeune: "#FFE300",
        rouze: "#FF008E",
        beige: "#FFF6EA",
        "v-clair": "#DB00FF",
        whiteL: "#FDFDFD",
        bleu: "#000699",
        "smoke-light": "rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
