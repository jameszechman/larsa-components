import { css } from 'lit';

export const style = css`
    .card {
        font-family: var(--font-body);
        border-radius: var(--spacing-3xs);
        border: 1px solid var(--color-foreground);
        overflow: hidden;
        position: relative;
        display: block;
        height: auto;
        container-name: card;
        container-type: inline-size;

        &:where(h1, h2, h3, h4, h5, h6) {
            font-family: var(--font-family);
            margin: 0;
        }

        > div {
            padding-inline: var(--spacing-md);
            padding-block: var(--spacing-md);
            background-position: center center;
            background-size: cover;

            display: flex;
            flex-wrap: nowrap;

            flex-direction: column;
            gap: var(--spacing-xs);

            align-items: flex-start;
            justify-content: flex-end;

            height: 100%;

            ::slotted(h1),
            ::slotted(h2),
            ::slotted(h3),
            ::slotted(h4),
            ::slotted(h5),
            ::slotted(h6) {
                margin: 0;
            }

            .-media & {
                min-height: 250px;
                color: var(--gray-600);
                ::slotted(h4) {
                    /* font-family: var(--font-body); */
                    background: white;
                    padding-left: var(--spacing-xs);
                    padding-right: var(--spacing-xs);
                    padding-top: 0.2rem;
                    padding-bottom: 0.2rem;
                }
                ::slotted(div) {
                    background: white;
                    padding-left: var(--spacing-xs);
                    padding-right: var(--spacing-xs);
                    padding-top: 0.2rem;
                    padding-bottom: 0.2rem;
                }
                ::slotted(p) {
                    /* font-family: var(--font-body); */
                    margin: 0;
                }
            }

            :not(.-media) & {
                ::slotted(a),
                ::slotted(button),
                ::slotted(larsa-button) {
                    align-self: flex-end;
                }
            }

            .-detailed_media & {
                img {
                    width: 150px;
                    height: 150px;
                }
            }

            & > h4 {
                z-index: 2;
                margin: 0;
            }

            & > div {
                position: relative;
                z-index: 2;
                margin-bottom: var(--spacing-xs);
                margin: 0;
                line-height: var(--spacing-md);
            }
        }
    }

    img {
        object-fit: cover;
        width: 100%;
        max-height: 500px;
        border-bottom: 1px solid var(--color-foreground);
    }

    @container card (max-width: 767px) {
        img {
            max-height: 300px;
        }
    }

    a {
        text-decoration: none;
    }
`;
