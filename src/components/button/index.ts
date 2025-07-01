import { html, LitElement, CSSResult, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { style } from './style';

/**
 * @element larsa-button
 * @slot - The content of the button
 * @slot icon - The icon of the button
 */
@customElement('larsa-button')
class LarsaButton extends LitElement {
	static override styles: CSSResult = style;
	static formAssociated = true;
	/**
	 * Whether the button is primary
	 */
	@property({ type: Boolean }) primary: boolean = false;
	/**
	 * The button variant
	 */
	@property({ type: String }) variant: 'solid' | 'outline' | 'ghost' = 'solid';
	/**
	 * The button size
	 */
	@property({ type: String }) size: 'small' | 'medium' | 'large' = 'medium';
	/**
	 * Whether the button is disabled
	 */
	@property({ type: Boolean }) disabled: boolean = false;
	/**
	 * The element to render the button as
	 */
	@property({ type: String }) as: 'button' | 'a' | 'div' = 'button';
	/**
	 * Whether the button is icon-only
	 */
	@property({ type: Boolean }) icon: boolean = false;

	override render(): TemplateResult<1> {
		return html`
            <button
                class=${classMap({
									'-primary': this.primary,
									[`-${this.variant}`]: true,
									[`-${this.size}`]: true,
									'-icon': this.icon,
								})}
                ?disabled=${this.disabled}
            >
                <slot @slotchange=${this.onSlotChange}></slot>
            </button>
        `;
	}

	private onSlotChange(event: Event): void {
		const slot = event.target as HTMLSlotElement;
		/**
		 * Check if the slot contains only an ICON and no other elements
		 */
		if (!this.icon)
			this.icon =
				slot
					.assignedElements()
					.some(
						(element) => element.tagName === 'I' || element.tagName === 'SVG',
					) && slot.assignedElements().length === 1;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'larsa-button': LarsaButton;
	}
}

export default LarsaButton;
