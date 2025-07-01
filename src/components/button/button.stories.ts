import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import LarsaButton from '.';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { icon } from '../../directives/icon.ts';

const meta = {
	title: 'Display/Button',
	tags: ['autodocs'],
	render: (args) =>
		html`<larsa-button
            ?primary=${args.primary}
            variant=${ifDefined(args.variant)}
            size=${ifDefined(args.size)}
            ?disabled=${args.disabled}
            ?icon=${args.icon}
            >${typeof args.slot === 'string' ? unsafeHTML(args.slot) : html`${args.slot}`}</larsa-button
        >`,
	argTypes: {
		variant: {
			control: 'select',
			options: ['solid', 'outline', 'ghost'],
			defaultValue: 'medium',
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
			defaultValue: 'medium',
		},
		slot: {
			control: 'text',
		},
	},
} satisfies Meta<LarsaButton>;

export default meta;
type Story = StoryObj<LarsaButton>;

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary: Story = {
	args: {
		primary: true,
		size: 'medium',
		slot: 'Button',
	},
};

export const Secondary: Story = {
	args: {
		primary: false,
		size: 'medium',
		slot: 'Button',
	},
};

export const Ghost: Story = {
	args: {
		primary: false,
		size: 'medium',
		variant: 'ghost',
		slot: 'Button',
	},
};

export const Outline: Story = {
	args: {
		primary: false,
		size: 'medium',
		variant: 'outline',
		slot: 'Button',
	},
};

export const Large: Story = {
	args: {
		primary: false,
		size: 'large',
		slot: 'Button',
	},
};

export const Small: Story = {
	args: {
		primary: false,
		size: 'small',
		slot: 'Button',
	},
};

export const Disabled: Story = {
	args: {
		primary: false,
		size: 'medium',
		disabled: true,
		slot: 'Button',
	},
};

export const Icon: Story = {
	args: {
		primary: false,
		size: 'medium',
		icon: true,
		slot: icon('x') as string,
	},
};
