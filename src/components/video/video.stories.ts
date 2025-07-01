import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'
import { LarsaVideo } from '.'

const meta = {
    title: 'Display/Video',
    tags: ['autodocs'],
    render: (args) =>
        html`<larsa-video
            src=${ifDefined(args.src)}
            ?autoplay=${args.autoplay}
            ?controls=${args.controls}
            ?loop=${args.loop}
            object-fit=${ifDefined(args.objectFit)}
            ?blurred=${args.blurred}
        ></larsa-video>`,
    argTypes: {},
} satisfies Meta<LarsaVideo>
export default meta

type Story = StoryObj<LarsaVideo>

export const Default: Story = {
    args: {
        src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        controls: true,
        autoplay: true,
        loop: true,
        objectFit: 'contain',
        blurred: false,
    },
}

export const NoControls: Story = {
    args: {
        src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        autoplay: true,
        objectFit: 'fill',
        blurred: true,
    },
}
