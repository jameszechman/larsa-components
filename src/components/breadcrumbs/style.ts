import { css } from 'lit';

export const style = css`
  :host {
    display: flex;
    gap: var(--spacing-sm);
    align-items: center;
  }

  a {
    text-decoration: none;
  }
    
    ::slotted(*:not(:last-child))::after {
        content: '/';
        vertical-align: middle;
        display: flex;
        align-items: center;
    }
`;
