import React, { Component } from 'react'
import Modal from '../packages/modal/Modal'

interface Props {

}
interface State {

}

export default class ModalPage extends Component<Props, State> {
  state = { visible: false }

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
      </div>
    )
  }
}
