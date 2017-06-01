import { createStore } from 'redux'
import reducer from '../../app/reducer/counter/reducer'

export default createStore(
  reducer,
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
