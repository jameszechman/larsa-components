import { css } from 'lit';

export const style = css`
    :host {
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    video {
        transition: var(--animation);
        width: 100%;
        height: 100%;
        &.-contain {
            object-fit: contain;
        }
        &.-cover {
            object-fit: cover;
        }
        &.-fill {
            object-fit: fill;
        }
        &.-none {
            object-fit: none;
        }
        &.-scale-down {
            object-fit: scale-down;
        }
        &.-blur {
            filter: blur(10px);
            &:hover {
                filter: blur(0);
            }
        }
    }
`;
