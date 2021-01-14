import React, { Component } from 'react'
import Pager from '../lib/packages/pager/Pager'

interface Props {

}
interface State {

}

export default class PagerPage extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
        <Pager total={5} />
        <h1>更多</h1>
        <Pager total={400} />

        <h1>迷你</h1>
        <Pager total={20} size="small" />

        <h1>简洁</h1>
        <Pager total={20} simple={true} />

        <h1>受控</h1>
        <Pager total={20} current={10} />
      </div>
    )
  }
}
