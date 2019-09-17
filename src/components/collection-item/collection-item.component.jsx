import React from 'react'
import PropTypes from 'prop-types'
import CustomButton from '../custom-button/custom-button.component';
//redux add item
import { connect } from 'react-redux'
import { addCartItem } from '../../redux/cart/cart.actions'

import './collection-item.styles.scss'
const CollectionItem = ({item, addCartItem}) => {
    const { name, imageUrl, price} = item;
    return (
        <div className="collection-item">
            <div className="image" style={{
                backgroundImage : `url(${imageUrl})`
            }}>
            </div>
            <div className="collection-footer">
                <div className="name">{name}</div>
                <div className="price">{price}</div>
            </div>
            <CustomButton inverted onClick={() => addCartItem(item)}>Add to Cart</CustomButton>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        addCartItem: (item) => {
            dispatch(addCartItem(item))
        }
    }
}
CollectionItem.propTypes = {

}

export default connect(null,mapDispatchToProps)(CollectionItem)
