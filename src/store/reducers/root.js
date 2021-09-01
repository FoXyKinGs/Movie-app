import { combineReducers } from 'redux'
import GlobalReducers from './global'

const rootReducers = combineReducers({
  globalReducers: GlobalReducers
})

export default rootReducers
