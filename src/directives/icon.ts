import { Directive, PartInfo, directive, ChildPart } from 'lit/directive.js';
import { LitElement } from 'lit';
import style from '@tabler/icons-webfont/dist/tabler-icons-outline.min.css?inline';

export interface IconOptions {
	applyStyles?: boolean;
	slot?: string;
}

// Define directive
class IconDirective extends Directive {
	partInfo: PartInfo;
	host?: HTMLElement | LitElement;
	constructor(partInfo: PartInfo) {
		super(partInfo);
		this.partInfo = partInfo;
		this.host =
			((partInfo as ChildPart)?.options?.host as LitElement) ||
			((partInfo as ChildPart)?.parentNode as LitElement | HTMLElement);
	}

	private applyStyles() {
		(this.host as LitElement)?.updateComplete.then(() => {
			const renderRoot = (this.host as LitElement).shadowRoot as ShadowRoot;
			const sheet = new CSSStyleSheet();
			const previouslyExistsInAdoptedStyles =
				renderRoot.adoptedStyleSheets.some((stylesheet) => {
					return stylesheet.cssRules[0].cssText?.includes(
						'@tabler/icons-webfont',
					);
				});
			if (previouslyExistsInAdoptedStyles) return;
			try {
				sheet.replaceSync(style);
				renderRoot.adoptedStyleSheets = [
					...renderRoot.adoptedStyleSheets,
					sheet,
				];
			} catch (e) {
				console.error(e);
			}
		});
	}

	render(icon: string, options?: IconOptions) {
		if (options?.applyStyles) this.applyStyles();
		if (icon) {
			const i = document.createElement('i');
			i.className = `ti ti-${icon}`;
			if (options?.slot) i.slot = options.slot;
			return i;
		}
	}
}
// Create the directive function
export const icon = directive(IconDirective);
