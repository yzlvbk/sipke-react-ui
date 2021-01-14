import React, { Component } from 'react'
import Modal from '../lib/packages/modal/Modal'

interface Props {

}
interface State {

}


export default class ModalPage extends Component<Props, State> {
  state = { visible: false }

  content = <section>
    <div>Some contents...</div>
    <div>Some contents...</div>
    <div>Some contents...</div>
  </section>

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ visible: true })}>click</button>
        <Modal visible={this.state.visible}
          onConfirm={() => {
            this.setState({ visible: false })
          }}
          onCancel={() => {
            this.setState({ visible: false })
          }}
        >
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
        </Modal>

        <section>
          <div>命令式调用</div>
          <button onClick={() => { Modal.openModal({ title: 'imperative', content: this.content }).then(() => console.log('resolve')).catch(() => console.log('reject')) }}>openModal</button>
        </section>
      </div>
    )
  }
}
