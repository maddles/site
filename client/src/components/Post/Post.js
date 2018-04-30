import React from 'react'
import ReactMarkdown from 'react-markdown'
import breaks from 'remark-breaks'
import moment from 'moment'

const Post = (props) => {
  const post = props.post

  return (
    <section key={post.id}>
      <h2>{post.post_title}</h2>
      <section className="post-body">
      	{moment(post.date).format('MMMM Do YYYY, h:mm:ss a')}
      	<ReactMarkdown source={post.post_body} plugins={[breaks]} />
      </section>
    </section>
  )
}

export default Post
