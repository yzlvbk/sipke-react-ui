import * as React from 'react';
import classes from '../../utils/classes'
import Icon from '../icon/Icon'
import Transition from '../transition/Transition'
import { info, success, warning, error, removeMessage, Options } from './openMessage'
import './style'

export interface IMessageProps {
  content: string | React.ReactNode
  mode: 'info' | 'success' | 'warning' | 'error'
  top: number
  duration: number
  showIcon: boolean
  messageId: string
  onClose?: () => any
  className?: string
  style?: React.CSSProperties
}

export interface IMessageState {
  visible: boolean
}

const componentName = 'Message'

export default class Message extends React.Component<IMessageProps, IMessageState> {
  static displayName = componentName
  public static info: (options: Options) => void = info
  public static success: (options: Options) => any = success
  public static warning: (options: Options) => void = warning
  public static error: (options: Options) => void = error
  public static removeMessage: (messageId: string) => any = removeMessage

  private closeTimeout: any
  private leaveTimeout: any

  public state = { visible: false }

  public close = () => {
    this.setState({ visible: false })
    this.leaveTimeout = setTimeout(() => {
      this.afterLeave()
    }, 300)
  }
  public afterLeave = () => {
    const { messageId, onClose } = this.props
    Message.removeMessage(messageId)
    if (onClose) {
      onClose()
    }
  }

  componentDidMount() {
    const { duration } = this.props
    this.setState({ visible: true })
    if (duration) {
      setTimeout(() => {
        this.close()
      }, duration * 1000);
    }
  }

  public render() {
    const cn = componentName
    const {
      mode,
      top,
      content,
      showIcon,
      duration,
      className,
      style
    } = this.props
    const { visible } = this.state

    return (
      <Transition
        visible={visible}
        beforeEnter={{
          transform: `translateX(-50%) translateY(${-top}px)`,
          opacity: 0
        }}
        afterEnter={{
          transform: `translateX(-50%) translateY(0)`,
          opacity: 1
        }}
      >
        <div
          className={classes(cn, '', [className], { 'with-icon': showIcon })}
          style={Object.assign({}, style, { top: `${top}px` })}
        >
          <span className={classes(cn, 'icon-wrapper', [mode])}><Icon name={mode} size={16} /></span>
          {content}
          {duration === 0 && (<span className={classes(cn, 'close')} onClick={this.close} ><Icon name="close" size={12} /></span>)}

        </div>
      </Transition>

    )
  }

  public componentWillUnmount() {
    const { closeTimeout, leaveTimeout } = this
    if (closeTimeout) {
      window.clearTimeout(closeTimeout)
    }
    if (leaveTimeout) {
      window.clearTimeout(leaveTimeout)
    }
  }
}
