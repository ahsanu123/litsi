import { EditorState, Plugin } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { DOMParser as ProseDOMParser } from 'prosemirror-model'
import { baseKeymap, toggleMark } from 'prosemirror-commands'
import { keymap } from 'prosemirror-keymap'
import { litsiSchema } from './schema';
import { addLitsiElement, toggleHeadingLevel, topbarBoldButtonCommand, topbarItalicButtonCommand } from '../commands'
import { TopbarFunctionEventMap } from '../component/litsi-topbar-event'
import { LitsiBoldButton, LitsiItalicButton, TopBarContainer } from '../component'
import { LitElement } from 'lit'

const topBarMenus: Plugin = new Plugin({
  view(editorView) {
    const topbarMapFunction: TopbarFunctionEventMap = new Map([
      ['bold', topbarBoldButtonCommand],
      ['italic', topbarItalicButtonCommand]
    ])

    const menuItemElement: LitElement[] = [
      new LitsiBoldButton(),
      new LitsiItalicButton()
    ]

    const topBarContainer = new TopBarContainer(
      editorView,
      menuItemElement,
      topbarMapFunction
    )
    return topBarContainer
  },
})

export class LitsiEditor {
  private editorView: EditorView

  constructor(
    target: LitElement,
    content: string,
  ) {
    const state = EditorState.create({
      doc: ProseDOMParser.fromSchema(litsiSchema).parse(new DOMParser().parseFromString(content, 'text/html')),
      schema: litsiSchema,
      plugins: [
        keymap({
          'Ctrl-h': toggleHeadingLevel(),
          'Ctrl-b': toggleMark(litsiSchema.marks.strong),
          'Ctrl-l': addLitsiElement,
          ...baseKeymap
        }),
        topBarMenus,
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
