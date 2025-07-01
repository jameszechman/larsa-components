import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { icon } from '../../directives/icon';
import { FormElement } from '../../mixins/form';
import { style } from './style';

/**
 * @element larsa-editable
 */
@customElement('larsa-editable')
class LarsaEditable extends FormElement(LitElement) {
	static styles = style;
	/**
	 * The value of the input
	 */
	@property({ type: String }) value: string = '';
	@query('span') _input!: HTMLSpanElement;
	_initialValue?: string;
	@state() protected _editing: boolean = false;

	private get getPlaceholder() {
		if (!this._editing) {
			if (this.placeholder) {
				return this.placeholder;
			} else {
				return 'Create new ' + this.label;
			}
		} else {
			return '';
		}
	}

	private get getValue() {
		return this.value;
	}

	firstUpdated() {
		this._input.addEventListener('keydown', this.onKeyDown);
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		this._input.removeEventListener('keydown', this.onKeyDown);
	}

	renderActions() {
		if (this._editing)
			return html`<div class="editable -actions">
                <larsa-button
                    tabindex="0"
                    variant="ghost"
                    size="small"
                    aria-label="Cancel Editing"
                    @click=${this.onCancel}
                >
                    ${icon('close')}
                </larsa-button>
                <larsa-button
                    tabindex="0"
                    primary
                    variant="ghost"
                    size="small"
                    aria-label="Save Edits"
                    @click=${this.onSave}
                    >${icon('check')}</larsa-button
                >
            </div>`;
	}

	render() {
		return html` <larsa-form-control
            ?single=${(this.value && this.value?.length >= 80) || false}
        >
            ${this.label && html`<larsa-label>${this.label}</larsa-label>`}
            <span
                tabindex="0"
                name=${ifDefined(this.name)}
                ?placeholder=${!this.value && !this._editing}
                ?disabled=${this.disabled}
                ?contenteditable=${this._editing}
                @click=${this.onClick}
                .innerText=${this.getValue || this.getPlaceholder}
            ></span>
            ${this.renderActions()}
        </larsa-form-control>`;
	}

	private onCancel() {
		this._editing = false;
		if (this._initialValue) this.value = this._initialValue;
		this.requestUpdate();
	}

	private onSave() {
		this._editing = false;
		this.value = this._input?.innerText;
		this.dispatch({ name: this.name, value: this._input?.innerText });
		this.setFormValue(this._input?.innerText);
	}

	private onKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			if (!this._editing) {
				this.onClick();
			}
		}
	};

	private onClick() {
		if (!this.disabled) {
			this._initialValue = this.value;
			this._editing = true;
			this.requestUpdate();
		}
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'larsa-editable': LarsaEditable;
	}
	namespace JSX {
		interface IntrinsicElements {
			'larsa-editable': React.DetailedHTMLProps<
				React.HTMLAttributes<LarsaEditable>,
				LarsaEditable
			>;
		}
	}
}

export default LarsaEditable;
