import { css } from 'lit';

export const style = css`
    @media (prefers-color-scheme: dark) {
        :host {
            --color-action: var(--color-primary);
        }
    }
    @media (prefers-color-scheme: light) {
        :host {
            --color-action: var(--color-primary);
        }
    }

    a {
        color: var(--color-foreground);
        text-decoration: none;

        &.-underline {
            text-decoration: underline;
            text-underline-offset: 0.25rem;
            text-decoration-color: var(--color-action);
        }

        font-family: var(--font-body);

        &:hover {
            opacity: 0.7;
        }

        &:active,
        &:visited {
            color: var(--color-action);
        }

        &:focus {
            outline-offset: 0.25rem;
            outline-color: var(--color-action);
        }
    }
`;
