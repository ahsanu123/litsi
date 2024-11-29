import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import 'litsi-component'
import { toggleMark } from 'prosemirror-commands'
import { Command, EditorState, Plugin, PluginView } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { litsiSchema } from '../editor/schema'

interface MenuItemType {
  command: Command,
  dom: keyof HTMLElementTagNameMap,
}
type ListMenuItem = Array<MenuItemType>

export class MenuItem implements PluginView {

  private dom: HTMLElement
  constructor(
    private editorView: EditorView,
    private command: Command
  ) {
    const dom = editorView.dom

    const div = document.createElement('div');
    const litsiTopbar = document.createElement('litsi-topbar')

    div.appendChild(litsiTopbar);
    div.addEventListener('litsi-button_onclick', (ev: CustomEventInit<{ id: string }>) => {
      if (ev.detail?.id === 'bold') {
        this.onBoldClick()
      }
    }, true)
    dom.parentNode?.prepend(div)

    this.dom = litsiTopbar
  }
  onBoldClick() {
    this.command(this.editorView.state, this.editorView.dispatch, this.editorView)
  }
  update(view: EditorView, prevState: EditorState) { }

  destroy() { }

}

@customElement('litsi-topbar')
export class LitsiTopbar extends LitElement {

  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  @property({ type: Number })
  count = 0

  render() {
    return html`
      <div>
        ${this.toolbarMenuItem.map((item) => (
      html`<litsi-button
              id=${item.toLowerCase().replace(' ', '_')}
              title=${item}
            />`
    ))
      }
      </div>
    `
  }

  private toolbarMenuItem: string[] = [
    'Heading',
    'Bold',
    'Italic',
    'Strike',
    'Image',
    'List Number',
    'List Dot'
  ]

}

declare global {
  interface HTMLElementTagNameMap {
    'litsi-topbar': LitsiTopbar
  }
}
