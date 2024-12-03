//reference: https://coryrylan.com/blog/using-rxjs-in-lit-web-components
import { AsyncDirective, directive } from 'lit/async-directive.js'
import { Observable, Subscription } from 'rxjs'

class ObserveDirective extends AsyncDirective {
  #subscription?: Subscription
  render(observable: Observable<unknown>) {
    this.#subscription = observable.subscribe((value) => this.setValue(value))
    return ``
  }

  disconnected(): void {
    this.#subscription?.unsubscribe()
  }

}

export const observe = directive(ObserveDirective)
