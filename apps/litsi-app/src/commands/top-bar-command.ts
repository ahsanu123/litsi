import { toggleMark } from "prosemirror-commands"
import { litsiSchema } from "../editor/schema"
import { TopbarHandleFunction } from "../component/litsi-topbar-event"

export const topbarBoldButtonCommand: TopbarHandleFunction = (event) => {
  return toggleMark(litsiSchema.marks.strong)
}
