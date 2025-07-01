import { css } from 'lit';

export const style = css`
    input {
        font-family: var(--font-body);
        padding: var(--spacing-2xs) var(--spacing-xs);
        border-radius: var(--border-radius);
        border: 1px solid var(--color-foreground);
        outline: none;
        transition: var(--animation);
        background-color: var(--color-background);
        color: var(--color-foreground);
        font-family: var(--font-body);
        box-shadow: none;
        font-size: 1em;
        &.small {
            padding: var(--spacing-4xs) var(--spacing-2xs);
        }
        &.large {
            padding: var(--spacing-xs) var(--spacing-xs);
        }
        &.read-only {
            background-color: transparent;
            border: none;
            border-radius: 0px;
            padding: 0px;
        }
        &[disabled] {
            &:not(.read-only) {
                cursor: not-allowed;
                opacity: 0.6;
            }
            &:hover {
                background-color: initial;
                box-shadow: none;
            }
        }

        &:hover {
            background-color: var(--color-background-hover);
            box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.25);
        }
    }
`;
