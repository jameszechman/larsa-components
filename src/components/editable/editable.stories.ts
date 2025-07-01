import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LarsaEditable } from '.';

const meta = {
	title: 'WIP/Inputs/Editable',
	tags: ['autodocs'],
	render: (args) => html`<larsa-editable
        name=${ifDefined(args.name)}
        placeholder=${ifDefined(args.placeholder)}
        label=${ifDefined(args.label)}
        value=${ifDefined(args.value)}
        ?disabled=${args.disabled}
        @save=${(e: any) => console.log(e)}
    ></larsa-editable>`,
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
} satisfies Meta<LarsaEditable>;
export default meta;
type Story = StoryObj<LarsaEditable>;

export const Default: Story = {
	args: {
		name: 'Editable',
		label: 'Label',
		value:
			"There was once a pickle that sat on a sandwich, hoping that it wouldn't be eaten",
	},
};

export const LongText: Story = {
	args: {
		name: 'Input',
		value: `The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.`,
	},
};

export const Placeholder: Story = {
	args: {
		name: 'Editable',
		label: 'Label',
		placeholder: 'Placeholder',
	},
};

export const NoValue: Story = {
	args: {
		name: 'Editable',
		label: 'Sandwich',
	},
};

export const Disabled: Story = {
	args: {
		name: 'Editable',
		label: 'Label',
		value: 'Peanut Butter',
		disabled: true,
	},
};
