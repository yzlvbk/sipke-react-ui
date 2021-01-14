// @ts-nocheck
import React, { Component } from 'react'
// import Button from '../packages/button/Button'
import { Button, ButtonGroup } from '../../lib/react-spike'
interface Props {

}
interface State {

}

console.log(Button);


export default class ButtonPage extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
        <section>
          <h4>默认按钮、主要按钮、虚线按钮、危险按钮</h4>
          <Button>Default</Button>
          <Button type="primary">Primary</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
        </section>

        <section>
          <h4>禁用按钮、加载中状态</h4>
          <Button disabled={true}>Disabled</Button>
          <Button loading={true} type="primary">Loading</Button>
          <Button icon="setting" type="primary">Click me</Button>
        </section>

        <section>
          <h4>Icon图标</h4>
          <Button disabled={true}>Disabled</Button>
          <Button icon="setting">Icon</Button>
          <Button icon="setting" position="right">Icon</Button>
        </section>

        <section style={{ backgroundColor: '#BEC8C8' }}>
          <h4>幽灵按钮：常用在有色背景上</h4>
          <Button ghost={true}>Default</Button>
          <Button ghost={true} type="primary">Primary</Button>
          <Button ghost={true} type="dashed">Dashed</Button>
          <Button ghost={true} type="danger">Danger</Button>
        </section>

        <section>
          <h4>按钮有大、中、小三种尺寸</h4>
          <Button size='small' type="primary">Primary</Button>
          <Button size='medium' type="primary">Primary</Button>
          <Button size='large' type="primary">Primary</Button>
        </section>

        <section>
          <h4>按钮组合</h4>
          <ButtonGroup>
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </section>


      </div >
    )
  }
}
