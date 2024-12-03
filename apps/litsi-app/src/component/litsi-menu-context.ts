import { createContext } from '@lit/context'
import { EditorView } from 'prosemirror-view'
import { Subject } from 'rxjs'
export const topbarEditorViewContext = createContext<EditorView>(Symbol('topbar-context'))

export const $editorView = new Subject<EditorView>()
