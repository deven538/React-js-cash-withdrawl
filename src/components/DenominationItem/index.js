// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalence} = props
  const {value} = denominationDetails

  const onUpdateBalence = () => {
    updateBalence(value)
  }

  return (
    <li className="list-item">
      <button className="button" type="button" onClick={onUpdateBalence}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
