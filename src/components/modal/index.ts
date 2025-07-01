import { html, LitElement, TemplateResult, CSSResult } from 'lit';
import { customElement, property, queryAll } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import MicroModal from 'micromodal';
import { style } from './style.ts';
import { FastAverageColor, FastAverageColorResult } from 'fast-average-color';

/**
 * @element larsa-modal
 * @slot header - The header of the modal
 * @slot title - The title of the modal
 * @slot - The content of the modal
 * @slot footer - The footer of the modal
 * @fires show - Dispatched when the modal is shown
 * @fires close - Dispatched when the modal is closed
 */
@customElement('larsa-modal')
class LarsaModal extends LitElement {
	/**
	 * Whether the modal is open
	 */
	@property({ type: Boolean }) open: boolean = false;
	/**
	 * The variant of the modal
	 */
	@property({ type: String }) variant: 'default' | 'full' = 'default';
	public id: string = 'modal-' + Math.random().toString(16).slice(2);
	public averageColor?: FastAverageColorResult;

	constructor() {
		super();
		try {
			MicroModal.init({
				// onShow: modal => this.dispatchEvent(new CustomEvent('show', {composed: true, bubbles: false, detail: modal})), // [1]
				// onClose: modal => this.dispatchEvent(new CustomEvent('close', {composed: true, bubbles: false, detail: modal})), // [2]
				openClass: 'open',
				disableScroll: true,
				disableFocus: false,
				awaitOpenAnimation: true,
				awaitCloseAnimation: true,
				debugMode: true,
			});
		} catch (e) {
			console.log('error', e);
		}
	}

	override updated(changedProperties: Map<string, any>): void {
		if (
			changedProperties.has('open') &&
			changedProperties.get('open') !== this.open
		) {
			this.updateComplete.then(() => {
				this.open ? this.show() : this.close();
			});
		}
	}

	@queryAll('[data-close]') closeToggles!: NodeListOf<Element>;

	override firstUpdated() {
		if (this.closeToggles && this.closeToggles.length > 0)
			this.closeToggles.forEach((el) => {
				el.addEventListener('pointerdown', this.toggleOpen);
			});
	}

	override disconnectedCallback() {
		super.disconnectedCallback();
		if (this.closeToggles && this.closeToggles.length > 0)
			this.closeToggles.forEach((el) => {
				el.removeEventListener('pointerdown', this.toggleOpen);
			});
	}

	static override styles: CSSResult = style;

	private toggleOpen = (e: Event) => {
		if ((e.target as HTMLElement).dataset.hasOwnProperty('close')) {
			e.stopPropagation();
			this.open = !this.open;
		}
	};
	public show() {
		MicroModal.show(this.id);
	}
	public close() {
		MicroModal.close(this.id);
	}
	override render(): TemplateResult<1> {
		return html`
            <div class="modal">
                <div class="overlay" tabindex="-1" data-close>
                    <div class="${classMap({
											container: true,
											[`-${this.variant}`]: true,
											[`-light`]:
												(this.averageColor && this.averageColor.isLight) ||
												false,
											[`-dark`]:
												(this.averageColor && this.averageColor.isDark) ||
												false,
										})}" role="dialog" aria-modal="true" aria-labelledby="${this.id}-title">
                        <header class="header">
                            <slot name="header">
                            <h2 class="title" id="${this.id}-title">
                                <slot name="title"></slot>
                            </h2>
                            </slot>
                            <button class="close" aria-label="Close modal" data-close></button>
                        </header>
                        ${
													this.averageColor &&
													html`
                            <div class="gradiant" style="
                            background: linear-gradient(to top, rgba(${Array.from(this.averageColor.value).splice(0, 3).join(',')}, 0) 0%, rgb(${Array.from(this.averageColor.value).splice(0, 3).join(',')}) 100%)
                            "></div>
                        `
												}
                        <main class="content" id="${this.id}-content">
                            <slot @slotchange="${this.onSlotChange}"></slot>
                        </main>
                        </main>
                        <footer class="footer">
                            <slot name="footer">
                            </slot>
                        </footer>
                    </div>
                </div>
            </div>

        `;
	}

	private onSlotChange(e: Event) {
		const slot = e.target as HTMLSlotElement;
		const assignedElements = slot.assignedElements();
		const images = Array.from(assignedElements).filter((el) => {
			return (
				el.tagName.includes('IMAGE') ||
				el.tagName === 'IMG' ||
				el.tagName.includes('VIDEO')
			);
		});

		if (images && images.length === 1 && this.variant === 'full') {
			const src = images[0].getAttribute('src');
			if (src) {
				const fac = new FastAverageColor();
				fac
					.getColorAsync(src)
					.then((color) => {
						this.averageColor = color;
					})
					.catch((e) => {
						console.warn(e);
					});
				fac.destroy();
			}
		}
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'larsa-modal': LarsaModal;
	}
	namespace JSX {
		interface IntrinsicElements {
			'larsa-modal': React.DetailedHTMLProps<
				React.HTMLAttributes<LarsaModal>,
				LarsaModal
			>;
		}
	}
}

export default LarsaModal;
