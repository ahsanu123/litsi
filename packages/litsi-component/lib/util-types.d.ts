declare global {
  interface Document {
    addEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (
        this: HTMLElement,
        ev: CustomEventMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions): void;
  }
}

interface GlobalEventHandlersEventMap {
  'litsi-button_onclick': LitsiButtonOnClickData
}
export class LitsiCustomEvent<Key extends keyof CustomEventMap> extends CustomEvent<CustomEventMap[Key]> { }
interface LitsiElement extends HTMLElement {
  addEventListener<K extends keyof CustomEventMap>(type: K, listener: (this: HTMLDivElement, ev: CustomEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
}

export type {
  LitsiElement,
}
