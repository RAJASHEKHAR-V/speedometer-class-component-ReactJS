import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onBrake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-Container">
        <h1 className="meterHeading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <div className="meterDisplayBody">
          <h1 className="speedHeading">Speed is {count}mph</h1>
          <p className="instruction">Min limit is 0mph, Max limit is 200mph</p>
          <div>
            <button
              className="AccButton"
              type="submit"
              onClick={this.onAccelerate}
            >
              Accelerate
            </button>
            <button className="BrkButton" type="submit" onClick={this.onBrake}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
