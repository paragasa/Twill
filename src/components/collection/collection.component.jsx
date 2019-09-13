import React from 'react'
import PropTypes from 'prop-types'
import CollectionItem from '../collection-item/collection-item.component';

import './collection.styles.scss'
const CollectionPreview = ({title, items}) => {
    return (
        <div className = "collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                items.filter((item, index) => index < 4).map(
                    ({id, ...itemProps})=>(
                    <CollectionItem key={id}
                        {...itemProps}
                    />
                ))
                }
            </div>
        </div>
    )
}

CollectionPreview.propTypes = {

}

export default CollectionPreview
