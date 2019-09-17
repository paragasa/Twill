import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { auth}  from '../../firebase/firebase.utils';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/thick-thread-spool.svg'
import firebase from 'firebase/app';
import 'firebase/firestore';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => {

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
                    (<div className="option" onClick={() => auth.signOut()} >Sign Out</div>)
                    :
                   ( <Link className="option" to="/signin">Sign In</Link>)
                }
                <CartIcon/>
            </div>
                {
                    hidden ? null: (<CartDropdown/>)
                }
        </div>
    )
}

Header.propTypes = {

}

const mapStateToProps = ({user: {currentUser}, cart:{hidden}}) => ({
    currentUser: currentUser,
    hidden : hidden,
});

export default connect(mapStateToProps)(Header);
