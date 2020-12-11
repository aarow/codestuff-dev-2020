module.exports = {
  variants: {
    extend: {
      scale: ["hover", "group-hover"],
      shadow: ["hover", "group-hover"],
    },
  },
  theme: {
    fontFamily: {
      serif: [
        "tzimmes",
        "ui-serif",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
      mono: [
        "zeitung-mono",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
        11: "2.75rem",
        12: "3rem",
        13: "3.5rem",
        14: "4rem",
      },
      margin: {
        13: "3.5rem",
        14: "4rem",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "3.5rem",
        "8xl": "4.25rem",
        "9xl": "5rem",
        "10xl": "6rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
    borderStyles: {
      styles: true, // defaults to false
      colors: true, // defaults to false
    },
  },
  plugins: [require("tailwindcss-border-styles")()],
};
