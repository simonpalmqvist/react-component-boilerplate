import React, {Component, PropTypes} from 'react'

export default class Button extends Component {
  render () {
    return (
      <button onClick={this.props.onClick}>{this.props.title}</button>
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired
}
