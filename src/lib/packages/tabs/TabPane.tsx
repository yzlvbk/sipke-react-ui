import * as React from 'react';
import classes from '../../utils/classes'

export interface ITabPaneProps {
  key: string
  title: string | React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const componentName = "TabPane"

export default class TabPane extends React.Component<ITabPaneProps> {
  public static displayName = componentName

  public static defaultProps = {
    disabled: false
  }

  public render() {
    const { active, className, style, children } = this.props;
    return (
      <li
        className={classes(componentName, "", [className], { active })}
        style={style}
      >
        {children}
      </li>
    );
  }
}
