import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

import {auth} from '../../firebase/firebase.utils';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/thick-thread-spool.svg'
import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('user').doc("rNF2eCr6LwNz12ahldD5").collection("cartitems").doc("kCqf0NvqxZjf1BuUpuNE");
 
const Header = ({currentUser}) => {
    return (

        <div className="header">
            <Link to="/" >
                <Logo className="logo-container"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    Shop
                </Link>
                <Link className="option" to="/shop">
                    Contact
                </Link>
                {
                    currentUser ?
                    <div className="option" onClick={()=> auth.signOut()} >Sign Out</div>
                    :
                    <Link className="option" to="/signup">
                        Sign In
                    </Link>
                }
            </div>
        </div>
    )
}

Header.propTypes = {

}

export default Header
