import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'
import LarsaCarousel from '.'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

const meta = {
    title: 'WIP/Display/Carousel',
    tags: ['autodocs'],
    render: (args) =>
        html`<div style="width: 100%; height: 600px;">
            <larsa-carousel
                style="max-height: 400px"
                type=${ifDefined(args.type)}
                ?rewind=${args.rewind}
                per-page=${ifDefined(args.perPage)}
                per-move=${ifDefined(args.perMove)}
                ?arrows=${args.arrows}
                ?pagination=${args.pagination}
                ?autoplay=${args.autoplay}
                interval=${ifDefined(args.interval)}
                initial-slide=${ifDefined(args.initialSlide)}
            >
                ${unsafeHTML(args.slot)}
            </larsa-carousel>
        </div>`,
    argTypes: {},
} satisfies Meta<LarsaCarousel>
export default meta

type Story = StoryObj<LarsaCarousel>

export const Default: Story = {
    args: {
        type: 'loop',
        rewind: false,
        perPage: 3,
        perMove: 1,
        arrows: true,
        pagination: false,
        autoplay: false,
        interval: 5000,
        initialSlide: 0,
        slot: `
            <larsa-image src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></larsa-image>
            <larsa-image src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></larsa-image>
            <larsa-image src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=3488&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></larsa-image>
            <larsa-image src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></larsa-image>
            <larsa-image src="https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=3003&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></larsa-image>
            <larsa-image src="https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></larsa-image>
        `,
    },
}

export const TwoSlides: Story = {
    args: {
        perPage: 2,
        slot: `
        <larsa-image src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></larsa-image>
        <larsa-image src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></larsa-image>
        <larsa-image src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=3488&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></larsa-image>
        <larsa-image src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></larsa-image>
        <larsa-image src="https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=3003&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></larsa-image>
        <larsa-image src="https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></larsa-image>
        `,
    },
}
