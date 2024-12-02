import { createContext } from '@lit/context'
import { EditorView } from 'prosemirror-view'
export const topbarEditorViewContext = createContext<EditorView>(Symbol('topbar-context'))
