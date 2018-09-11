import React from 'react'
import './HomeView.scss'
var beepLow = require('browser-beep')({ frequency: 500 })
var beepHigh = require('browser-beep')({ frequency: 1000 })

export default class extends React.Component {
  constructor (props) {
    super(props)
        // this.handleScroll = this.handleScroll.bind(this)
        // this.state = {
        //     from: 100,
        //     to: 0,
        //     scrolledPastHeader: false,
        // }
  }

  componentDidMount () {
        // window.addEventListener('scroll', this.handleScroll)
        // this.moveToLookingFor()
        // this.isDesktop()
  }

  componentWillUnmount () {
        // window.removeEventListener('scroll', this.handleScroll)
  }

  playSound (number) {
    beep(number)
  }

  render () {
        // const { filterSet, results, requirements, me } = this.props

    // let lol = this.playSound(1)
    // let lol2 = this.playSound(2)

    return (
      <div>
        <button onClick={() => beepLow(1)}>Click</button>
        <button onClick={() => beepHigh(1)}>Click</button>
      </div>
    )
  }
}
