import { LitElement, PropertyValueMap } from 'lit';
import { property, state } from 'lit/decorators.js';

type Constructor<T = {}> = new (...args: any[]) => T;

export declare class FormElementInterface {
	name?: string;
	label?: string;
	disabled: boolean;
	placeholder?: string;
	required?: boolean;
	error: boolean;
	readOnly: boolean;
	dispatch: (detail: CustomEvent['detail']) => void;
	form: HTMLFormElement | null;
	type: string;
	validity: ValidityState;
	validationMessage: string;
	willValidate: boolean;
	checkValidity: () => boolean;
	reportValidity: () => boolean;
	setFormValue: (value: string) => void;
}

export const FormElement = <T extends Constructor<LitElement>>(
	superClass: T,
) => {
	class FormElementClass extends superClass {
		static formAssociated = true;
		@property({ type: String }) name?: FormElementInterface['name'];
		@property({ type: String }) label?: FormElementInterface['label'];
		@property({ type: String })
		placeholder?: FormElementInterface['placeholder'];
		@property({ type: Boolean }) required?: FormElementInterface['required'];
		@property({ type: Boolean }) error: FormElementInterface['error'] = false;
		@property({ type: Boolean }) disabled: FormElementInterface['disabled'] =
			false;
		@property({ type: Boolean, attribute: 'read-only' })
		readOnly?: FormElementInterface['readOnly'] = false;

		@state() _internals = this.attachInternals();

		// The following properties and methods aren't strictly required,
		// but browser-level form controls provide them. Providing them helps
		// ensure consistency with browser-provided controls.
		protected get form() {
			return this._internals.form;
		}
		protected get type() {
			return this.localName;
		}
		protected get validity() {
			return this._internals.validity;
		}
		protected get validationMessage() {
			return this._internals.validationMessage;
		}
		protected get willValidate() {
			return this._internals.willValidate;
		}
		protected checkValidity() {
			return this._internals.checkValidity();
		}
		protected reportValidity() {
			return this._internals.reportValidity();
		}
		protected setFormValue(value: string) {
			this._internals.setFormValue(value);
		}
		protected dispatch(detail: object) {
			if (detail !== undefined) {
				this.dispatchEvent(
					new CustomEvent('change', {
						detail,
						bubbles: true,
						composed: true,
					}),
				);
			} else {
				throw new Error('No detail provided to onChange Event');
			}
		}

		protected updated(
			_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
		): void {
			if (_changedProperties.has('error')) {
				this._internals.setValidity(
					{
						customError: this.error,
					},
					'Error',
				);
			}
		}
	}
	return FormElementClass as unknown as Constructor<FormElementInterface> & T;
};
