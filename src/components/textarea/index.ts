import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { FormElement } from '../../mixins/form';
import { style } from './style';

/**
 * @element larsa-textarea
 */
@customElement('larsa-textarea')
class LarsaTextarea extends FormElement(LitElement) {
	static styles = style;
	@property({ type: String }) value?: string;
	@property({ type: Number }) rows?: number;
	@property({ type: Number }) cols?: number;

	get _value() {
		return this.value;
	}

	set _value(value) {
		const oldValue = this.value;
		this.value = value;
		this.requestUpdate('value', oldValue);
	}

	onChange(e: any) {
		this._value = e.target.value;
		let onchange = new CustomEvent('change', {
			detail: { name: e.target?.name, value: e.target?.value },
			bubbles: true,
			composed: true,
		});
		this.dispatchEvent(onchange);
	}

	render() {
		return html`<larsa-form-control>
            ${this.label && html`<larsa-label>${this.label}</larsa-label>`}
            <textarea
                name=${ifDefined(this.name)}
                ?disabled=${this.disabled}
                placeholder=${ifDefined(this.placeholder)}
                rows=${ifDefined(this.rows)}
                cols=${ifDefined(this.cols)}
                .value=${this._value || ''}
                @input=${this.onChange}
            >
            </textarea>
        </larsa-form-control> `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'larsa-textarea': LarsaTextarea;
	}
	namespace JSX {
		interface IntrinsicElements {
			'larsa-textarea': React.DetailedHTMLProps<
				React.HTMLAttributes<LarsaTextarea>,
				LarsaTextarea
			>;
		}
	}
}

export default LarsaTextarea;
