import { css } from 'lit';

export const style = css`
    textarea {
        padding: var(--spacing-xs) var(--spacing-sm);
        border-radius: var(--border-radius);
        border: 1px solid var(--color-foreground);
        outline: none;
        transition: var(--animation);
        background-color: var(--color-background);
        color: var(--color-foreground);
        font-family: var(--font-body);
        &[disabled] {
            opacity: 0.6;
            &:hover {
                background-color: initial;
            }
        }
        &:hover {
            background-color: var(--color-background-hover);
            box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.25);
        }
    }
`;
