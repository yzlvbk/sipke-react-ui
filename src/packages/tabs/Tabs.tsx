import * as React from 'react';
import classes from '../../utils/classes'
import './style'

export interface ITabsProps {
  activekey?: string,
  dafaultActiveKey?: string,
  vertical?: boolean,
  onChange?: (key: string) => any,
  className?: string,
  style?: React.CSSProperties
}

export interface ITabsState {
  derivedActiveKey: string
}

export interface Tabpane {
  title: React.ReactNode,
  active?: boolean,
  disabled?: boolean,
  className?: string,
  style?: React.CSSProperties
}

const componentName = 'Tabs'

export default class Tabs extends React.Component<ITabsProps, ITabsState> {
  static displayName = componentName
  private headRef!: HTMLUListElement
  private roleRef!: HTMLLIElement
  private bodyRef!: HTMLUListElement
  private keys: string[] = []

  static defaultProps = {
    vertical: false
  }

  // @ts-ignore
  public state = { derivedActiveKey: this.props.activekey || this.props.children[0].key }

  public saveHeadRef = (node: HTMLUListElement) => {
    this.headRef = node;
  }

  public saveRoleRef = (node: HTMLLIElement) => {
    this.roleRef = node;
  }

  public saveBodyRef = (node: HTMLUListElement) => {
    this.bodyRef = node;
  }

  public getTitles = (): any => {
    const { children } = this.props
    const { derivedActiveKey } = this.state
    return React.Children.map(children, (child: any): React.ReactNode => {
      if (!child) return null
      const key = child.key
      this.keys.push(key)
      return (
        <li key={key}
          ref={node => this[key] = node}
          onClick={(e: React.MouseEvent) => this.handleClickTitle(key, child.props.disabled, e)}
          className={classes(componentName, 'title', { active: key === derivedActiveKey, disabled: child.props.disabled })}
        >
          {child.props.title}
        </li>
      )
    })
  }

  public handleClickTitle = (
    key: string,
    disabled: boolean,
    e: React.MouseEvent
  ) => {
    if (disabled) {
      return;
    }
    if (key !== this.state.derivedActiveKey) {
      this.setState({
        derivedActiveKey: key
      }, () => console.log(this.state.derivedActiveKey))
      if (this.props.onChange) {
        this.props.onChange(key)
      }
    }
  }

  public locateUnderline = (key: string, node: HTMLLIElement) => {
    console.log('locateUnderline', key, node)
    const { headRef: head, bodyRef: body, roleRef: role, keys } = this
    const { vertical } = this.props
    console.log('head', head)
    console.log('body', body)
    console.log('role', role)
    console.log('keys', keys)
    console.log('vertical', vertical)
    const { left: headLeft, top: headTop } = head.getBoundingClientRect()
    const { left, right, top, bottom } = node.getBoundingClientRect()
    console.log('headLeft', headLeft)
    console.log('headTop', headTop)
    console.log('left', left)
    console.log('right', right)
    console.log('top', top)
    console.log('bottom', bottom)
    if (vertical) {
      // 垂直
      role.style.height = bottom - top + "px";
      role.style.transform = `translateY(${top - headTop}px)`;

      const index: number = keys.indexOf(key)
      body.style.transform = `translateY(${-100 * index}%)`
    } else {
      // 水平
      role.style.width = right - left + 'px'
      role.style.transform = `translateX(${left - headLeft}px)`

      const index: number = keys.indexOf(key)
      body.style.transform = `translateX(${-100 * index}%)`
    }




  }

  componentDidMount() {
    const { derivedActiveKey } = this.state;
    this.locateUnderline(derivedActiveKey, this[derivedActiveKey])
    // console.log(this.state.derivedActiveKey)
  }

  public componentDidUpdate() {
    const { derivedActiveKey } = this.state;
    this.locateUnderline(derivedActiveKey, this[derivedActiveKey])
  }

  public render() {
    const cn = componentName
    const { vertical, className, style } = this.props

    return (
      <div className={classes(cn, '', [className], { vertical })} style={style}>
        <ul className={classes(cn, 'head', { vertical })} ref={this.saveHeadRef}>
          {this.getTitles()}
          <li className={classes(cn, "role", { vertical, horizontal: !vertical })} ref={this.saveRoleRef}></li>
        </ul>
        <ul className={classes(cn, 'body', { vertical })} ref={this.saveBodyRef}>
          <li className='spike-tabpane active'>tabpane1</li>
          <li className='spike-tabpane'>tabpane2</li>
          <li className='spike-tabpane'>tabpane3</li>
        </ul>
      </div>
    );
  }
}
