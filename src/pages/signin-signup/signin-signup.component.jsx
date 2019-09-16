import React from 'react'
import PropTypes from 'prop-types'
import SignIn from '../../components/sign-in/sign-in.component';
const SignInAndSignUpPage = props => {
    return (
        <div className="sign-in-sign-up">
         <SignIn/>  
        {/* <SignUp/> */}
        </div>
    )
}

SignInAndSignUpPage.propTypes = {

}

export default SignInAndSignUpPage
