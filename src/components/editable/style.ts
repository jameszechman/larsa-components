import { css } from 'lit';

export const style = css`
    .editable {
        &.-input {
            width: 100%;
        }
        &.-actions {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-top: var(--spacing-2xs);
            gap: var(--spacing-xs);
        }
    }

    span {
        font-family: var(--font-body);
        padding-block: 0.25em;
        border-bottom: 1px solid transparent;
        transition: 0.1s ease-in;
        width: 100%;
        cursor: pointer;
        &[disabled] {
            cursor: not-allowed;
            opacity: 0.6;
        }
        &[placeholder] {
            opacity: 0.5;
        }
        &[contenteditable] {
            border-color: var(--color-foreground);
            cursor: text;
            outline: none;
        }

        > p {
            margin: 0;
        }
    }
`;
