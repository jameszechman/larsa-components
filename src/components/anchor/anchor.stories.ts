import type { Meta, StoryObj } from '@storybook/web-components';
import { ifDefined } from 'lit/directives/if-defined.js';
import { html } from 'lit';
import LarsaAnchor from '.';

const meta = {
	title: 'Display/Anchor',
	tags: ['autodocs'],
	render: (args) =>
		html`<larsa-anchor 
            href=${ifDefined(args.href)} 
            target=${ifDefined(args.target)}
            download=${ifDefined(args.download)}
            hreflang=${ifDefined(args.hreflang)}
            referrerpolicy=${ifDefined(args.referrerPolicy)}
            rel=${ifDefined(args.rel)}
            text=${ifDefined(args.text)}
            type=${ifDefined(args.type)}
            ?underline=${args.underline}
            >${args.slot}</larsa-anchor>`,
	argTypes: {
		href: {
			control: 'text',
		},
		target: {
			control: 'select',
			options: ['_blank', '_self', '_parent', '_top'],
		},
		download: {
			control: 'text',
		},
		hreflang: {
			control: 'text',
		},
		referrerPolicy: {
			control: 'text',
		},
		rel: {
			control: 'text',
		},
		text: {
			control: 'text',
		},
		type: {
			control: 'text',
		},
		underline: {
			control: 'boolean',
			defaultValue: {
				summary: false,
			},
		},
	},
} satisfies Meta<LarsaAnchor>;

export default meta;

type Story = StoryObj<LarsaAnchor>;
export const Default: Story = {
	args: {
		href: 'https://www.google.com',
		target: '_blank',
		slot: 'Google.com',
	},
};
