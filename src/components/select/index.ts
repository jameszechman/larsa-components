import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { map } from 'lit/directives/map.js';
import { style } from './style';
import { FormElement } from '../../mixins/form';

/**
 * @element larsa-select
 */
@customElement('larsa-select')
class LarsaSelect extends FormElement(LitElement) {
	static styles = style;
	@property({ type: Array }) options: Array<any> = [];
	@property({ type: String }) value?: string;
	@property({ type: Boolean }) autocomplete?: boolean = false;

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
            <select
                placeholder=${ifDefined(this.placeholder)}
                autocomplete=${this.autocomplete ? 'on' : 'off'}
                ?disabled=${this.disabled}
                name="${ifDefined(this.name)}"
                .value=${this._value || ''}
                @input=${this.onChange}
            >
                ${map(this.options, (option) => {
									if (typeof option === 'string') {
										return html`<option ?selected=${this.value === option}>
                            ${option}
                        </option>`;
									} else if (option?.label) {
										return html`<option
                            ?selected=${this.value === option.value}
                            label=${option.label}
                            value=${option.value}
                        >
                            ${option.label}
                        </option>`;
									}
								})}
            </select>
        </larsa-form-control> `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'larsa-select': LarsaSelect;
	}
	namespace JSX {
		interface IntrinsicElements {
			'larsa-select': React.DetailedHTMLProps<
				React.HTMLAttributes<LarsaSelect>,
				LarsaSelect
			>;
		}
	}
}

export default LarsaSelect;
