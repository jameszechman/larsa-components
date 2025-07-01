import splide from '@splidejs/splide/css?inline';
import { css, unsafeCSS } from 'lit';

export const style = [
	unsafeCSS(splide),
	css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }

    .splide {
      width: 100%;
      height: 100%;
      display: flex;
    }
  `,
];
