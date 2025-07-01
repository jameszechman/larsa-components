import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { FormElement } from '../../mixins/form';
import { style } from './style';

/**
 * @element larsa-input
 */
@customElement('larsa-input')
class LarsaInput extends FormElement(LitElement) {
	static styles = style;
	/**
	 * The type of input
	 */
	@property({ type: String }) type: HTMLInputElement['type'] = 'text';
	/**
	 * The valye of the input
	 */
	@property({ type: String }) value?: string;
	/**
	 * The size of the input
	 */
	@property({ type: String }) size?: 'small' | 'medium' | 'large' = 'medium';

	render() {
		return html`
            <larsa-form-control>
                ${
									this.label &&
									html`
                    <larsa-label>${this.label}</larsa-label>`
								}
                <input
                    class=${classMap({
											[`${this.size}`]: true,
											'read-only': this.readOnly,
										})}
                    type=${this.type}
                    ?disabled=${this.disabled || this.readOnly}
                    placeholder=${ifDefined(this.placeholder)}
                    name="${ifDefined(this.name)}"
                    .value=${this.value || ''}
                    @input=${this.onChange}
                />
            </larsa-form-control> `;
	}

	private onChange(e: any) {
		this.value = e.target.value;
		if (this.value) {
			if (this.form) this.setFormValue(this.value);
			this.dispatch({ name: e.target?.name, value: e.target?.value });
		}
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'larsa-input': LarsaInput;
	}
	namespace JSX {
		interface IntrinsicElements {
			'larsa-input': React.DetailedHTMLProps<
				React.HTMLAttributes<LarsaInput>,
				LarsaInput
			>;
		}
	}
}

export default LarsaInput;
