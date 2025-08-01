import type { Preview } from '@storybook/web-components';
import '../src';

const preview: Preview = {
	parameters: {
		actions: {},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
