import { EditorState, Plugin } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { DOMParser as ProseDOMParser, Node as ProseNode, Schema } from 'prosemirror-model'
import { baseKeymap, toggleMark } from 'prosemirror-commands'
import { keymap } from 'prosemirror-keymap'
import { litsiSchema } from './schema';
import { addLitsiElement, toggleHeadingLevel } from '../commands'
import { MenuItem } from '../component'

const topBarPlugin: Plugin = new Plugin({
  view(editorView) {
    const menuItem = new MenuItem(editorView, toggleMark(litsiSchema.marks.strong))
    return menuItem
  },
})

export class LitsiEditor {
  private editorView: EditorView

  constructor(
    target: Node,
    content: string,
  ) {
    const state = EditorState.create({
      doc: ProseDOMParser.fromSchema(litsiSchema).parse(new DOMParser().parseFromString("initial text", 'text/html')),
      schema: litsiSchema,
      plugins: [
        keymap({
          'Ctrl-h': toggleHeadingLevel(),
          'Ctrl-b': toggleMark(litsiSchema.marks.strong),
          'Ctrl-l': addLitsiElement,
          ...baseKeymap
        }),
        topBarPlugin
      ]
    });

    this.editorView = new EditorView(
      (editor) => {
        target.parentNode?.appendChild(editor)
      },
      { state }
    )
  }

}
