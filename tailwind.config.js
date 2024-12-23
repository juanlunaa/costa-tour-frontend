/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT({
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        custom: "2px 2px 1px rgba(0, 0, 0, 1), 0px 0px 18px rgba(0, 0, 0, 1)",
      },
      fontFamily: {
        volkhov: ["var(--font-volkhov)"],
        mulish: ["var(--font-mulish)"],
        anton: ["var(--font-anton)"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        customOrange: "#FFA432",
        customBlue: "#37B1E2",
        blueProfile: "#A7E9F2",
        yellowProfile: "#F4B46A",
        customYellow: "#FFDA32",
        customBlueInputAuth: "#D1EEF2",
        yellowLogo: "#f1bc4a",
        blueLogo: "#1c2631",
        customBlack: "#202020",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      boxShadow: {
        customBlueShadow: "0 4px 6px rgba(123, 188, 176, 0.5)",
        customBoxShadow:
          "0 0px 15px 2px rgb(0 0 0 / 0.1), 0 4px 6px 2px rgb(0 0 0 / 0.1)",
        customBoxShadowDark:
          "0 0px 15px 2px rgb(255 255 255 / 0.1), 0 4px 6px 2px rgb(255 255 255 / 0.05)",
        customBoxShadowMain:
          "0 0px 13px 4px rgb(0 0 0 / 0.2), 0 0px 4px 2px rgb(0 0 0 / 0.2)",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(320px, 1fr))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        ascend: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        ascend: "ascend 1.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
})
