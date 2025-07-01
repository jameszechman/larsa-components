import Splide from '@splidejs/splide';
import {
	html,
	LitElement,
	PropertyValueMap,
	CSSResult,
	TemplateResult,
} from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { style } from './style';

/**
 * @element larsa-carousel
 * @slot - The content of the carousel
 */

@customElement('larsa-carousel')
class LarsaCarousel extends LitElement {
	static override styles: CSSResult[] = style;
	/**
	 * Whether the carousel is a decoration
	 */
	@property({ type: Boolean }) isDecoration: boolean = false;
	/**
	 * The type of the carousel
	 */
	@property({ type: String }) type: 'slide' | 'loop' | 'fade' = 'loop';
	/**
	 * Whether the carousel should loop in rewind
	 */
	@property({ type: Boolean }) rewind: boolean = false;
	/**
	 * The number of slides per page
	 */
	@property({ type: Number, attribute: 'per-page' }) perPage: number = 3;
	/**
	 * The number of slides to move per page
	 */
	@property({ type: Number, attribute: 'per-move' }) perMove: number = 1;
	/**
	 * Whether the carousel should have arrows
	 */
	@property({ type: Boolean }) arrows: boolean = true;
	/**
	 * Whether the carousel should have pagination
	 */
	@property({ type: Boolean }) pagination: boolean = false;
	/**
	 * Whether the carousel should autoplay
	 */
	@property({ type: Boolean }) autoplay: boolean = false;
	/**
	 * The interval between slides
	 */
	@property({ type: Number }) interval: number = 5000;
	/**
	 * The lazy load type
	 */
	@property({ type: String }) lazyLoad: boolean | 'nearby' | 'sequential' =
		false;
	/**
	 * The initial slide
	 */
	@property({ type: Number, attribute: 'initial-slide' }) initialSlide: number =
		0;
	@query('.splide') _splideElement!: HTMLElement;
	@state() _splide!: Splide;
	@state() _slides: Element[] = [];

	private get _interval() {
		if (this.interval < 1000 && this.autoplay) {
			return 1000;
		}
		return this.interval;
	}

	private renderArrows() {
		if (this.arrows) {
			return html` <div class="splide__arrows">
                <larsa-button
                    primary
                    type="button"
                    variant="solid"
                    class="splide__arrow splide__arrow--prev"
                    aria-controls="multiple-slides-track"
                    aria-label="Go to last slide"
                    ><svg
                        width="24px"
                        height="24px"
                        slot="icon"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#000000"
                    >
                        <path
                            d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </larsa-button>
                <larsa-button
                    primary
                    type="button"
                    variant="solid"
                    class="splide__arrow splide__arrow--next"
                    aria-controls="multiple-slides-track"
                    aria-label="Next slide"
                    ><svg
                        width="24px"
                        height="24px"
                        slot="icon"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#000000"
                    >
                        <path
                            d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </larsa-button>
            </div>`;
		}
	}

	override render(): TemplateResult<1> {
		return html`
            <slot
                style="display: none;"
                @slotchange=${this.generateSlides}
            ></slot>
            <section class="splide" style="max-height: 400px;">
                ${this.renderArrows()}
                <div class="splide__track">
                    <ul class="splide__list"></ul>
                </div>
            </section>
        `;
	}

	private options = {
		type: this.type,
		breakpoints: {
			1024: {
				gap: '2rem',
				perPage: this.perPage > 3 ? 3 : this.perPage,
			},
			767: {
				gap: '2rem',
				perPage: this.perPage > 2 ? 2 : this.perPage,
			},
			551: {
				perPage: 1,
			},
		},
		perPage: this.perPage,
		rewind: this.rewind,
		start: this.initialSlide,
		perMove: this.perMove,
		arrows: this.arrows,
		pagination: this.pagination,
		autoplay: this.autoplay,
		interval: this._interval,
		lazyLoad: this.lazyLoad,
		arrowPath: 'M9 6l6 6-6 6',
		gap: '2rem',
		width: '90%',
	};
	protected generateSlides(e: Event) {
		const target = e.target as HTMLSlotElement;
		const assignedElements = target.assignedElements();
		const { options } = this;
		// Add .slide wrapper to each item
		if (assignedElements.length > 0) {
			if (!this._splide) {
				const splide = new Splide(this._splideElement, options).mount();

				if (splide) {
					this._splide = splide;
					assignedElements.forEach((child) => {
						splide.add(`<div class="splide__slide">${child.outerHTML}</div>`);
						child.remove();
					});
				}
			}
		}
	}

	override updated(
		_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
	): void {
		const { options } = this;
		if (
			this._splide &&
			!_changedProperties.has('_splide') &&
			_changedProperties.size > 0
		) {
			this._splide.options = options;
		}
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'larsa-carousel': LarsaCarousel;
	}
	namespace JSX {
		interface IntrinsicElements {
			'larsa-carousel': React.DetailedHTMLProps<
				React.HTMLAttributes<LarsaCarousel>,
				LarsaCarousel
			>;
		}
	}
}

export default LarsaCarousel;
