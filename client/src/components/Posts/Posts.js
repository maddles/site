import React from 'react'
import { Post } from 'components'

const Posts = (props) => {
  return (<div>
    {props.posts ? (
      <div>
        {props.posts.slice(0).reverse().map((post) =>
          <Post post={post} key={post.id} />
        )}
      </div>
    ) : (
      <div>
        <h1>No posts</h1>
      </div>
    )}
  </div>)
}

export default Posts
