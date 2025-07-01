import { html, LitElement, CSSResult, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { style } from './style';

/**
 * @element larsa-anchor
 * @slot - The content of the anchor
 */
@customElement('larsa-anchor')
class LarsaAnchor extends LitElement implements Partial<HTMLAnchorElement> {
	static override styles: CSSResult = style;
	/**
	 * The href of the anchor
	 */
	@property({ type: String }) href: HTMLAnchorElement['href'] = '';
	@property({ type: String }) download?: HTMLAnchorElement['download'];
	/**
	 * Sets or retrieves the language code of the object.
	 */
	@property({ type: String }) hreflang?: HTMLAnchorElement['hreflang'];
	@property({ type: String }) ping?: HTMLAnchorElement['ping'];
	@property({ type: String })
	referrerPolicy?: HTMLAnchorElement['referrerPolicy'];
	/**
	 * Sets or retrieves the relationship between the object and the destination of the link.
	 */
	@property({ type: String }) rel?: HTMLAnchorElement['rel'];
	/**
	 * Sets or retrieves the window or frame at which to target content.
	 */
	@property({ type: String }) target?: HTMLAnchorElement['target'];
	/**
	 * Retrieves or sets the text of the object as a string.
	 */
	@property({ type: String }) text?: HTMLAnchorElement['text'];
	@property({ type: String }) type?: HTMLAnchorElement['type'];
	/**
	 * Underline the anchor
	 */
	@property({ type: Boolean }) underline: boolean = false;

	override render(): TemplateResult<1> {
		return html`
            <a 
                class=${classMap({ '-underline': this.underline })}
                href=${ifDefined(this.href)}
                download=${ifDefined(this.download)}
                hreflang=${ifDefined(this.hreflang)}
                ping=${ifDefined(this.ping)}
                referrerpolicy=${ifDefined(this.referrerPolicy)}
                rel=${ifDefined(this.rel)}
                target=${ifDefined(this.target)}
                text=${ifDefined(this.text)}
                type=${ifDefined(this.type)}
            >
            <slot></slot>
        </a>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'larsa-anchor': LarsaAnchor;
	}
	namespace JSX {
		interface IntrinsicElements {
			'larsa-anchor': React.DetailedHTMLProps<
				React.HTMLAttributes<LarsaAnchor>,
				LarsaAnchor
			>;
		}
	}
}

export default LarsaAnchor;
