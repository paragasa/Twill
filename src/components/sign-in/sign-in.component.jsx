import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './sign-in.styles.scss';

import {signInWithGoogle } from '../../firebase/firebase.utils';
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component';
export class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',

        }
    }
    static propTypes = {

    }
    handleSubmit = (e) =>{
        e.preventDefault();

        this.setState({email: '', password: ''});
    }

    handleChange = (e) =>{
        const {value, name} = e.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form >
                <FormInput type="email" 
                    name="email"
                    value={this.state.email}
                    required
                    handleChange={this.handleChange}
                    label="email"
                />
               
                <FormInput type="password"
                    name="password"
                    value={this.state.password}
                    required
                    handleChange={this.handleChange}
                    label="password"
                />
                <div className="buttons">
                    <CustomButton
                        type="submit" >
                        Sign In
                    </CustomButton>
                    <CustomButton
                        isGoogleSignIn = {true}
                        onClick = { signInWithGoogle }
                        type="submit" >
                        {' '}
                        Sign In With Google{' '}
                    </CustomButton>
                </div>
            </form>
                
            </div>
        )
    }
}

export default SignIn
