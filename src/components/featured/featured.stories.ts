import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'
import LarsaFeaturedMedia from '.'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

const meta = {
    title: 'Display/Featured',
    tags: ['autodocs'],
    render: (args) => html`
        <larsa-featured-media size=${ifDefined(args.size)}
            >${unsafeHTML(args.slot)}</larsa-featured-media
        >
    `,
    argTypes: {},
} as Meta<LarsaFeaturedMedia>

export default meta
type Story = StoryObj<LarsaFeaturedMedia>

export const Default: Story = {
    args: {
        slot: `<larsa-image src="https://images.unsplash.com/photo-1640894822819-0a94bec464bf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></larsa-image> `,
    },
}

export const Reposition: Story = {
    args: {
        slot: ` <larsa-image src="https://images.unsplash.com/photo-1640894822819-0a94bec464bf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></larsa-image> `,
    },
}

export const CustomActions: Story = {
    args: {
        slot: `<div slot="actions" style="display: contents;">
                <larsa-button size="small">Delete</larsa-button>
                <larsa-button size="small">Save</larsa-button>
            </div>
            <larsa-image src="https://images.unsplash.com/photo-1640894822819-0a94bec464bf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></larsa-image> `,
    },
}

export const Avatar: Story = {
    args: {
        size: 'avatar',
        slot: ` <larsa-image src="https://images.unsplash.com/photo-1640894822819-0a94bec464bf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></larsa-image> `,
    },
}

export const Mini: Story = {
    args: {
        size: 'mini',
        slot: ` <larsa-image src="https://images.unsplash.com/photo-1640894822819-0a94bec464bf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></larsa-image> `,
    },
}

export const Small: Story = {
    args: {
        size: 'small',
        slot: ` <larsa-image src="https://images.unsplash.com/photo-1640894822819-0a94bec464bf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></larsa-image> `,
    },
}
