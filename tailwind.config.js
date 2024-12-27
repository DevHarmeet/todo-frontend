module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1E1E1E",
        primary: "#2563EB",
        secondary: "#6B7280",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
