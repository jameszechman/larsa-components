import { css } from 'lit';

export const style = css`
    .inline-database {
        -webkit-margin-before: var(--spacing-lg);
        margin-block-start: var(--spacing-lg);
        font-family: var(--font-body);
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid var(--border-color);
        -webkit-padding-after: var(--spacing-2xs);
        padding-block-end: var(--spacing-2xs);
        -webkit-margin-after: var(--spacing-md);
        margin-block-end: var(--spacing-md);

        & > div {
            display: flex;
            gap: var(--spacing-2xs);
        }
        & > h3 {
            font-family: var(--font-heading);
            text-transform: uppercase;
        }
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        @media (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 1024px) {
            grid-template-columns: repeat(3, 1fr);
        }
        gap: var(--spacing-xs);
    }

    .-small {
        @media (min-width: 1024px) {
            grid-template-columns: repeat(4, 1fr);
        }
    }
    .-medium {
        @media (min-width: 1024px) {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    .-large {
        @media (min-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .-single {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: var(--spacing-xs);
    }

    .sceneAttributes {
        display: flex;
        align-items: center;
        gap: var(--spacing-md);
        padding-block: var(--spacing-2xs);
        border-bottom: 1px solid var(--border-color);
        > div {
            display: flex;
            align-items: center;
            gap: var(--spacing-xs);
            p:first-child {
                color: var(--color-primary);
                text-transform: uppercase;
            }
        }
    }

    .scenesDescription {
        font-size: var(--fabler-fontSizes-sm);
        line-height: var(--fabler-lineHeights-tall);
        color: var(--color-muted);
        -webkit-padding-after: var(--spacing-2xs);
        padding-block-end: var(--spacing-2xs);
        border-bottom: 1px solid var(--border-color);
    }

    .sceneLinksWrapper {
        padding-block: var(--spacing-2xs);
    }

    .sceneLinkbacks {
        > div {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding-block: var(--spacing-2xs);
            gap: var(--spacing-xs);
        }
    }

    .templateCard {
        background-color: var(--fabler-colors-secondarybox);
        position: relative;
        min-height: 250px;
        border-radius: var(--fabler-radii-base);
        border: 1px solid var(--border-color);
        transition: var(--fabler-transition);
        &:hover {
            cursor: pointer;
            background-color: var(--fabler-colors-box);
        }
    }

    .templateCardImage {
        position: relative;
        height: 200px;
        border-bottom: 1px solid var(--border-color);
        background-color: var(--fabler-colors-box);
        overflow: hidden;
        img,
        video {
            -o-object-fit: cover;
            object-fit: cover;
        }

        video {
            position: relative;
            width: 100%;
        }
    }

    .templateCardBody {
        .templateCardText {
            h5 {
                position: relative;
                width: 100%;
                padding-left: 135px;
                margin-bottom: var(--spacing-xs);
            }
            padding-inline: 0;
        }
    }

    .templateCardText,
    .templateCardBody {
        padding-inline: var(--spacing-xs);
        padding-block: var(--spacing-xs);
        h5 {
            -webkit-margin-before: 0;
            margin-block-start: 0;
            -webkit-margin-after: var(--spacing-3xs);
            margin-block-end: var(--spacing-3xs);
            color: var(--fabler-colors-fabler-body-text) !important;
        }
    }
`;
