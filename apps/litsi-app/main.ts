import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import 'litsi-component';
import './src/index';

@customElement('main-app')
export class MainApp extends LitElement {
  render() {
    return html`
      <div>
        <my-element></my-element>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'main-app': MainApp
  }
}
