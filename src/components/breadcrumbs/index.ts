import { html, LitElement, CSSResult, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { style } from './style';

/**
 * @element larsa-breadcrumbs
 * @slot - The content of the breadcrumbs
 */
@customElement('larsa-breadcrumbs')
class LarsaBreadcrumbs extends LitElement {
	static override styles: CSSResult = style;

	override render(): TemplateResult {
		return html`
            <slot>
            </slot>
        `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'larsa-breadcrumbs': LarsaBreadcrumbs;
	}
	namespace JSX {
		interface IntrinsicElements {
			'larsa-breadcrumbs': React.DetailedHTMLProps<
				React.HTMLAttributes<LarsaBreadcrumbs>,
				LarsaBreadcrumbs
			>;
		}
	}
}

export default LarsaBreadcrumbs;
