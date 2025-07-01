import { css } from 'lit';
import { breakpoints } from '../../utils/breakpoints';

export const style = css`
    .alert {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-2xs);
        padding-block: var(--spacing-2xs);
        padding-inline: var(--spacing-sm);
        color: var(--color-gray);
        font-size: 0.9rem;
        border-top: var(--border-color);
        border-bottom: var(--border-color);
        background-color: var(--gray-200);
        font-family: var(--font-body);

        @media (max-width: ${breakpoints.sm}) {
            flex-direction: column;
            text-align: center;
        }

        larsa-button {
            margin-left: auto;
            --color: var(--color-gray);
        }

        &.-warning {
            background-color: var(--warning-color);
        }

        &.-error {
            background-color: var(--error-color);
        }

        &.-success {
            background-color: var(--success-color);
        }

        &.-info {
            background-color: var(--info-color);
        }

        i,
        larsa-button i {
            font-size: 1.5rem;
            color: var(--color-gray);
            @media (max-width: ${breakpoints.sm}) {
                display: none;
            }
        }
    }
`;
