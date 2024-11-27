import { Command } from "prosemirror-state";
import { CommandDispatch } from "../utils";

export const addLitsiElement: Command = (state, dispatch: CommandDispatch) => {
  const type = state.schema.nodes.litsi_element
  const { $from } = state.selection

  if (!$from.parent.canReplaceWith($from.index(), $from.index(), type))
    return false
  dispatch && dispatch(state.tr.replaceSelectionWith(type.create()))
  return true;
};
