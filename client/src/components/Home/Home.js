import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Home extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const { posts } = this.props

    return (
      <div className="App">
        {posts ? (
          <div>
            <h1>I'm workin on it gimme a break</h1>
            <ul className="Posts">
              {posts.slice(0).reverse().map((post, index) =>
                <li key={index}>
                  <h2>{post.title}</h2>
                  <section dangerouslySetInnerHTML={ {__html: post.body} }></section>
                </li>
              )}
            </ul>
          </div>
        ) : (
          <div>
            <h1>No posts</h1>
          </div>
        )}
      </div>
    )
  }
}

Home.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array
}


export default Home