import * as React from 'react'
import Icon from '../icon/Icon'
import classes from '../../utils/classes'
import Transition from '../transition/Transition'
import './style'

export interface ISpinProps {
  spinning?: boolean
  size?: number
  tip?: string
  className?: string
  style?: React.CSSProperties
}

const componentName = 'Spin'

export default class Spin extends React.Component<ISpinProps> {
  static displayName = componentName

  public static defaultProps = {
    spinning: true,
    size: 16
  }

  public render() {
    const cn = componentName
    const { spinning, size, tip, className, style, children } = this.props
    return (
      <div className={classes(cn, 'wrapper', [className], { 'with-children': !!children })} style={style}>
        <div className={classes(cn, 'mask', { active: !!children, spinning })}></div>

        <Transition
          visible={!!spinning}
          beforeEnter={{ opacity: 0 }}
          afterEnter={{ opacity: 1 }}
        >
          <div className={classes(cn, 'container', { 'with-tip': !!tip, 'with-children': !!children })}>
            <Icon className={classes(cn, '')} size={size} name="spin" />
            {tip && <span className={classes(cn, 'tip')}>{tip}</span>}
          </div>
        </Transition>
        {children}
      </div>
    )
  }
}
