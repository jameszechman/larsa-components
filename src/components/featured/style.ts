import { css } from 'lit';

export const style = css`
    .featured-media {
        width: 250px;
        height: 250px;

        overflow: hidden;
        position: relative;
        box-shadow: var(--box-shadow);
        /* position: absolute; */

        /* top: -135px; */

        background-color: var(--color-background-hover);

        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        img,
        video {
            -o-object-fit: cover;
            object-fit: cover;
            -o-object-position: center center;
            object-position: center center;
        }
    }

    .media {
        width: 100%;
        height: 100%;
    }

    .-repositioning {
        .media {
            cursor: move;
        }
    }

    .-avatar {
        width: 25px;
        height: 25px;
        border-radius: 100%;
    }

    .-mini {
        width: 50px;
        height: 50px;
    }

    .-small {
        width: 125px;
        height: 125px;
    }

    .actions {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-block: var(--spacing-3xs);
        padding-inline: var(--spacing-md);
        gap: var(--spacing-2xs);
        transition: var(--animation);
        border-bottom: 1px solid var(--border-color);
        opacity: 0;
        &:hover {
            opacity: 1;
        }
    }

    ::slotted(larsa-image),
    ::slotted(larsa-video) {
        z-index: 1;
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
    }
`;
