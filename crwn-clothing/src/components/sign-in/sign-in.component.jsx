import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';
import SignUp from '../sign-up/sign-up.component';

class SignIn extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		const {email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({email: '', password: ''});
		} catch (err) {
			return err.message;
		}
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
					<Button type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</Button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;