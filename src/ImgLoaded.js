import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ImgLoaded extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
  }

  state = {
    loaded: false,
    width: this.props.width,
    height: this.props.height
  }

  isLoaded = (e) => {
    const { naturalWidth, naturalHeight } = e.target
    this.setState({ loaded: true, width: naturalWidth, height: naturalHeight })
  }

  render() {
    const { src } = this.props
    const { loaded, width, height } = this.state
    return (
      <img
        width={width}
        height={height}
        className={`${!loaded ? 'loading' : ''}`}
        onLoad={this.isLoaded}
        src={src}
      />
    )
  }
}
