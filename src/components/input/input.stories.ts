import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LarsaInput } from '.';

const meta = {
	title: 'WIP/Inputs/Input',
	tags: ['autodocs'],
	render: (args) => html`<larsa-input
        name=${ifDefined(args.name)}
        type=${ifDefined(args.type)}
        placeholder=${ifDefined(args.placeholder)}
        label=${ifDefined(args.label)}
        value=${ifDefined(args.value)}
        size=${ifDefined(args.size)}
        ?disabled=${args.disabled}
        ?read-only=${args.readOnly}
        @change=${(e: any) => {
					console.log(e);
				}}
    ></larsa-input>`,
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
		name: {
			control: 'text',
			defaultValue: 'Input',
		},
		type: {
			control: 'select',
			options: [
				'text',
				'password',
				'email',
				'number',
				'tel',
				'url',
				'search',
				'date',
				'file',
			],
			defaultValue: 'text',
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
		},
		disabled: {
			control: 'boolean',
			defaultValue: false,
		},
		readOnly: {
			control: 'boolean',
			defaultValue: false,
		},
	},
} satisfies Meta<LarsaInput>;
export default meta;
type Story = StoryObj<LarsaInput>;

export const Default: Story = {
	args: {
		name: 'Input',
	},
};

export const Label: Story = {
	args: {
		name: 'Label',
		label: 'Label',
		placeholder: 'Placeholder',
	},
};

export const Value: Story = {
	args: {
		name: 'Label',
		label: 'Label',
		value: 'Value',
	},
};

export const Disabled: Story = {
	args: {
		name: 'Part',
		value: 'Peanut Butter',
		disabled: true,
	},
};
