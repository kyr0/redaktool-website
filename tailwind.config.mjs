/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				gray: {
					50: "#fafafa",
					100: "#f5f5f5",
					200: "#e5e5e5",
					300: "#d4d4d4",
					400: "#a3a3a3",
					500: "#737373",
					600: "#525252",
					700: "#404040",
					800: "#262626",
					900: "#171717",
					950: "#0a0a0a",
				},
				coral: {
					50: "hsl(15, 57%, 97%)",
					100: "hsl(17, 60%, 94%)",
					200: "hsl(15, 59%, 89%)",
					300: "hsl(15, 59%, 82%)",
					400: "hsl(16, 57%, 75%)",
					500: "hsl(15, 54%, 60%)",
					600: "hsl(16, 46%, 51%)",
					700: "hsl(16, 46%, 42%)",
					800: "hsl(16, 44%, 35%)",
					900: "hsl(15, 40%, 31%)",
					950: "hsl(16, 47%, 15%)",
				},
				amber: {
					50: "hsl(47, 75%, 95%)",
					100: "hsl(48, 74%, 88%)",
					200: "hsl(45, 76%, 77%)",
					300: "hsl(42, 76%, 64%)",
					400: "hsl(40, 75%, 55%)",
					500: "hsl(38, 73%, 47%)",
					600: "hsl(33, 75%, 40%)",
					700: "hsl(28, 71%, 33%)",
					800: "hsl(24, 63%, 29%)",
					900: "hsl(21, 57%, 26%)",
					950: "hsl(18, 64%, 14%)",
				},
				midnight: {
					50: "hsl(185, 68%, 96%)",
					100: "hsl(191, 67%, 90%)",
					200: "hsl(191, 66%, 82%)",
					300: "hsl(192, 66%, 69%)",
					400: "hsl(193, 61%, 53%)",
					500: "hsl(194, 67%, 43%)",
					600: "hsl(197, 65%, 36%)",
					700: "hsl(198, 58%, 31%)",
					800: "hsl(199, 49%, 27%)",
					900: "hsl(202, 45%, 24%)",
					950: "hsl(202, 56%, 15%)",
				},
				olive: {
					50: "hsl(71, 84%, 95%)",
					100: "hsl(73, 82%, 89%)",
					200: "hsl(75, 83%, 80%)",
					300: "hsl(75, 79%, 67%)",
					400: "hsl(76, 73%, 55%)",
					500: "hsl(77, 75%, 44%)",
					600: "hsl(78, 80%, 35%)",
					700: "hsl(80, 73%, 27%)",
					800: "hsl(79, 64%, 23%)",
					900: "hsl(81, 57%, 15%)",
					950: "hsl(83, 76%, 10%)",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			fontSize: {
				xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.025rem" }],
				sm: ["0.875rem", { lineHeight: "1.25rem" }],
				base: ["1rem", { lineHeight: "1.5rem" }],
				lg: ["1.125rem", { lineHeight: "1.75rem" }],
				xl: ["1.25rem", { lineHeight: "1.75rem" }],
				"2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.06rem" }],
				"3xl": ["1.875rem", { lineHeight: "2.25rem" }],
				"4xl": ["2.25rem", { lineHeight: "2.5rem" }],
				"5xl": ["3rem", { lineHeight: "1" }],
				"6xl": ["3.75rem", { lineHeight: "1" }],
				"7xl": ["4.5rem", { lineHeight: "1" }],
				"8xl": ["6rem", { lineHeight: "1" }],
				"9xl": ["8rem", { lineHeight: "1" }],
			},
			// RedakTool fonts
			fontFamily: {
				heading: ["Cairo Play", "sans-serif"],
				body: ["GeistSans", "sans-serif"],
			},
			backgroundImage: {
				"gradient-b":
					"linear-gradient(0deg, #eee, #fefefe 21%, #fff 25%, #fff)",
				"gradient-t":
					"linear-gradient(180deg, #eee, #fefefe 21%, #fff 25%, #fff)",
				"gradient-br":
					"linear-gradient(-38deg, #eee, #fefefe 21%, #fff 25%, #fff)",
				"gradient-bl":
					"linear-gradient(38deg, #eee, #fefefe 21%, #fff 25%, #fff)",
				"gradient-tr":
					"linear-gradient(-130deg, #eee, #fefefe 21%, #fff 25%, #fff)",
				"gradient-tl":
					"linear-gradient(130deg, #eee, #fefefe 21%, #fff 25%, #fff)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
