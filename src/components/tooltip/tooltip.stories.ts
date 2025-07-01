import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import LarsaTooltip from './index.ts';

const meta = {
	title: 'Overlays/Tooltip',
	render: (args) =>
		html`<larsa-button
            >Tooltip
        </larsa-button><larsa-tooltip
            position=${ifDefined(args.position)}
            ?disabled=${args.disabled}
            query=${ifDefined(args.query)}
        >${args.children}</larsa-tooltip
        >`,
	tags: ['autodocs'],
	argTypes: {
		children: {
			control: {
				type: 'text',
			},
		},
		position: {
			control: {
				type: 'select',
			},
			options: [
				'top',
				'top-start',
				'top-end',
				'bottom',
				'bottom-start',
				'bottom-end',
				'left',
				'left-start',
				'left-end',
				'right',
				'right-start',
				'right-end',
			],
		},
	},
} satisfies Meta<LarsaTooltip>;

export default meta;

export const Default = {
	args: {
		position: 'bottom',
		disabled: false,
		query: null,
		children: 'This is a tooltip',
	},
};
