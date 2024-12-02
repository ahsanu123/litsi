import { Command, EditorState, PluginView } from "prosemirror-state"
import { EditorView } from "prosemirror-view"

export type MenuItemCustomEvent = CustomEventInit<{ id: string }>

export interface MenuItemProps {
  editorView: EditorView,
  command: Command,
}

export type MenuBase = PluginView & {
  command: Command,
  editorDom: HTMLElement,
  editorView: EditorView,
  dom: HTMLElement
}

export interface MenuContainerProps {
  editorView: EditorView,
  menuList: MenuBase[]
}

export class TopbarContainer implements PluginView {

  private editorView: EditorView

  constructor(
    {
      editorView,
      menuList
    }: MenuContainerProps
  ) {
    this.editorView = editorView

    menuList.forEach((menu) => {
      this.editorView.dom.parentNode?.prepend(menu.dom)
    })
  }
  update(view: EditorView, prevState: EditorState) { }

  destroy() { }

}
