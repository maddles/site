import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Posts } from 'components'

class Home extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  render() {
    const { posts } = this.props

    return (
      <Posts posts={ posts } />
    )
  }
}

Home.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array
}


export default Home