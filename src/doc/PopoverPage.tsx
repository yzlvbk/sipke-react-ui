import * as React from 'react';
import Popover from '../lib/packages/popover/Popover'
import Button from '../lib/packages/button/Button'

export interface IPopoverPageProps {
}

export default class PopoverPage extends React.Component<IPopoverPageProps> {
  public render() {
    const content = (
      <div style={{ padding: '10px' }}>
        content
      </div>
    )
    return (
      <div>
        <h1>基本用法</h1>
        <Popover content={content}>
          <Button type="primary">Hover me</Button>
        </Popover>

        <h1>支持4个方向</h1>
        <Popover content={content} position="left">
          <Button type="primary">Left</Button>
        </Popover>
        <Popover content={content}>
          <Button type="primary">Top</Button>
        </Popover>
        <Popover content={content} position="bottom">
          <Button type="primary">Bottom</Button>
        </Popover>
        <Popover content={content} position="right">
          <Button type="primary">Right</Button>
        </Popover>

        <h1>支持 hover, click, focus 三种触发方式。</h1>
        <Popover content={content}>
          <Button type="primary">Hover</Button>
        </Popover>
        <Popover content={content} trigger="click">
          <Button type="primary">Click</Button>
        </Popover>
        <Popover content={content} trigger="focus">
          <Button type="primary">Focus</Button>
        </Popover>
      </div>
    );
  }
}
