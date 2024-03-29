import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Home } from 'components'
import * as postActions from 'actions/postActions'
import * as authActions from 'actions/authActions'

const mapStateToProps = (store) => {
  return {
    posts: store.posts.postsList
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const boundPostActions = bindActionCreators(postActions, dispatch)
  const boundAuthActions = bindActionCreators(authActions, dispatch)

  const actionProps = {
    ...boundPostActions,
    ...boundAuthActions,
    dispatch}

  return actionProps
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer
