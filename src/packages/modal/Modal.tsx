import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { openModal, removeModal } from './openModal'
import classes from '../../utils/classes'
import Transition from '../transition/Transition'
import Button from '../button/Button'
import './style'

export interface PromiseHandler {
  resolve: () => any
  reject: () => any
}

interface IModalProps {
  // common
  visible: boolean
  title?: string | React.ReactNode
  footer?: React.ReactNode
  mode?: 'declarative' | 'imperative'
  className?: string
  style?: React.CSSProperties
  afterClose?: () => any
  // the declarative mode only
  onConfirm?: (e: React.MouseEvent) => any
  onCancel?: (e: React.MouseEvent) => any
  onMask?: (e: React.MouseEvent) => any
  // the imperative mode only
  okText?: string
  okType?: 'default' | 'dashed' | 'primary' | 'danger'
  cancelText?: string
  cancelType?: 'default' | 'dashed' | 'primary' | 'danger'
  maskClosable?: boolean
  promiseHandler?: PromiseHandler
  modalId?: string
  content?: string | React.ReactNode
}

interface IModalState {
  modalVisible: boolean
}

const componentName = 'Modal'

export default class Modal extends Component<IModalProps, IModalState> {
  static displayName = componentName

  static openModal = openModal

  static removeModal = removeModal

  private timeout: any
  private bodyOverflow!: string | ''
  private bodyPaddingRight!: string | ''

  public state = { modalVisible: this.props.mode === 'declarative' }

  public static defaultProps = {
    mode: 'declarative',
    maskClosable: false,
    okText: '确 定',
    okType: 'primary',
    cancelText: '取 消',
    cancelType: 'default'
  }

  // 获取滚动条宽度
  public getScrollBarWidth = (): number => {
    return (
      window.innerWidth - document.body.clientWidth ||
      document.documentElement.clientHeight
    )
  }

  public afterLeave = () => {
    // 关闭后还原
    document.body.style.overflow = this.bodyOverflow
    document.body.style.paddingRight = this.bodyPaddingRight
    const { modalId, afterClose } = this.props
    if (afterClose) {
      afterClose()
    }

    if (modalId) {
      Modal.removeModal(modalId)
    }
  }

  // 'imperative' 模式下关闭 modal
  public closeModal = () => {
    this.setState(
      {
        modalVisible: false
      },
      () => {
        this.timeout = setTimeout(() => {
          this.afterLeave()
        }, 300)
      }
    )
  }

  public handleOnConfirm = (e: React.MouseEvent) => {
    const { onConfirm, mode, promiseHandler } = this.props
    if (mode === 'declarative') {
      this.timeout = setTimeout(() => {
        this.afterLeave()
      }, 300)
      if (onConfirm) {
        onConfirm(e)
      }
    }
    if (mode === 'imperative' && promiseHandler) {
      this.closeModal()
      promiseHandler.resolve()
    }
  }

  public handleOnCancel = (e: React.MouseEvent) => {
    const { onCancel, mode, promiseHandler } = this.props
    if (mode === 'declarative') {
      this.timeout = setTimeout(() => {
        this.afterLeave()
      }, 300)
      if (onCancel) {
        onCancel(e)
      }
    }
    if (mode === 'imperative' && promiseHandler) {
      this.closeModal()
      promiseHandler.reject()
    }
  }

  public componentDidMount() {
    const { visible } = this.props
    const { modalVisible } = this.state
    if (visible && modalVisible) {
      this.bodyPaddingRight = document.body.style.paddingRight
    }
    if (!modalVisible) {
      this.setState({
        modalVisible: true
      })
    }
  }

  public componentDidUpdate(prevProps: IModalProps, prevState: IModalState) {
    const { mode, visible } = this.props
    const { modalVisible } = this.state

    // 声明式调用
    if (mode === 'declarative') {
      // false => true 打开
      if (visible) {
        this.bodyOverflow = document.body.style.overflow
        this.bodyPaddingRight = document.body.style.paddingRight
        document.body.style.paddingRight = this.getScrollBarWidth() + 'px'
        document.body.style.overflow = 'hidden'
      }
    } else if (mode === 'imperative') {
      // 命令式调用
      // false => true 打开
      if (!prevState.modalVisible && modalVisible) {
        this.bodyOverflow = document.body.style.overflow
        this.bodyPaddingRight = document.body.style.paddingRight
        document.body.style.paddingRight = this.getScrollBarWidth() + 'px'
        document.body.style.overflow = 'hidden'
      }
    }
  }

  render() {
    const cn = componentName
    const {
      title,
      footer,
      visible,
      mode,
      content,
      okText,
      okType,
      cancelText,
      cancelType,
      className,
      style,
      children
    } = this.props
    const { modalVisible } = this.state
    return ReactDOM.createPortal(
      <>
        <Transition
          visible={visible && modalVisible}
          beforeEnter={{ opacity: 0 }}
          afterEnter={{ opacity: 0.7 }}
        >
          <div className={classes(cn, 'mask')} />
        </Transition>
        <Transition
          visible={visible && modalVisible}
          beforeEnter={{
            opacity: 0,
            transform: 'translateX(-50%) translateY(-50%) scale(0)',
            top: '50%'
          }}
          afterEnter={{
            opacity: 1,
            transform: 'translateX(-50%) translateY(-50%) scale(1)',
            top: '30%'
          }}
        >
          <div className={classes(cn, 'content', [className])} style={style}>
            <div className={classes(cn, 'header')}>{title || 'Modal'}</div>
            <div className={classes(cn, 'body')}>{mode === 'declarative' ? children : content}</div>
            <div className={classes(cn, 'footer')}>
              {footer || (
                <>
                  <Button
                    style={{ marginRight: '8px' }}
                    onClick={this.handleOnCancel}
                    type={cancelType}
                  >
                    {cancelText}
                  </Button>
                  <Button type={okType} onClick={this.handleOnConfirm}>
                    {okText}
                  </Button>
                </>
              )}
            </div>
          </div>
        </Transition>

      </>,
      document.body
    )
  }

  public componentWillUnmount() {
    if (this.timeout) {
      window.clearTimeout(this.timeout)
    }
  }
}
