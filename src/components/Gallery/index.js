import {Component} from 'react'

import './index.css'

import ThumbnailItem from '../ThumbnailItem/index'

const imagesList = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
    imageAltText: 'nature mountain with pond',
    thumbnailAltText: 'nature mountain with pond thumbnail',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
    imageAltText: 'nature sunset',
    thumbnailAltText: 'nature sunset thumbnail',
  },
  {
    id: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
    imageAltText: 'nature mountain with ocean',
    thumbnailAltText: 'nature mountain with ocean thumbnail',
  },
  {
    id: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
    imageAltText: 'nature mountain with forest',
    thumbnailAltText: 'nature mountain with forest thumbnail',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
    imageAltText: 'nature leaves',
    thumbnailAltText: 'nature leaves thumbnail',
  },
  {
    id: 5,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
    imageAltText: 'nature tree',
    thumbnailAltText: 'nature tree thumbnail',
  },
  {
    id: 6,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
    imageAltText: 'nature waterfall',
    thumbnailAltText: 'nature waterfall thumbnail',
  },
  {
    id: 7,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-river-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png',
    imageAltText: 'nature river',
    thumbnailAltText: 'nature river thumbnail',
  },
]

// Write your code here.
class Gallery extends Component {
  state = {bigImage: imagesList[0]}

  smallImageCalled = idNum => {
    const ClickedBigImage = imagesList.filter(
      eachObjectFilter => eachObjectFilter.id === idNum,
    )
    // console.log(ClickedBigImage) // array of object
    const finalClickedBigImage = ClickedBigImage[0]
    console.log(finalClickedBigImage)

    this.setState({bigImage: finalClickedBigImage})
  }

  render() {
    /*  

    console.log(this)
    Gallery {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}context: {}
    props: {}
    refs: {}
    state: {bigImage: {…}}
    updater: {isMounted: ƒ, enqueueSetState: ƒ, enqueueReplaceState: ƒ, enqueueForceUpdate: ƒ}
    _reactInternalInstance: {_processChildContext: ƒ}
    _reactInternals: FiberNode {tag: 1, key: null, stateNode: Gallery, elementType: ƒ, type: ƒ, …}
    isMounted: (...)replaceState: (...)[[Prototype]]: Component
    
    */

    const {bigImage} = this.state
    const {imageUrl, imageAltText, id} = bigImage

    return (
      <div className="bg">
        <img src={imageUrl} alt={imageAltText} className="imgBig" />
        <div className="textContainer">
          <h1>Nature Photography</h1>
          <p>Nature Photography by Rahul</p>
        </div>

        <div className="ulContainer">
          {imagesList.map(eachObject => (
            <ThumbnailItem
              eachObjectProp={eachObject}
              smallImageCalledProp={this.smallImageCalled}
              key={eachObject.id}
              isActive={id === eachObject.id}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Gallery
