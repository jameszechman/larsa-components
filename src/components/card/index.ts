import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { style } from './style.ts';

/**
 * @element larsa-card
 * @slot header - The header of the card
 * @slot - The content of the card
 * @slot footer - The footer of the card
 */
@customElement('larsa-card')
class LarsaCard extends LitElement {
	static styles = style;
	/**
	 * The type of the card
	 */
	@property({ type: String }) type: 'default' | 'media' | 'detailed_media' =
		'default';
	/**
	 * The background image of the card
	 */
	@property({ type: String }) backgroundImage?: string;
	/**
	 * The image of the card
	 */
	@property({ type: String }) image?: string;
	/**
	 * The alt text of the image
	 */
	@property({ type: String }) alt: string = '';

	private renderBackgroundImage() {
		if (this.backgroundImage) {
			if (this.type === 'detailed_media') {
				return html`
                    <style>
                        .card > .-cover {
                            background-image: url(${unsafeCSS(
															this.backgroundImage,
														)});
                            min-height: 33%;
                        }
                    </style>
                    <div class="-cover"></div>
                `;
			}
			return html`
                <style>
                    .card > div {
                        background-image: url(${unsafeCSS(this.backgroundImage)});
                    }
                </style>
            `;
		}
	}

	private renderImage() {
		if (this.image) {
			return html`<img src=${this.image} alt=${this.alt} />`;
		}
	}

	render() {
		const classes = {
			card: true,
			[`-${this.type}`]: this.type,
		};
		return html` <div class=${classMap(classes)}>
            ${this.renderBackgroundImage()} ${this.renderImage()}
            <div>
                <slot name="header"></slot>
                <slot></slot>
                <slot name="footer"></slot>
            </div>
        </div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'larsa-card': LarsaCard;
	}
	namespace JSX {
		interface IntrinsicElements {
			'larsa-card': React.DetailedHTMLProps<
				React.HTMLAttributes<LarsaCard>,
				LarsaCard
			>;
		}
	}
}

export default LarsaCard;
