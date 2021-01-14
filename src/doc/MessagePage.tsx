import * as React from 'react';
import Message from '../lib/packages/message/Message'
import Transition from '../lib/packages/transition/Transition'
import Button from '../lib/packages/button/Button'

export interface IMessageProps {
}

export default class MessagePage extends React.Component<IMessageProps> {
  public state = { isVisible: false }
  public error = () => {
    Message.error({
      content: '提示信息',
      top: 20,
      showIcon: true
    })
  }

  public info = () => {
    Message.info({
      content: '提示信息',
      top: 60,
      showIcon: true,
      duration: 0
    })
  }
  public warning = () => {
    Message.warning({
      content: '提示信息',
      top: 100,
      showIcon: true,
      duration: 1
    })
  }
  public success = () => {
    Message.success({
      content: '提示信息',
      top: 140,
      showIcon: true,
      duration: 5
    })
  }

  public toggleTransition = () => { this.setState({ isVisible: !this.state.isVisible }) }

  public render() {
    return (
      <div>
        {/* <Message /> */}
        <button onClick={this.error}>error</button>

        <button onClick={this.info}>info</button>
        <button onClick={this.warning}>warning</button>
        <button onClick={this.success}>success</button>

        <section>
          <Button type='primary' onClick={this.toggleTransition}>toggle transition</Button>
          <Transition visible={this.state.isVisible} beforeEnter={{
            opacity: 0,
            transition: 'all 3s'
          }}
            afterEnter={{
              opacity: 1,
              transition: 'all 3s'
            }}><div style={{ width: 100, height: 100, backgroundColor: 'red' }}>transition</div></Transition>

        </section>
      </div>
    );
  }
}
