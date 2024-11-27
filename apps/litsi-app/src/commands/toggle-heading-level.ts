import { Command, EditorState, Transaction } from "prosemirror-state";
import { CommandDispatch } from "../utils";
import { setBlockType } from "prosemirror-commands";

function getHeadingLevel(state: EditorState): number {
  const { from, to } = state.selection;
  let level = 0;

  state.doc.nodesBetween(from, to, (node) => {
    if (node.type.name === 'heading') {
      level = node.attrs.level as number
      return true
    }
  })

  return level;
}

export const toggleHeadingLevel = (): Command => {
  return (state: EditorState, dispatch: CommandDispatch) => {
    if (getHeadingLevel(state) === 0) {
      return setBlockType(state.schema.nodes.heading, {
        level: 1
      })(state, dispatch)
    }
    else {
      return setBlockType(state.schema.nodes.paragraph)(state, dispatch)
    }
  }
}
