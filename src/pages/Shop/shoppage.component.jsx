import React, { Component } from 'react'
import './shoppage.styles.scss'
import CollectionPreview from '../../components/collection/collection.component'

import ShopData  from '../../test_data/shopping_data.js';

export class ShopPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            collections : ShopData
        }
    }
    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview
                            key={id}
                            {...otherCollectionProps}
                         />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage
