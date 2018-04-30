import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Posts } from 'components'
import { Auth } from 'components'

class Home extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  render() {
    const { posts, login } = this.props

    return (
      <div>
        <Auth login={ login } />
        <Posts posts={ posts } />
      </div>
    )
  }
}

Home.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array,
  login: PropTypes.func.isRequired
}


export default Home