import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Home } from 'components'
import * as postActions from 'actions/postActions'

const mapStateToProps = (store) => {
  return {
    posts: store.posts.postsList
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const boundPostActions = bindActionCreators(postActions, dispatch)

  const actionProps = {
    ...boundPostActions,
    dispatch}

  return actionProps
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer
