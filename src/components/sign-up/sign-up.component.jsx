import React, { Component } from 'react'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component';

import './sign-up.styles.scss';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
export class SignUp extends Component {
    constructor(){
        super();

        this.state= {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleChange = (e) =>{
        const {value, name} = e.target;
        this.setState({[name]: value});
    }
    
    handleSubmit = async(e)=>{
        e.preventDefault();

        const { displayName, email, password, confirmPassword} = this.state;
        
        if(password !== confirmPassword){
            alert('passwords do not match')
            return;
        }

        try {
           const { user } =  await auth.createUserWithEmailAndPassword(email,password);
           createUserProfileDocument(user, {displayName});

           this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                    type="text"
                    name='displayName'
                    value={displayName}
                    onChange= {this.handleChange}
                    label='Name'
                    required
                    />
                    <FormInput
                    type="email"
                    name='email'
                    value={email}
                    onChange= {this.handleChange}
                    label='Email'
                    required
                    />
                    <FormInput
                    type="password"
                    name='password'
                    value={password}
                    onChange= {this.handleChange}
                    label='Password'
                    required
                    />
                    <FormInput
                    type="password"
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange= {this.handleChange}
                    label='Confirm Password'
                    required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp
