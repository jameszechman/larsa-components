import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

/**
 * @element larsa-menu
 * @slot toggle - The toggle button
 * @slot - The content of the menu
 */
@customElement('larsa-menu')
class LarsaMenu extends LitElement {
	static styles = css`
        .menu {
            &.-wrapper {
                position: relative;
                display: inline-flex;
                flex-direction: column;
            }
            &.-content {
                position: absolute;
                top: calc(100% + 0.25em);
                left: 0;
                right: 0;

                background: var(--color-background);
                border-width: 1px;
                border-style: solid;
                border-color: var(--color-foreground);
                border-radius: 0.375rem;
                box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
                color: var(--color-foreground);
                line-height: 1.5;
                opacity: 1;
                outline: 2px solid transparent;
                outline-offset: 2px;
                padding: 0.5rem 1rem;
                transform: none;
                visibility: visible;
                z-index: 1;
            }
        }
    `;
	@property({ type: Boolean }) open: boolean = false;
	@state() _hidden: boolean = !this.open || true;

	render() {
		const classes = {
			menu: true,
			'-content': true,
			'-open': this.open,
		};
		return html`
            <div class="menu -wrapper">
                <larsa-button @click=${this.onToggle}>
                    <slot name="toggle"></slot>
                    <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="currentColor"
                    >
                        <path
                            d="M20 7l-5 5 5 5M4 7l5 5-5 5"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </larsa-button>
                ${
									this.open
										? html`<div
                          class=${classMap(classes)}
                          aria-hidden=${this._hidden}
                      >
                          <slot></slot>
                      </div>`
										: nothing
								}
            </div>
        `;
	}

	onToggle() {
		this.open = !this.open;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'larsa-menu': LarsaMenu;
	}
	namespace JSX {
		interface IntrinsicElements {
			'larsa-menu': React.DetailedHTMLProps<
				React.HTMLAttributes<LarsaMenu>,
				LarsaMenu
			>;
		}
	}
}

export default LarsaMenu;
