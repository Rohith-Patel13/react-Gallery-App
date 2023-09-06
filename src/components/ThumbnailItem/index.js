// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachObjectProp, smallImageCalledProp, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachObjectProp

  const smallImageClicked = () => {
    smallImageCalledProp(id)
  }

  // console.log(isActive)
  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className={`liContainer ${activeTabClassName}`}>
      <button type="button" className="btnEl" onClick={smallImageClicked}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
