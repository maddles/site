import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = { posts: [] }

  componentDidMount() {
    this.getPosts()
  }

  getPosts = () => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(posts => this.setState({ posts }))
  }

  render() {
    const { posts } = this.state

    return (
      <div className="App">
        {posts.length ? (
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

export default App