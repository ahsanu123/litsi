import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { LitsiEditor } from './src/editor'
import './src/index';

@customElement('main-app')
export class MainApp extends LitElement {
  render() {
    return html`
    <div
      class='litsi-main-container'
    >
      <!-- <litsi-topbar></litsi-topbar> -->
    </div>
    `
  }
}

window.editorView = new LitsiEditor(
  document.querySelector('main-app')!
  , "initial text")

declare global {
  interface HTMLElementTagNameMap {
    'main-app': MainApp
  }
  interface Window {
    editorView: LitsiEditor
  }
}
