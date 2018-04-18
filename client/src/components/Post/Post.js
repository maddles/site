import React from 'react'
import ReactMarkdown from 'react-markdown'

const Post = (props) => {
  const post = props.post

  return (
    <section key={post.id}>
      <h2>{post.post_title}</h2>
    </section>
  )
}

export default Post
