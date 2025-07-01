import { html, LitElement, CSSResult, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { style } from './style';

/**
 * @element larsa-image
 */
@customElement('larsa-image')
class LarsaImage extends LitElement {
	static override styles: CSSResult = style;
	/**
	 * The image source
	 */
	@property({ type: String }) src: string = '';
	/**
	 * The image alt text
	 */
	@property({ type: String }) alt: string = '';
	/**
	 * The object fit property
	 */
	@property({ type: String, attribute: 'object-fit' }) objectFit:
		| 'cover'
		| 'contain' = 'cover';
	/**
	 * The object position property
	 */
	@property({ type: String, attribute: 'object-position' })
	objectPosition: string = 'center';
	/**
	 * Whether the image is blurred
	 */
	@property({ type: Boolean }) blurred: boolean = false;
	/**
	 * Whether the image is selectable
	 */
	@property({ type: Boolean }) selectable: boolean = true;

	override render(): TemplateResult<1> {
		return html`
            <picture
                class=${classMap({
									[`-${this.objectFit}`]: this.objectFit || false,
									[`-position-${this.objectPosition}`]:
										this.objectPosition || false,
									'-blur': this.blurred,
								})}
            >
                <source srcset=${this.src} />
                <img src=${this.src} alt=${this.alt} />
            </picture>
        `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'larsa-image': LarsaImage;
	}
	namespace JSX {
		interface IntrinsicElements {
			'larsa-image': React.DetailedHTMLProps<
				React.HTMLAttributes<LarsaImage>,
				LarsaImage
			>;
		}
	}
}

export default LarsaImage;
