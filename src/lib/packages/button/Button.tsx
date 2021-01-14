import React, { Component } from 'react'
import classes from '../../utils/classes'
import Wave from '../../utils/wave/Wave'
import './style'
import Icon from '../icon/Icon'


interface ButtonProps {
  icon?: string,
  position?: 'left' | 'right',
  type?: 'default' | 'dashed' | 'primary' | 'danger',
  size?: 'small' | 'medium' | 'large',
  loading?: boolean,
  disabled?: boolean,
  ghost?: boolean,
  htmlType?: 'button' | 'submit' | 'reset',
  className?: string,
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

  public renderIcon = () => {
    const { icon, size, loading } = this.props
    const className = classes(componentName, 'icon', [size], { loading })

    return loading ? (
      <Icon name='loading' className={className} />
    ) : (
        icon && <Icon name={icon} className={className} />
      )

  }

  public render() {
    const cn = componentName
    const {
      position,
      icon,
      loading,
      size,
      type,
      htmlType,
      ghost,
      style,
      className,
      disabled,
      children,
      ...rest
    } = this.props

    const buttonClassName = classes(cn, '', [position, size, type, className], { ghost, disabled })


    return (
      <Wave>
        <button className={buttonClassName} style={style} type={htmlType} disabled={disabled} {...rest}>
          {this.renderIcon()}
          <span className={classes(cn, 'inner')}>{children}</span>
        </button>
      </Wave>

    )
  }
}


