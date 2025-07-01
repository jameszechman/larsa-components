import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import LarsaAlert from '.';

const meta = {
	title: 'Display/Alert',
	tags: ['autodocs'],
	render: (args) =>
		html`<larsa-alert 
            status=${ifDefined(args.status)}
            ?dismissible=${args.dismissible}
            >${unsafeHTML(args.slot)}</larsa-alert
        >`,
	argTypes: {
		status: {
			control: {
				type: 'select',
			},
			options: [null, 'warning', 'error', 'success', 'info'],
			description: 'The status of the alert',
			defaultValue: {
				summary: 'info',
			},
		},
		dismissible: {
			control: 'boolean',
			description: 'Whether the alert can be dismissed',
			defaultValue: {
				summary: false,
			},
		},
	},
} satisfies Meta<LarsaAlert>;

export default meta;
type Story = StoryObj<LarsaAlert>;

export const Default: Story = {
	args: {
		dismissible: true,
	},
};

export const Info: Story = {
	args: {
		status: 'info',
		slot: `<strong slot="heading">Info Status</strong> Hello my
            friend`,
	},
};

export const Success: Story = {
	args: {
		status: 'success',
		slot: `<strong slot="heading">Success Status</strong> Hello my
            friend`,
	},
};

export const Warning: Story = {
	args: {
		status: 'warning',
		slot: `<strong slot="heading">Warning Status</strong> Hello my
            friend`,
	},
};

export const Error: Story = {
	args: {
		status: 'error',
		slot: `<strong slot="heading">Error Status</strong> Hello my
            friend`,
	},
};
