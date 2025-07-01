import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { style } from './style';
import { classMap } from 'lit/directives/class-map.js';

/**
 * @element larsa-form-control
 */
@customElement('larsa-form-control')
class LarsaFormControl extends LitElement {
	static styles = style;
	/**
	 * Whether the form control is single
	 */
	@property({ type: Boolean }) single: boolean = false;

	render() {
		return html`<slot
            class=${classMap({
							'-single': this.single,
						})}
        ></slot>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'larsa-form-control': LarsaFormControl;
	}
	namespace JSX {
		interface IntrinsicElements {
			'larsa-form-control': React.DetailedHTMLProps<
				React.HTMLAttributes<LarsaFormControl>,
				LarsaFormControl
			>;
		}
	}
}
