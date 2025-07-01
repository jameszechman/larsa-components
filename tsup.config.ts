import { defineConfig } from 'tsup';
import { sassPlugin } from 'esbuild-sass-plugin';

export default defineConfig((options) => {
	return {
		entry: [
			// 'src/index.ts'
			'**/*.ts',
		],
		format: ['cjs', 'esm'],
		external: ['**/*.stories.ts', '**/*.config.ts'],
		minify: !options.watch,
		// splitting: true,
		sourcemap: false,
		dts: true,
		clean: true,
		esbuildPlugins: [sassPlugin()],
	};
});
