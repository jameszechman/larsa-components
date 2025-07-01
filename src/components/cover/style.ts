import { css } from 'lit';

export const style = css`
    .cover {
        width: 100%;
        height: 200px;
        /* transition: var(--animation); */
        @media (min-width: 767px) {
            height: 300px;
        }
        @media (min-width: 1024px) {
            height: 400px;
        }
        @media (min-width: 1400px) {
            height: 600px;
        }
        border-bottom: 1px var(--border-color) solid;
        position: relative;
        overflow: hidden;
    }

    .-repositioning {
        .media {
            cursor: move;
        }
    }

    .-mini {
        height: 100px;
    }

    .-small {
        height: 200px;
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

    .resizer {
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 10;
        cursor: -webkit-grab;
        cursor: grab;
    }

    .handle {
        transition: var(--animation);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 10px;
        background-color: var(--color-primary);
        opacity: 0;
        cursor: row-resize;
        &:hover {
            opacity: 0.5;
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
