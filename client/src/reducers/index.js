import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import postsReducer from 'reducers/posts'

const reducers = combineReducers({
  router: routerReducer,
  posts: postsReducer
})

export default reducers
