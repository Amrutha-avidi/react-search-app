import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {imgUrl, name} = destinationItem
  return (
    <li className="card">
      <img className="card-image" src={imgUrl} alt={name} />
      <p className="card-name">{name}</p>
    </li>
  )
}
export default DestinationItem
