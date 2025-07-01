import { CSSResult, html, LitElement, TemplateResult } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { style } from './styles'
import { icon } from '../../directives/icon'
import { animate, fade } from '@lit-labs/motion'
import { getIconName } from '../../utils/shared.ts'

/**
 * @element larsa-alert
 * @slot heading - The heading of the alert
 * @slot - The content of the alert
 * @fires dismissed - When the alert is dismissed
 */
@customElement('larsa-alert')
class LarsaAlert extends LitElement {
    static override styles: CSSResult = style
    /**
     * The status of the alert
     */
    @property({ type: String }) status?:
        | 'warning'
        | 'error'
        | 'success'
        | 'info'
    /**
     * Whether the alert can be dismissed
     */
    @property({ type: Boolean }) dismissible: boolean = false
    @state() dismissed = false

    private handleAlertDismissible() {
        this.dismissed = true
        this.dispatchEvent(new CustomEvent('dismiss', { bubbles: false }))
    }

    override render(): TemplateResult<1> | undefined {
        const statusIcon = this.status ? getIconName(this.status) : undefined
        if (!this.dismissed)
            return html`
                <div
                    part="base"
                    class=${classMap({
                        alert: true,
                        [`-${this.status}`]: !!this.status,
                    })}
                    ${animate({
                        keyframeOptions: {
                            duration: 200,
                        },
                        in: fade,
                        out: fade,
                    })}
                >
                    ${statusIcon && icon(statusIcon, { applyStyles: true })}
                    <strong part="heading">
                        <slot name="heading">Read Only View</slot>
                    </strong>
                    <slot
                        >This page is not editable. To edit it you must migrate
                        it to a new or existing world.
                    </slot>
                    ${this.dismissible
                        ? html`
                              <larsa-button
                                  @click=${() => this.handleAlertDismissible()}
                                  aria-label="Dismiss alert"
                                  variant="ghost"
                                  size="small"
                              >
                                  ${icon('x', { applyStyles: true })}
                              </larsa-button>
                          `
                        : ''}
                </div>
            `
    }
}

export default LarsaAlert

declare global {
    interface HTMLElementTagNameMap {
        'larsa-alert': LarsaAlert
    }

    namespace JSX {
        interface IntrinsicElements {
            'larsa-alert': React.DetailedHTMLProps<
                React.HTMLAttributes<LarsaAlert>,
                LarsaAlert
            >
        }
    }
}
