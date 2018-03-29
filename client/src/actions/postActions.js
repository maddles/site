export const FETCHING_POSTS = 'FETCHING_POSTS'
export const FETCH_POSTS_COMPLETE = 'FETCH_POSTS_COMPLETE'

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

export function fetchPosts () {
  return (dispatch) => {
    dispatch(broadcastFetchingPosts())
    return fetch('/api/posts')
      .then(res => res.json())
      .then(posts => dispatch(setPosts(posts)))
      .catch(reason => console.error(reason))
  }
}

export function checkIfPostsFetched (store) {
  return store.posts && store.posts.postsFetched
}
