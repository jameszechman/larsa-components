import { css, CSSResult } from 'lit';

export const style: CSSResult = css`
    /**************************\\
      Modal Styles
    \\**************************/

    .modal {
        font-family: var(--font-body), sans-serif;
        color: var(--color-foreground);
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        background-color: var(--color-background);
        max-width: max-content;
        max-height: 100vh;
        border-radius: var(--border-radius);
        overflow-y: auto;
        box-sizing: border-box;
    }

    .container.-default {
        padding: var(--spacing-xl);
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .gradiant {
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 75%;
        left: 0;
        transition: all 0.5s ease;
    }

    .-full .header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;
        padding: var(--spacing-xl);
    }

    .title {
        margin-top: 0;
        margin-bottom: 0;
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 1.25;
        box-sizing: border-box;
    }

    .close {
        background: transparent;
        border: 0;
    }

    .-light .close {
        color: var(--color-dark);
    }

    .header .close:before {
        content: '\\2715';
    }

    .content {
        line-height: 1.5;
    }

    .-default .content {
        margin-top: var(--spacing-xl);
        margin-bottom: var(--spacing-xl);
    }

    .-full .footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }

    /**************************\\
      Animation Style
    \\**************************/
    @keyframes mmfadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes mmfadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    @keyframes mmslideIn {
        from {
            transform: translateY(15%);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes mmslideOut {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-10%);
        }
    }

    .modal {
        display: none;
    }

    :host(.is-open) .modal {
        display: block;
    }

    :host([aria-hidden='false']) .modal .overlay {
        animation: mmfadeIn 0.3s cubic-bezier(0, 0, 0.2, 1);
    }

    :host([aria-hidden='false']) .modal .container {
        animation: mmslideIn 0.3s cubic-bezier(0, 0, 0.2, 1);
    }

    :host([aria-hidden='true']) .modal .overlay {
        animation: mmfadeOut 0.3s cubic-bezier(0, 0, 0.2, 1);
    }

    :host([aria-hidden='true']) .modal .container {
        animation: mmslideOut 0.3s cubic-bezier(0, 0, 0.2, 1);
    }

    .modal .container,
    .modal .overlay {
        will-change: transform;
    }
`;
