export const FETCHING_POSTS = 'FETCHING_POSTS'
export const FETCH_POSTS_COMPLETE = 'FETCH_POSTS_COMPLETE'
export const POST_ADDED = 'POST_ADDED'

function broadcastFetchingPosts () {
  return {
    type: FETCHING_POSTS
  }
}

function setPosts (posts) {
  return {
    type: FETCH_POSTS_COMPLETE,
    data: posts
  }
}

function postAdded (ids) {
  return {
    type: POST_ADDED,
    data: ids
  }
}

export function fetchPosts () {
  return (dispatch) => {
    dispatch(broadcastFetchingPosts())
    return fetch('/api/posts')
      .then(res => res.json())
      .then(posts => dispatch(setPosts(posts)))
      .catch(reason => console.error(reason))
  }
}

export function addPost () {
  return (dispatch) => {
    // dispatch(broadcastFetchingPosts())
    return fetch('/api/addPost')
      .then(res => res.json())
      .then(postId => dispatch(postAdded(postId)))
      .catch(reason => console.error(reason))
  }
}

export function checkIfPostsFetched (store) {
  return store.posts && store.posts.postsFetched
}
