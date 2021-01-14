import * as React from 'react';
import classes from '../../utils/classes'

export interface IButtonGroupProps {
  className?: string,
  style?: React.CSSProperties
}

const componentName = 'ButtonGroup'
export default class ButtonGroup extends React.Component<IButtonGroupProps> {
  static displayName = componentName

  public render() {
    const { className, style, children } = this.props

    return (
      <div className={classes(componentName, '', [className])} style={style}>
        {children}
      </div>
    );
  }
}
