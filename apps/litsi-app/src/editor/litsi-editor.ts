import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { DOMParser as ProseDOMParser, Node as ProseNode, Schema } from 'prosemirror-model'
import { baseKeymap, toggleMark } from 'prosemirror-commands'
import { keymap } from 'prosemirror-keymap'
import { litsiSchema } from './schema';
import { addLitsiElement, toggleHeadingLevel } from '../commands'

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
        })
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
