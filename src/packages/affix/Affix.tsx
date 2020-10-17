import * as React from 'react'
import './style'
import classes from '../../utils/classes'

export interface IAffixProps {
  distance?: number,
  className?: string,
  style?: React.CSSProperties
}

const componentName = 'Affix'

export default class Affix extends React.Component<IAffixProps> {
  static displayName = componentName
  static defaultProps = {
    distance: 0
  }
  private top: number = 0
  private affixRef!: HTMLDivElement
  private wrapperRef!: HTMLDivElement

  public saveAffixRef = (node: HTMLDivElement) => {
    this.affixRef = node
  }
  public saveWrapperRef = (node: HTMLDivElement) => {
    this.wrapperRef = node
  }

  public setTop = () => {
    if (window.scrollY === 0) {
      this.top = this.affixRef.getBoundingClientRect().top
    } else {
      // 挂载时若窗口不为0，先滚动至0
      const { scrollX, scrollY } = window
      window.scrollTo(scrollX, 0)
      this.top = this.affixRef.getBoundingClientRect().top
      window.scrollTo(scrollX, scrollY)
    }
  }

  public handleScroll = () => {
    const { distance } = this.props
    if (window.scrollY > this.top - distance!) {
      const { top, bottom, left, right } = this.wrapperRef.getBoundingClientRect()
      this.wrapperRef.style.width = right - left + 'px'
      this.wrapperRef.style.height = bottom - top + 'px'
      this.wrapperRef.style.left = left + 'px'
      this.wrapperRef.style.top = distance + 'px'
      this.wrapperRef.style.position = 'fixed'
    } else {
      this.wrapperRef.style.position = 'static'
    }
  }

  public componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    this.setTop()
  }

  public render() {
    const { style, className, children, ...rest } = this.props
    return (
      <div className={classes(componentName, '')} ref={this.saveAffixRef}>
        <div className={classes(componentName, 'wrapper', [className])}
          style={style}
          ref={this.saveWrapperRef}
          {...rest}
        >
          {children}
        </div>
      </div>
    );
  }
}
