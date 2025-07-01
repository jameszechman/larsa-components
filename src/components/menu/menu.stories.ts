import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import LarsaMenu from './index.ts';

const meta = {
	title: 'WIP/Overlays/Menu',
	tags: ['autodocs'],
	render: (args) => html`
        <larsa-menu>
            <span slot="toggle">Menu</span>
            <a href="#">Test</a>
        </larsa-menu>
    `,
	argTypes: {},
} satisfies Meta<LarsaMenu>;

export default meta;
type Story = StoryObj<LarsaMenu>;

export const Default: Story = {
	args: {},
};
