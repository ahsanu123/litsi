import { customElement, property } from "lit/decorators.js";
import { html, LitElement } from "lit";
import { TopbarCustomEventData, TopbarCustomEventEnum } from "./litsi-topbar-event";

@customElement('litsi-bold-button')
export class LitsiBoldButton extends LitElement {

  render() {
    return html`
      <button
        @click=${this._onBoldButtonClicked}
      >
        bold
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

