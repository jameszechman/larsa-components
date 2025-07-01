import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'
import LarsaImage from '.'

const meta = {
    title: 'Display/Image',
    tags: ['autodocs'],
    render: (args) =>
        html`<larsa-image
            src=${ifDefined(args.src)}
            object-fit=${ifDefined(args.objectFit)}
            object-position=${ifDefined(args.objectPosition)}
            alt=${ifDefined(args.alt)}
            ?blurred=${args.blurred}
            style="max-height: 200px; max-width: 200px;"
        ></larsa-image>`,
    argTypes: {},
} satisfies Meta<LarsaImage>

export default meta
type Story = StoryObj<LarsaImage>

export const Default: Story = {
    args: {
        src: 'https://images.unsplash.com/photo-1625212895824-ff2232e9f304?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        objectFit: 'cover',
        objectPosition: 'center',
    },
}

export const Contain: Story = {
    args: {
        src: 'https://images.unsplash.com/photo-1625212895824-ff2232e9f304?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        objectFit: 'contain',
    },
}
