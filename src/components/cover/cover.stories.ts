import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'
import LarsaCover from '.'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

const meta = {
    title: 'Display/Cover',
    tags: ['autodocs'],
    render: (args) => html`
        <Larsa-cover size=${ifDefined(args.size)}
            >${unsafeHTML(args.slot)}</Larsa-cover
        >
    `,
    argTypes: {},
} satisfies Meta<LarsaCover>

export default meta
type Story = StoryObj<LarsaCover>

export const Default: Story = {
    args: {
        slot: `<larsa-image src="https://images.unsplash.com/photo-1582201957428-5ff47ff7605c?q=80&w=1583&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></larsa-image>`,
    },
}

export const Video: Story = {
    args: {
        slot: `<larsa-video
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            loop
            autoplay
        ></larsa-video>`,
    },
}

export const CustomActions: Story = {
    args: {
        slot: ` <div slot="actions" style="display: contents;">
                <larsa-button>Delete</larsa-button>
                <larsa-button>Save</larsa-button>
            </div>
            <larsa-image src="https://images.unsplash.com/photo-1569091791842-7cfb64e04797?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" object-fit="cover" blurred>
            </larsa-image>`,
    },
}

export const Mini: Story = {
    args: {
        size: 'mini',
        slot: `<larsa-image src="https://images.unsplash.com/photo-1584804738473-a49b7441c464?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></larsa-image>`,
    },
}

export const Small: Story = {
    args: {
        size: 'small',
        slot: `<larsa-image src="https://images.unsplash.com/photo-1582201942930-53fea460eeeb?q=80&w=1591&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></larsa-image>`,
    },
}
