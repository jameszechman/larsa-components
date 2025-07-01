import {
	html,
	LitElement,
	nothing,
	PropertyValueMap,
	CSSResult,
	TemplateResult,
} from 'lit';
import {
	customElement,
	property,
	query,
	queryAssignedElements,
	state,
} from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { style } from './style';

/**
 * @element larsa-cover
 * @slot - The content of the cover
 * @slot actions - The actions of the cover
 */
@customElement('larsa-cover')
class LarsaCover extends LitElement {
	static override styles: CSSResult = style;
	/**
	 * The size of the cover
	 */
	@property({ type: String }) size?: 'mini' | 'small';
	@state() height?: number;
	@query('.cover') cover!: HTMLElement;
	@queryAssignedElements({ slot: 'actions' }) actions!: HTMLElement[];
	@state() _resizing = false;
	@state() _startY = 0;
	@state() _startHeight = 0;
	@state() _repositioning = false;
	@state() _repositionStartY = 0;
	@state() _currentPosition = 0;
	@queryAssignedElements({}) media!: HTMLElement[];

	private renderActions = () => {
		return html`
            <div class="actions">
                <larsa-button @click=${this.onRepositionClick}
                    >${this._repositioning ? 'Save' : 'Reposition'}</larsa-button
                >
                <slot name="actions"></slot>
            </div>
        `;
	};

	private renderResizer = () => {
		return html`<div
            class="handle"
            @mousedown=${this.onHandleMouseDown}
        ></div>`;
	};

	override render(): TemplateResult<1> {
		return html`<div
            class=${classMap({
							cover: true,
							[`-${this.size}`]: this.size || false,
							'-repositioning': this._repositioning,
						})}
            style=${
							this.height
								? styleMap({
										height: `${this.height}px`,
									})
								: nothing
						}
        >
            <div class="media"><slot></slot></div>
            ${this.renderActions()} ${this.renderResizer()}
        </div>`;
	}

	private onHandleMouseDown = (e: MouseEvent) => {
		this._resizing = true;
		// Change Height of Container
		// Change Height of Media
		this._startY = e.clientY;
		this._startHeight =
			this.height ||
			((e.target as HTMLElement)?.parentNode as HTMLElement)?.clientHeight;
		window.addEventListener('mousemove', this.onHandleMouseMove);
		window.addEventListener('mouseup', this.onHandleMouseUp);
	};

	private onHandleMouseMove = (e: MouseEvent) => {
		if (this._resizing) {
			const diff = this._startY - e.clientY;
			if (this._startHeight - diff > 100)
				this.height = this._startHeight - diff;
			else this.height = 100;
		}
	};

	private onHandleMouseUp = () => {
		this._resizing = false;

		this.dispatchEvent(new CustomEvent('resize', { detail: this.height }));

		window.removeEventListener('mousemove', this.onHandleMouseMove);
		window.removeEventListener('mouseup', this.onHandleMouseUp);
	};

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
		const maxHeight = this.media[0].clientHeight - this.cover.clientHeight;

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

	override firstUpdated(
		_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
	): void {
		if (this.cover) {
			this.height = this.cover.clientHeight;
		}
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'larsa-cover': LarsaCover;
	}
	namespace JSX {
		interface IntrinsicElements {
			'larsa-cover': React.DetailedHTMLProps<
				React.HTMLAttributes<LarsaCover>,
				LarsaCover
			>;
		}
	}
}

export default LarsaCover;
