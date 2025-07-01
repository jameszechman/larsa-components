import { html, LitElement, CSSResult, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { style } from './style';
import { icon } from '../../directives/icon.ts';

/**
 * @element larsa-database
 */
@customElement('larsa-database')
class LarsaDatabase extends LitElement {
	static override styles: CSSResult = style;
	/**
	 * Type of the database
	 */
	@property({ type: String }) type: string = 'item';

	override render(): TemplateResult<1> {
		return html`
            <div class="inline-database">
                <header>
                    <h3>${this.type}s</h3>
                    <div>
                        <larsa-button variant="ghost" aria-label="Sort">
                            ${icon('sort')}
                        </larsa-button>
                        <larsa-button variant="ghost" aria-label="Filter">
                            ${icon('filter')}
                        </larsa-button>
                        <larsa-button
                            variant="ghost"
                            aria-label="Add Item"
                            @click=${this.onAddClick}
                        >
                            ${icon('add')}
                        </larsa-button>
                        <larsa-button variant="ghost" aria-label="Menu">
                            ${icon('ellipsis')}
                        </larsa-button>
                    </div>
                </header>

                <div class="grid"></div>
            </div>
        `;
	}

	private onAddClick() {
		this.dispatchEvent(
			new CustomEvent('onAddClick', {
				bubbles: true,
				composed: true,
			}),
		);
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'larsa-database': LarsaDatabase;
	}
	namespace JSX {
		interface IntrinsicElements {
			'larsa-database': React.DetailedHTMLProps<
				React.HTMLAttributes<LarsaDatabase>,
				LarsaDatabase
			>;
		}
	}
}

export default LarsaDatabase;
