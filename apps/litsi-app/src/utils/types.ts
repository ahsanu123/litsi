import { Transaction } from "prosemirror-state";

export type CommandDispatch = ((tr: Transaction) => void) | undefined
