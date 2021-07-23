// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    balence: 2000,
  }

  updateBalence = value => {
    this.setState(prevState => ({balence: prevState.balence - value}))
  }

  getFirstCharOfName = name => name.slice(0, 1)

  render() {
    const {denominationsList} = this.props
    const {balence} = this.state
    const name = 'Sarah Williams'
    const initial = this.getFirstCharOfName(name)
    return (
      <div className="main-container">
        <div className="card-container">
          <div className="head-container">
            <h1 className="head">
              <span className="heading-letter">{initial}</span>
              {name}
            </h1>
          </div>
          <div className="amount-container">
            <p className="para">Your Balance</p>
            <div>
              <h1 className="amount">{balence}</h1>
              <p className="amount-in-words">in Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <h1 className="withdraw-heading">Withdraw</h1>
            <p className="amount-selection-text">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="denomination-list">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                denominationDetails={each}
                updateBalence={this.updateBalence}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
