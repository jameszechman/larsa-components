import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import LarsaModal from './index.ts';
import { ifDefined } from 'lit/directives/if-defined.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

type LarsaStory = LarsaModal & { slot: string };

const meta = {
	title: 'WIP/Overlays/Modal',
	tags: ['autodocs'],
	render: (args: LarsaModal) => {
		return html`
            <larsa-modal ?open="${args.open}" variant="${ifDefined(args.variant)}">
                ${args.headerSlot ? html`<div slot="header">${unsafeHTML(args.headerSlot)}</div>` : ''}
                ${args.titleSlot ? html`<div slot="title">${args.titleSlot}</div>` : ''}
                ${unsafeHTML(args.slot)}
                ${args.footerSlot ? html`<div slot="footer"> ${unsafeHTML(args.footerSlot)}</div>` : ''}
            </larsa-modal>
        `;
	},
} satisfies Meta<LarsaStory>;

export default meta;
type Story = StoryObj<LarsaStory>;

export const Default: Story = {
	args: {
		open: false,
		variant: 'default',
		titleSlot: 'Header',
		slot: `<p>
                  Try hitting the <code>tab</code> key and notice how the focus stays within the modal itself. Also, <code>esc</code> to close modal.
               </p>`,
		footerSlot: `<larsa-button>Continue</larsa-button>
                            <larsa-button data-close aria-label="Close this dialog window">Close</larsa-button>`,
	},
};

export const Full: Story = {
	args: {
		open: false,
		variant: 'full',
		slot: `<larsa-image 
            src='/card_06.jpg' 
            object-fit='cover' 
            object-position='center'  
        ></larsa-image>`,
	},
};
