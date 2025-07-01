import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import LarsaTextarea from '.';

const meta = {
	title: 'WIP/Inputs/Textarea',
	tags: ['autodocs'],
	render: (args) => html`<larsa-textarea
        name=${ifDefined(args.name)}
        type=${ifDefined(args.type)}
        placeholder=${ifDefined(args.placeholder)}
        label=${ifDefined(args.label)}
        value=${ifDefined(args.value)}
        rows=${ifDefined(args.rows)}
        cols=${ifDefined(args.cols)}
        ?disabled=${args.disabled}
        @change=${(e: any) => console.log(e)}
    ></larsa-textarea>`,
	argTypes: {
		placeholder: {
			control: 'text',
			defaultValue: 'Placeholder',
		},
		label: {
			control: 'text',
			defaultValue: 'Label',
		},
		value: {
			control: 'text',
			defaultValue: 'Value',
		},
	},
} satisfies Meta<LarsaTextarea>;
export default meta;
type Story = StoryObj<LarsaTextarea>;

export const Default: Story = {
	args: {
		name: 'textarea',
		label: 'Default',
	},
};

export const Placeholder: Story = {
	args: {
		name: 'textarea',
		label: 'Placeholder',
		placeholder: 'Placeholder',
		rows: 10,
		cols: 50,
	},
};

export const LabelAndValue: Story = {
	args: {
		name: 'textarea',
		label: 'Label',
		value: 'Value',
	},
};

export const Disabled: Story = {
	args: {
		name: 'textarea',
		value: 'Jelly',
		disabled: true,
	},
};
