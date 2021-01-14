import * as React from 'react';
import ReactDOM from 'react-dom';
import classes from '../classes'
import './wave.scss'

export interface IWaveProps {
  closeWave?: boolean
}

const componentName = 'Wave'

export default class Wave extends React.Component<IWaveProps> {
  static displayName = componentName

  static defaultProps = {
    closeWave: false
  }

  private node!: HTMLElement
  private animating: boolean = false
  private originClassName!: string
  private animatingClassName = "spike-react-wave-animation-animating"

  public componentDidMount() {
    this.node = ReactDOM.findDOMNode(this) as HTMLElement
    this.node.addEventListener("click", this.animationStart)
  }

  public animationStart = () => {
    if (this.animating || this.props.closeWave) return
    this.animating = true
    this.originClassName = this.node.className
    this.node.className = classes('', [this.originClassName, this.animatingClassName])
    this.node.addEventListener('animationend', this.animationEnd)
  }

  public animationEnd = () => {
    this.animating = false
    this.node.className = classes('', [this.originClassName])
    this.node.addEventListener('animationend', this.animationEnd)

  }

  public render() {
    const { children } = this.props
    return typeof children === 'string' ? (<span className="sipke-wave-string-wrapper">{children}</span>) : (children)
  }
}
