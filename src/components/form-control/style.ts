import { css } from 'lit';

export const style = css`
  :host {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: var(--spacing-3xs);
  }

  .-single {
    width: 100%;
  }
`;
