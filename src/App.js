import React, { Component, Fragment } from 'react'
import './App.scss'
import ImgLoaded from './ImgLoaded'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <ImgLoaded
          width={400}
          height={200}
          src="http://lorempixel.com/g/400/200"
        />
      </Fragment>
    )
  }
}
