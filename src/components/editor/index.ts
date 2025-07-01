// https://editorjs.io/
// https://www.blocknotejs.org/docs/introduction
// https://lexical.dev/

// @ts-nocheck

import { html, LitElement, PropertyValueMap } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
// EditorJS
import Attaches from '@editorjs/attaches';
import EditorJS, { API, BlockMutationEvent } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Image from '@editorjs/image';
import Link from '@editorjs/link';
import List from '@editorjs/list';
import Marker from '@editorjs/marker';
import NestedList from '@editorjs/nested-list';
import Paragraph from '@editorjs/paragraph';
import Table from '@editorjs/table';
import Underline from '@editorjs/underline';
import InlineImage from 'editorjs-inline-image';

/**
 * @element larsa-editor
 */
@customElement('larsa-editor')
class LarsaEditor extends LitElement {
	/**
	 * Data to be loaded into the editor
	 */
	@property({ type: Object }) data: any = {};
	@state() protected _editor!: EditorJS;
	@query('div') protected _editorContainer!: HTMLDivElement;

	save() {
		if (this._editor)
			this._editor
				.save()
				.then((outputData: any) => {
					this.dispatchEvent(new CustomEvent('save', { detail: outputData }));
					return outputData;
				})
				.catch((error: any) => {
					throw new Error(error);
				});
	}

	render() {
		return html`
            <div class="editor"></div>`;
	}

	createRenderRoot() {
		return this;
	}

	protected firstUpdated(
		_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
	): void {
		if (!this._editor && this._editorContainer)
			this._editor = new EditorJS({
				/**
				 * Id of Element that should contain Editor instance
				 */
				holder: this._editorContainer,
				placeholder: 'It looks pretty empty here, add some content',
				onReady: () => {
					this.dispatchEvent(new CustomEvent('ready'));
				},
				onChange: (api: API, event: BlockMutationEvent) => {
					this.dispatchEvent(
						new CustomEvent('change', {
							detail: event,
							composed: true,
							bubbles: true,
						}),
					);
					this.save();
				},
				/**
				 * Available Tools list.
				 * Pass Tool's class or Settings object for each Tool you want to use
				 */
				tools: {
					header: {
						class: Header,
						config: {
							levels: [1, 2, 3, 4, 5, 6],
							defaultLevel: 3,
						},
					},
					list: {
						class: List,
						inlineToolbar: true,
					},
					attaches: {
						class: Attaches,
						config: {
							endpoint: 'http://localhost:8008/uploadFile',
						},
					},
					// embed: Embed,
					table: {
						class: Table,
						inlineToolbar: true,
						config: {
							rows: 2,
							cols: 3,
						},
					},
					paragraph: {
						class: Paragraph,
						inlineToolbar: true,
					},
					link: Link,
					UploadImage: {
						class: Image,
						config: {
							endpoints: {
								byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
								byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
							},
						},
					},
					inlineImage: {
						class: InlineImage,
						inlineToolbar: true,
						config: {
							embed: {
								display: true,
							},
							unsplash: {
								appName: 'your_app_name',
								clientId: 'your_client_id',
							},
						},
					},
					marker: {
						class: Marker,
						shortcut: 'CMD+SHIFT+M',
					},
					nestedList: {
						class: NestedList,
						inlineToolbar: true,
					},
					underline: {
						class: Underline,
						shortcut: 'CMD+SHIFT+U',
					},
				},
				tunes: [],
				data: this.data,
			});
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'larsa-editor': LarsaEditor;
	}
	namespace JSX {
		interface IntrinsicElements {
			'larsa-editor': React.DetailedHTMLProps<
				React.HTMLAttributes<LarsaEditor>,
				LarsaEditor
			>;
		}
	}
}

export default LarsaEditor;
