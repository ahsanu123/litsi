import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('litsi-element')
export class LitsiElement extends LitElement {

  @property({ type: Number })
  count = 0

  render() {
    return html`
      <button @click=${this._onClick} part="button">
        its litsi element ${this.count}
      </button>
    `
  }

  private _onClick() {
    this.count++
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litsi-element': LitsiElement
  }
}
