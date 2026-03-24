// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// Set for absolute URLs (sitemap, RSS): site: 'https://your-marketing-host.example',
	vite: {
		plugins: [tailwindcss()],
	},
});