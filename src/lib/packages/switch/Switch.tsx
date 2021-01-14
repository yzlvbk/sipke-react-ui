import * as React from 'react';
import classes from '../../utils/classes'
import './style'

export interface ISwitchProps {
  checked?: boolean,
  size?: 'small' | 'dafault',
  onChange?: (checked: boolean, e: React.MouseEvent) => any,
  disabled?: boolean,
  controlled?: boolean, // 受控switch，onClick失效
  className?: string,
  style?: React.CSSProperties
}

export interface ISwitchState {
  derivedChecked: boolean
}

const componentName = 'Switch'

export default class Switch extends React.Component<ISwitchProps, ISwitchState> {
  static diaplayName = componentName

  static defaultProps = {
    size: 'dafault',
    disabled: false,
    controlled: false
  }

  public state = {
    derivedChecked: this.props.checked || false
  }

  public handleClick: React.MouseEventHandler = e => {
    const { disabled, onChange } = this.props
    if (disabled) return
    const { derivedChecked } = this.state
    this.setState({ derivedChecked: !derivedChecked })
    if (onChange) {
      onChange(!derivedChecked, e)
    }
  }

  public static getDerivedStateFromProps(
    nextProps: ISwitchProps,
    prevState: ISwitchState
  ) {
    const { checked, controlled } = nextProps
    const { derivedChecked } = prevState
    if ('checked' in nextProps && checked !== derivedChecked && controlled) {
      return { derivedChecked: checked }
    }
    return null
  }

  public render() {
    const cn = componentName
    const { size, disabled, style, className, controlled } = this.props
    const { derivedChecked } = this.state
    const switchClassName = classes(cn, '', [className, size], { checked: derivedChecked, disabled })
    return (
      <span
        className={switchClassName}
        style={style}
        onClick={controlled ? null! : this.handleClick}
      >
        <span className={classes(cn, 'core')}></span>
      </span>
    )
  }
}
