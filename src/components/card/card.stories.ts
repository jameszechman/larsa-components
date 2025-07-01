import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'
import LarsaCard from './index.ts'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

const meta = {
    title: 'Surfaces/Card',
    tags: ['autodocs'],
    render: (args) =>
        html`<larsa-card
            type=${ifDefined(args.type)}
            backgroundimage=${ifDefined(args.backgroundImage)}
            image=${ifDefined(args.image)}
            >${unsafeHTML(args.slot)}</larsa-card
        >`,
    argTypes: {},
} satisfies Meta<LarsaCard>

export default meta
type Story = StoryObj<LarsaCard>

export const Default: Story = {
    args: {
        // image: "/images/card_placeholder.jpg",
        image: 'https://images.unsplash.com/photo-1616627981347-315c73207041?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        slot: `
            <h4 slot="header">Card</h4>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    nonne merninisti licere mihi ista probare, quae sunt a te
                    dicta? Duo Reges: constructio interrete. Quae cum dixisset,
                    finem ille. Quod autem satis est, eo quicquid accessit, nimium
                    est; Quod autem in homine praestantissimum atque optimum est,
                    id deseruit. Quae cum dixisset, finem ille.
                </p>
            </div>
            <larsa-button slot="footer">Button</larsa-button>
        `,
    },
}

export const TextOnly: Story = {
    args: {
        slot: `<p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            nonne merninisti licere mihi ista probare, quae sunt a te
            dicta? Duo Reges: constructio interrete. Quae cum dixisset,
            finem ille. Quod autem satis est, eo quicquid accessit, nimium
            est; Quod autem in homine praestantissimum atque optimum est,
            id deseruit. Quae cum dixisset, finem ille.
        </p>`,
    },
}

export const ImageAndHeader: Story = {
    args: {
        slot: ` <h4 slot="header">Card</h4> `,
    },
    render: () =>
        html`<div
            style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1em;"
        >
            <larsa-card
                type="media"
                backgroundimage="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ><h4 slot="header">Card</h4></larsa-card
            >
            <larsa-card
                type="media"
                backgroundimage="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ><h4 slot="header">Card</h4></larsa-card
            >
            <larsa-card
                type="media"
                backgroundimage="https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=3488&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ><h4 slot="header">Card</h4></larsa-card
            >
            <larsa-card
                type="media"
                backgroundimage="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ><h4 slot="header">Card</h4></larsa-card
            >
            <larsa-card
                type="media"
                backgroundimage="https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=3003&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ><h4 slot="header">Card</h4>
                <div><strong>Rating</strong> | 5</div></larsa-card
            >
            <larsa-card
                type="media"
                backgroundimage="https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ><h4 slot="header">Card</h4>
            </larsa-card>
        </div>`,
}

export const ImageAndLargeContent: Story = {
    args: {
        // image: "/images/card_placeholder_3.png",
        backgroundImage:
            'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'media',
        slot: `
            <h4 slot="header">A Fairytale Story</h4>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    nonne merninisti licere mihi ista probare, quae sunt a te
                    dicta? Duo Reges: constructio interrete. Quae cum dixisset,
                    finem ille. Quod autem satis est, eo quicquid accessit, nimium
                    est; Quod autem in homine praestantissimum atque optimum est,
                    id deseruit. Quae cum dixisset, finem ille.
                </p>
            </div>
        `,
    },
}

export const DetailedMediaTemplate: Story = {
    args: {
        // image: '/card_01.jpg',
        backgroundImage:
            'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'detailed_media',
        slot: ``,
    },
}
