import * as React from 'react';
import Switch from '../packages/switch/Switch'

export interface ISwitchPageProps {
}

export default class SwitchPage extends React.Component<ISwitchPageProps> {
  public state = { controlled: false }

  public toggle = () => {
    this.setState({ controlled: !this.state.controlled })
  }

  public render() {
    return (
      <div>
        <section>
          <h4>基本用法</h4>
          <Switch />
        </section>

        <section>
          <h4>不同尺寸</h4>
          <Switch />
          <Switch size='small' />
        </section>

        <section>
          <h4>禁用状态</h4>
          <Switch disabled={true} />
          <Switch disabled={true} checked={true} />
        </section>

        <section>
          <h4>默认选中</h4>
          <Switch checked={true} />
          <Switch checked={true} size='small' />
        </section>

        <section>
          <h4>受控组件 通过controlled属性控制</h4>
          <Switch controlled={true} checked={this.state.controlled} /> <button onClick={this.toggle}>Toggle</button>
        </section>
      </div>
    );
  }
}
