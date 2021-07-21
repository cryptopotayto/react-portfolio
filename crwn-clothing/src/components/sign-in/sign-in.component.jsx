import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils.js';

class SignIn extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({email: '', password: ''});
	}

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	}

	render () {
		return (
			<div className="sign-in">
				<h2 className='title'>Sign In</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput 
						type='email' 
						name='email' 
						value={this.state.email}
						handleChange={this.handleChange} 
						label='Email'
						required />
					<FormInput 
						type='password' 
						name='password' 
						value={this.state.password}
						handleChange={this.handleChange} 
						label='Password'
						required />

					<div className="buttons">
					<Button type='submit'>Sign In </Button>
					<Button onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</Button>
					</div>

				</form>
			</div>
		);
	}
}

export default SignIn;