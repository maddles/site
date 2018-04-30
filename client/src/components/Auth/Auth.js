import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Auth extends Component {
	constructor (props) {
		super()

		this.state = {
			username: '',
			password: ''
		}
	}

  handleSubmit = (e) => {
  	e.preventDefault()

  	const data = this.state
  	
  	this.props.login(data)
  }

  handleUserNameChange = (e) => {
  	this.setState({
  		username: e.target.value
  	})
  }

  handlePasswordChange = (e) => {
  	this.setState({
  		password: e.target.value
  	})
  }

  render() {
  	const {username, password} = this.state

    return (
      <div>
	      <form onSubmit={this.handleSubmit}>
					<div>
						<label>Username:</label>
						<input 
							type="text"
							value={username ? username : ''}
							onChange={this.handleUserNameChange} />
					</div>
					<div>
					<label>Password:</label>
					<input 
						type="text"
						value={password ? password : ''}
						onChange={this.handlePasswordChange} />
					</div>
					<div>
					<input type="submit" value="Submit"/>
					</div>
				</form>
      </div>
    )
  }
}

Auth.propTypes = {
  login: PropTypes.func.isRequired,
}


export default Auth