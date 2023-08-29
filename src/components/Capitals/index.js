import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {countryId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({
      countryId: event.target.value,
    })
  }

  render() {
    const {countryId} = this.state
    console.log('country id', countryId)
    const filtering = countryAndCapitalsList.filter(
      eachCoun => eachCoun.id === countryId,
    )
    const countryName = filtering[0].country

    return (
      <form className="form-element">
        <div className="container">
          <h1>Countries And Capitals</h1>
          <select id="select" onChange={this.onChangeCapital}>
            {countryAndCapitalsList.map(eachCountry => (
              <option value={eachCountry.id} key={eachCountry.id}>
                {eachCountry.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="select">is capital of which country?</label>
          <p className="country">{countryName}</p>
        </div>
      </form>
    )
  }
}

export default Capitals
