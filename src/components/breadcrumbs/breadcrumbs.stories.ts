import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import LarsaBreadcrumbs from '.';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const meta = {
	title: 'Display/Breadcrumbs',
	tags: ['autodocs'],
	render: (args) =>
		html`<larsa-breadcrumbs>${unsafeHTML(args.slot)}</larsa-breadcrumbs>`,
	argTypes: {},
} satisfies Meta<LarsaBreadcrumbs>;

export default meta;

type Story = StoryObj<LarsaBreadcrumbs>;

export const Default: Story = {
	args: {
		slot: `
            <larsa-button as="a" variant="ghost">Home</larsa-button>
            <larsa-button as="a" variant="ghost">Products</larsa-button>
            <larsa-button as="a" variant="ghost" disabled>Product</larsa-button>`,
	},
};
