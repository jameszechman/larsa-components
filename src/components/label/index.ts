import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { style } from './style';

/**
 * @element larsa-label
 */
@customElement('larsa-label')
class LarsaLabel extends LitElement {
	static styles = style;
	render() {
		return html`<label><slot></slot></label>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'larsa-label': LarsaLabel;
	}
	namespace JSX {
		interface IntrinsicElements {
			'larsa-label': React.DetailedHTMLProps<
				React.HTMLAttributes<LarsaLabel>,
				LarsaLabel
			>;
		}
	}
}

export default LarsaLabel;
