import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onClickEatMangoes = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onClickEatBananas = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="main-heading">
            Bob ate
            <span className="count"> {mango} </span>
            mangoes
            <span className="count"> {banana} </span>
            bananas
          </h1>
          <div className="fruite-card-control">
            <div className="counter-control">
              <img
                className="image"
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <div className="button-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.onClickEatMangoes}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="counter-control">
              <img
                className="image"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <div className="button-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.onClickEatBananas}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
