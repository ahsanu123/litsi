import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import 'litsi-component';

@customElement('my-element')
export class MyElement extends LitElement {

  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  @property({ type: Number })
  count = 0

  render() {
    return html`
      <div>
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
        <litsi-element></litsi-element>
      </div>
    `
  }

  private _onClick(e: Event) {
    this.count++
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
