import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { LitsiEditor } from './src/editor'
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
