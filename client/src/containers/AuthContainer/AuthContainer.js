import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Auth } from 'components'
import * as authActions from 'actions/authActions'

const mapStateToProps = (store) => {
  return {
    posts: store.posts.postsList
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const boundAuthActions = bindActionCreators(authActions, dispatch)

  const actionProps = {
    ...boundAuthActions,
    dispatch}

  return actionProps
}

const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)

export default AuthContainer
