import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/thick-thread-spool.svg'

const Header = (props) => {
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
            </div>
        </div>
    )
}

Header.propTypes = {

}

export default Header
