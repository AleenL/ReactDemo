import {Switch} from './actionCounter';
import store from './store'

console.log(store.getState())

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(Switch(4))
store.dispatch(Switch(0))


unsubscribe();