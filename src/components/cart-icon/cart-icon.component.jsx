import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import { selectCartItems, selectCartItemsCount} from '../../redux/cart/cart-selector'
const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount }</span>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => {
            dispatch(toggleCartHidden())
        }
    }
}

const  mapStateToProps = (state) => {
    return {
        itemCount: selectCartItemsCount(state)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
