import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { style } from './style.ts';

/**
 * @element larsa-tooltip
 */
@customElement('larsa-tooltip')
class LarsaTooltip extends LitElement {
	static styles = style;

	render() {
		return html``;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'larsa-tooltip': LarsaTooltip;
	}
	namespace JSX {
		interface IntrinsicElements {
			'larsa-tooltip': React.DetailedHTMLProps<
				React.HTMLAttributes<LarsaTooltip>,
				LarsaTooltip
			>;
		}
	}
}

export default LarsaTooltip;
