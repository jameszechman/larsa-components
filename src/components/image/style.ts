import { css } from 'lit';

export const style = css`
    :host {
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    picture {
        transition: var(--animation);
        user-select: none;
        &.-cover {
            object-fit: cover;
        }

        &.-contain {
            object-fit: contain;
        }

        &.-position-center {
            object-position: center;
        }
        &.-blur {
            filter: blur(10px);
            &:hover {
                filter: blur(0);
            }
        }
    }

    img {
        .-cover & {
            object-fit: cover;
        }
        .-contain & {
            object-fit: contain;
        }
        -webkit-user-drag: none;
        width: 100%;
        height: 100%;
    }
`;
