import React from 'react'
import SHOP_DATA from './shop.data.js'
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx'

class ShopPage extends React.Component {
  constructor() {
    super()
    this.state = {
      colletions: SHOP_DATA,
    }
  }
  render() {
    const { colletions } = this.state
    return (
      <div className='shop-page'>
        {colletions.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    )
  }
}

export default ShopPage
