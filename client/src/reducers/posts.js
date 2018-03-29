import { Map, OrderedMap, fromJS } from 'immutable'

import {FETCHING_POSTS, FETCH_POSTS_COMPLETE} from 'actions/postActions'

const initialState = {
  isFetching: false
}

export default function postsReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_POSTS:
      return {
        ...state,
        isFetching: true
      }

    case FETCH_POSTS_COMPLETE:
      return {
        ...state,
        postsList: action.data,
        isFetching: false,
        postsFetched: true,
      }

    default:
      return state
  }
}
