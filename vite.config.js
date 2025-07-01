// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	resolve: {
		alias: {
			src: '/src',
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'LarsaComponents',
			fileName: 'index',
			formats: ['es', 'cjs'],
		},
	},
	plugins: [dts({ rollupTypes: true })],
});
