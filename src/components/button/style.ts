import { css } from 'lit';

// TODO - Setup light-dark mode with box-shadows
export const style = css`
    :host {
        text-decoration: none;
        display: inline-flex;
        --border-color: var(--color-foreground);
        --color: var(--color-foreground);
        --bkg: transparent;
    }

    button {
        font-family: var(--font-heading);
        font-weight: var(--font-weight-semibold);
        line-height: 90%;
        text-decoration: none;

        background-color: var(--bkg);
        color: var(--color);

        outline: none;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);

        cursor: pointer;

        transition: var(--animation);

        display: flex;
        flex-direction: row;
        gap: 1em;
        justify-content: center;
        align-items: center;

        ::slotted(i) {
            color: currentColor;
        }

        &.-solid {
            --bkg: var(--color-foreground);
            --color: var(--color-background);
            &.-primary {
                --border-color: var(--color-background);
                --bkg: var(--color-primary);
                --color: var(--color-light);
            }
        }

        &.-ghost {
            --bkg: transparent;
            --border-color: transparent;
            &.-primary {
                --color: var(--color-primary);
            }
        }

        &.-outline {
            --bkg: transparent;
            &.-primary {
                --border-color: var(--color-primary);
                --color: var(--color-primary);
            }
        }

        &.-icon {
            ::slotted(svg) {
                color: var(--color);
            }
        }

        &[disabled] {
            opacity: 0.8;
            cursor: not-allowed;
        }

        &:hover {
            &:not([disabled]) {
                --bkg: var(--color-background-hover);
                transform: translateY(var(--spacing-4xs));
                box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.25);
                &.-solid {
                    --bkg: var(--color-foreground-hover);
                    --color: var(--color-foreground);
                }
                &.-primary {
                    --bkg: var(--color-primary-hover);
                    &:not(.-ghost) {
                        --color: var(--color-foreground);
                    }
                }
                &.-ghost {
                    --bkg: rgba(255, 255, 255, 0.1);
                    box-shadow: none;
                }
            }
        }

        &.-small {
            font-size: clamp(11px, 0.7em, 14px);
            padding: var(--spacing-xs) var(--spacing-sm);
            &.-icon {
                font-size: 1em;
                padding: var(--spacing-4xs);
            }
        }

        &.-medium {
            font-size: clamp(12px, 0.8em, 14px);
            padding: var(--spacing-xs) var(--spacing-lg);
            &.-icon {
                font-size: 1.5em;
                padding: var(--spacing-xs);
            }
        }

        &.-large {
            font-size: clamp(12px, 0.9em, 16px);
            padding: var(--spacing-sm) var(--spacing-lg);
            &.-icon {
                font-size: 2em;
                padding: var(--spacing-sm);
            }
        }
    }
`;
