import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { style } from './style';
import { classMap } from 'lit/directives/class-map.js';

/**
 * @element larsa-video
 */
@customElement('larsa-video')
class LarsaVideo extends LitElement {
	static styles = style;
	@property({ type: String }) src: string = '';
	@property({ type: Boolean }) controls: boolean = false;
	@property({ type: Boolean }) autoplay: boolean = true;
	@property({ type: Boolean }) loop: boolean = true;
	@property({ type: String, attribute: 'object-fit' })
	objectFit: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' = 'contain';
	@property({ type: Boolean }) blurred: boolean = false;

	render() {
		if (this.src)
			return html`
                <video
                    src=${this.src}
                    ?controls=${this.controls}
                    ?autoplay=${this.autoplay}
                    muted
                    ?loop=${this.loop}
                    class=${classMap({
											[`-${this.objectFit}`]: true,
											'-blur': this.blurred,
										})}
                ></video>
            `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'larsa-video': LarsaVideo;
	}
	namespace JSX {
		interface IntrinsicElements {
			'larsa-video': React.DetailedHTMLProps<
				React.HTMLAttributes<LarsaVideo>,
				LarsaVideo
			>;
		}
	}
}

export default LarsaVideo;
