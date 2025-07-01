/**
 * Floating UI
 * @license MIT
 * https://github.com/floating-ui/floating-ui/blob/master/packages/utils/dom/src/index.ts
 */

export function getNodeName(node: Node | Window): string {
	if (isNode(node)) {
		return (node.nodeName || '').toLowerCase();
	}
	// Mocked nodes in testing environments may not be instances of Node. By
	// returning `#document` an infinite loop won't occur.
	// https://github.com/floating-ui/floating-ui/issues/2317
	return '#document';
}

export function getWindow(node: any): Window {
	return node?.ownerDocument?.defaultView || window;
}

export function getDocumentElement(node: Node | Window): HTMLElement {
	return (
		(isNode(node) ? node.ownerDocument : node.document) || window.document
	)?.documentElement;
}

export function isNode(value: unknown): value is Node {
	// @ts-ignore
	return value instanceof Node || value instanceof getWindow(value).Node;
}

export function isElement(value: unknown): value is Element {
	// @ts-ignore
	return value instanceof Element || value instanceof getWindow(value).Element;
}

export function isHTMLElement(value: unknown): value is HTMLElement {
	return (
		value instanceof HTMLElement ||
		// @ts-ignore
		value instanceof getWindow(value).HTMLElement
	);
}

export function isShadowRoot(value: unknown): value is ShadowRoot {
	// Browsers without `ShadowRoot` support.
	if (typeof ShadowRoot === 'undefined') {
		return false;
	}

	return (
		// @ts-ignore
		value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot
	);
}

export function getComputedStyle(element: Element): CSSStyleDeclaration {
	return getWindow(element).getComputedStyle(element);
}

export function getParentNode(node: Node): Node {
	if (getNodeName(node) === 'html') {
		return node;
	}

	const result =
		// Step into the shadow DOM of the parent of a slotted node.
		(node as any).assignedSlot ||
		// DOM Element detected.
		node.parentNode ||
		// ShadowRoot detected.
		(isShadowRoot(node) && node.host) ||
		// Fallback.
		getDocumentElement(node);

	return isShadowRoot(result) ? result.host : result;
}

interface NavigatorUAData {
	brands: Array<{ brand: string; version: string }>;
	mobile: boolean;
	platform: string;
}

// Avoid Chrome DevTools blue warning.
export function getPlatform(): string {
	const uaData = (navigator as any).userAgentData as
		| NavigatorUAData
		| undefined;

	if (uaData?.platform) {
		return uaData.platform;
	}

	return navigator.platform;
}

export function getViewportWidth(): number {
	return Math.max(
		document.documentElement.clientWidth || 0,
		window.innerWidth || 0,
	);
}

export function getUserAgent(): string {
	const uaData = (navigator as any).userAgentData as
		| NavigatorUAData
		| undefined;

	if (uaData && Array.isArray(uaData.brands)) {
		return uaData.brands
			.map(({ brand, version }) => `${brand}/${version}`)
			.join(' ');
	}

	return navigator.userAgent;
}

export function getIconName(icon: string): string | undefined {
	switch (icon) {
		case 'info':
			return 'info-circle';
		case 'warning':
			return 'exclamation-circle';
		case 'error':
			return 'circle-x';
		case 'success':
			return 'progress-check';
		default:
			break;
	}
}
