import { customElement, state } from "lit/decorators.js";
import { css, CSSResultGroup, html, LitElement, unsafeCSS } from "lit";
import { TopbarCustomEventData, TopbarCustomEventEnum } from "./litsi-topbar-event";
import { $editorView } from "./litsi-menu-context";
import { map, Subscription } from "rxjs";
import { litsiSchema } from "../editor/schema";
import { litsiSakuraButtonStyle } from "../styles/litsi-sakura-button";
import 'boxicons'

@customElement('litsi-bold-button')
export class LitsiBoldButton extends LitElement {

  #subscription: Subscription

  static styles = [
    litsiSakuraButtonStyle
  ]

  @state()
  hasBold: boolean = false

  jsonString = $editorView.pipe(
    map((view) => {
      const state = view.state
      const { from, to } = state.selection

      const strong = litsiSchema.marks.strong
      this.hasBold = state.doc.rangeHasMark(from, to, strong)
    })
  )

  constructor() {
    super()
    this.#subscription = this.jsonString.subscribe()
  }

  disconnectedCallback(): void {
    this.#subscription.unsubscribe()
  }

  render() {
    return html`
      <button
        @click=${this._onBoldButtonClicked}
      >
        ${this.hasBold ? 'Unbold' : 'Bold'}
      </button>
    `
  }

  private _onBoldButtonClicked(ev: Event) {
    const options: TopbarCustomEventData = {
      detail: {
        key: 'bold'
      },
      bubbles: true,
      composed: true
    };
    const event = new CustomEvent(TopbarCustomEventEnum.onMenuItemDispatchData, options)
    this.dispatchEvent(event)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litsi-bold-button': LitsiBoldButton,
  }
}

