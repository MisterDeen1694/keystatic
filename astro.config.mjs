import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import keystatic from "@keystatic/astro";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
	output: "static",
	adapter: netlify(),
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		react(),
		keystatic(),
	],
});
