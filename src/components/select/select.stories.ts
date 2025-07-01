import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import LarsaSelect from '.';

const meta = {
	title: 'WIP/Inputs/Select',
	tags: ['autodocs'],
	render: (args) => html`<larsa-select
        name=${ifDefined(args.name)}
        placeholder=${ifDefined(args.placeholder)}
        label=${ifDefined(args.label)}
        value=${ifDefined(args.value)}
        ?disabled=${args.disabled}
        .options=${args.options}
        ?autocomplete=${args.autocomplete}
        @change=${(e: any) => console.log(e)}
    >
    </larsa-select>`,
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
} satisfies Meta<LarsaSelect>;
export default meta;
type Story = StoryObj<LarsaSelect>;

export const Default: Story = {
	args: {
		name: 'Select',
		options: ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
	},
};

export const Placeholder: Story = {
	args: {
		name: 'Select',
		placeholder: 'Placeholder',
	},
};

export const Value: Story = {
	args: {
		name: 'Select',
		label: 'Favorite Number',
		value: '16',
		options: ['16', '17', '24', '52', '94', '21', '7', '3', '9', '6'],
	},
};

export const Disabled: Story = {
	args: {
		...Value.args,
		disabled: true,
	},
};

export const AutoComplete: Story = {
	args: {
		...Value.args,
		autocomplete: true,
	},
};
