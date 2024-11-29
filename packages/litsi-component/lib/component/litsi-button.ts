import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LitsiCustomEvent } from '../util-types.d'

export interface LitsiButtonOnClickData {
  id: string,
  additional?: any
}

@customElement('litsi-button')
export class LitsiButton extends LitElement {

  @property({ type: String })
  title = ''

  @property({ type: String })
  id = ''

  @property({ type: Boolean })
  disabled = false

  render() {
    return html`
      <button 
        ${this.disabled ? 'disabled' : ''}
        id=${this.id}
        @click=${this._onClick}
      >
        ${this.title}
      </button>
    `
  }

  private _onClick() {
    const options: CustomEventInit<LitsiButtonOnClickData> = {
      detail: {
        id: this.id
      },
      bubbles: true,
      composed: true
    };
    const event = new LitsiCustomEvent('litsi-button_onclick', options)

    this.dispatchEvent(event)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litsi-button': LitsiButton
  }
  interface CustomEventMap {
    'litsi-button_onclick': LitsiButtonOnClickData
  }
}
