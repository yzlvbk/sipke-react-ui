import React, { Component } from 'react'

import './style'

interface ButtonProps {
  icon?: string,
  position?: 'left' | 'right',
  type?: 'default' | 'dashed' | 'primary' | 'danger',
  size?: 'small' | 'medium' | 'large',
  loading?: boolean,
  disabled?: boolean,
  ghost?: boolean,
  htmlType?: 'button' | 'submit' | 'reset',
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler
  onMouseEnter?: React.MouseEventHandler
  onMouseLeave?: React.MouseEventHandler
  onFocus?: React.FocusEventHandler
  onBlur?: React.FocusEventHandler
}
interface State {

}

const componentName = 'Button'

export default class Button extends Component<ButtonProps, State> {
  static displayName = componentName

  static defaultProps = {
    position: 'left',
    type: 'default',
    size: 'medium',
    loading: false,
    disabled: false,
    ghost: false,
    htmlType: 'button'
  }

  render() {
    console.log(this)

    return (
      <button className="spike-button">
        <span>button</span>
      </button>
    )
  }
}


