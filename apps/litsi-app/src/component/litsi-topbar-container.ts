import { EditorState, PluginView } from "prosemirror-state";
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { EditorView } from 'prosemirror-view'
import { TopbarCustomEventData, TopbarFunctionEventMap } from "./litsi-topbar-event";
import { $editorView } from "./litsi-menu-context";
import 'litsi-component'

export class TopBarContainer implements PluginView {

  topbarContainer: LitsiTopbar
  constructor(
    editorView: EditorView,
    private menuItems: LitElement[],
    private topbarFunctionEventMap: TopbarFunctionEventMap
  ) {
    const topbarId = 'secret-topbar-id'
    const topbarComponent = new LitsiTopbar()
    topbarComponent.id = topbarId

    editorView.dom.parentNode?.prepend(topbarComponent)

    this.topbarContainer = document.querySelector(`litsi-topbar[id="${topbarId}"]`)!
    this.topbarContainer.handleFunctionMap = this.topbarFunctionEventMap
    this.topbarContainer.editorView = editorView

    this.menuItems.forEach((item) => {
      this.topbarContainer.appendChild(item)
    })
  }

  update(view: EditorView, prevState: EditorState) {
    this.topbarContainer.editorView = view
    $editorView.next(view)
  }

  destroy() { }

}

@customElement('litsi-topbar')
export class LitsiTopbar extends LitElement {

  @property({
    type: EditorView,
    hasChanged: (value, oldValue) => true // TODO: Why this make reactive update work??, because its big object??
  })
  editorView!: EditorView

  @property({
    type: Object,
    hasChanged: (value, oldValue) => true // TODO: Why this make reactive update work??, because its big object??
  })
  handleFunctionMap?: TopbarFunctionEventMap

  render() {
    return html`
      <div
        class='topbar-main-container'
        @on-menu-item-dispatch-data=${this._handleTopbarDispatchEvent}
      >
        <slot></slot>
      </div>
      <hr/>
    `
  }
  private _handleTopbarDispatchEvent(ev: TopbarCustomEventData) {
    const handleFunction = this.handleFunctionMap?.get(ev.detail!.key)
    const command = handleFunction?.(ev)

    const editorView = this.editorView as EditorView
    command?.(editorView!.state, editorView?.dispatch, editorView)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'litsi-topbar': LitsiTopbar,
  }
}

