import React from 'react'
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux'

import './cart-dropdown.styles.scss'
const CartDropdown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className="cartitems"></div>
          
            <CustomButton >Go to checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart
    }
}
export default connect(mapStateToProps)(CartDropdown);