import { html, LitElement, CSSResult, TemplateResult } from 'lit';
import {
	customElement,
	property,
	query,
	queryAssignedElements,
	state,
} from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { style } from './style';

/**
 * @element larsa-featured-media
 * @slot - Default slot for the featured media
 * @slot actions - Slot for the actions
 */
@customElement('larsa-featured-media')
class LarsaFeaturedMedia extends LitElement {
	static override styles: CSSResult = style;
	/**
	 * Size of the featured media
	 */
	@property({ type: String }) size?: 'avatar' | 'mini' | 'small';
	@query('.featured-media') featuredMedia!: HTMLElement;
	@queryAssignedElements({}) media!: HTMLElement[];

	@queryAssignedElements({ slot: 'actions' }) actions!: HTMLElement[];
	@state() _repositioning = false;
	@state() _repositionStartY = 0;
	@state() _currentPosition = 0;

	private renderActions = () => {
		if (!this.size)
			return html`
                <div class="actions">
                    <larsa-button @click=${this.onRepositionClick} size="small"
                        >${this._repositioning ? 'Save' : 'Reposition'}</larsa-button
                    >
                    <slot name="actions"></slot>
                </div>
            `;
	};

	override render(): TemplateResult<1> {
		return html`
            <div
                class=${classMap({
									'featured-media': true,
									[`-${this.size}`]: this.size || false,
									'-repositioning': this._repositioning,
								})}
            >
                ${this.renderActions()}
                <div class="media">
                    <slot></slot>
                </div>
            </div>
        `;
	}

	private onRepositionClick() {
		if (this._repositioning) {
			this._repositioning = false;
			this.media[0].removeEventListener(
				'mousedown',
				this.onRepositionMouseDown,
			);
		} else {
			this._repositioning = true;
			this.media[0].addEventListener('mousedown', this.onRepositionMouseDown);
			console.log(this.media[0]);
		}

		this.requestUpdate();
	}

	private onRepositionMouseDown = (e: MouseEvent) => {
		(e.target as HTMLElement).setAttribute('draggable', 'true');
		this._repositionStartY = e.clientY;
		this._currentPosition =
			parseInt((e.target as HTMLElement).style.transform.slice(11)) || 0;
		(e.target as HTMLElement).addEventListener(
			'mousemove',
			this.onRepositionMouseMove,
		);
		window.addEventListener('mouseup', this.onRepositionMouseUp);
	};

	private onRepositionMouseMove = (e: MouseEvent) => {
		// Retrieve the max height of the media
		const maxHeight =
			this.media[0].clientHeight - this.featuredMedia.clientHeight;

		if (this._repositioning) {
			const diffY = this._repositionStartY - e.clientY;

			if (diffY > 0 && this._currentPosition + diffY > 0) return;
			if (diffY < 0 && this._currentPosition + diffY < -maxHeight) return;
			(e.target as HTMLElement).style.transform = `translateY(${
				this._currentPosition + diffY
			}px)`;
		}
	};

	private onRepositionMouseUp = (e: MouseEvent) => {
		this.dispatchEvent(
			new CustomEvent('reposition-end', { detail: this._currentPosition }),
		);
		(e.target as HTMLElement).removeEventListener(
			'mousemove',
			this.onRepositionMouseMove,
		);
		window.removeEventListener('mouseup', this.onRepositionMouseUp);
	};
}

declare global {
	interface HTMLElementTagNameMap {
		'larsa-featured-media': LarsaFeaturedMedia;
	}
	namespace JSX {
		interface IntrinsicElements {
			'larsa-featured-media': React.DetailedHTMLProps<
				React.HTMLAttributes<LarsaFeaturedMedia>,
				LarsaFeaturedMedia
			>;
		}
	}
}

export default LarsaFeaturedMedia;
