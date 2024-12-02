import { Command } from "prosemirror-state"

export const TopbarEventConst = [
  'bold',
  'italic'
] as const

export type TopbarEventKey = typeof TopbarEventConst[number]

export type TopbarCustomEventData<T = any> = CustomEventInit<{
  key: TopbarEventKey
  data?: T
}>

export type TopbarHandleFunction = (event: TopbarCustomEventData) => Command

export type TopbarFunctionEventMap = Map<TopbarEventKey, TopbarHandleFunction>

export enum TopbarCustomEventEnum {
  onLitsiButtonClicked = 'litsi-button-onclick',
  onMenuItemDispatchData = 'on-menu-item-dispatch-data'
}



