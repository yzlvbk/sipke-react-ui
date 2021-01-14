import * as React from 'react'
import CodeBox from '../components/codebox/CodeBox'
import { Spin, Button } from 'spike-react'
const componentName = 'SpinPage'

class ButtonPage extends React.Component {
  public static displayName = componentName

  public state = { spinning1: true, spinning2: true }

  public toggle1 = () => {
    this.setState({ spinning1: !this.state.spinning1 })
  }

  public toggle2 = () => {
    this.setState({ spinning2: !this.state.spinning2 })
  }

  public render() {

    return (
      <div>
        <section>
          <h1>Spin 加载中</h1>
          <p className="text">用于页面和区块的加载中状态。</p>
        </section>
        <section>
          <h2>何时使用</h2>
          <p className="text">页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。</p>
        </section>
        <section>
          <h2>代码示例</h2>
        </section>
        <div className="example">
          <div className="container">
            <Spin />
          </div>
          <CodeBox
            title="基本用法"
            description="一个简单的 loading 状态。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="property">Spin</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="label">&lt;</span><span className="component">Spin</span><span className="space">&nbsp;&nbsp;</span><span className="label">/</span><span className="label">&gt;</span>
          </CodeBox>
        </div>

        <div className="example">
          <div className="container">
            <Spin tip="loading" />
          </div>
          <CodeBox
            title="自定义描述文案"
            description="自定义描述文案。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="property">Spin</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="label">&lt;</span><span className="component">Spin</span><span className="space">&nbsp;&nbsp;</span><span className="property">tip</span><span className="htmlstr">=</span><span className="string">"loading"</span><span className="space">&nbsp;&nbsp;</span><span className="label">/</span><span className="label">&gt;</span>
          </CodeBox>
        </div>

        <div className="example">
          <div className="container">
            <Button style={{ marginRight: 20 }} type="primary" onClick={this.toggle1}>Toggle</Button>
            <Spin spinning={this.state.spinning1} />
          </div>
          <CodeBox
            title="受控"
            description="通过 spinning 属性控制 loading 状态。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="property">Spin</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="label">&lt;</span><span className="component">Spin</span><span className="space">&nbsp;&nbsp;</span><span className="property">tip</span><span className="htmlstr">=</span><span className="string">"loading"</span><span className="space">&nbsp;&nbsp;</span><span className="label">/</span><span className="label">&gt;</span>
          </CodeBox>
        </div>

        <div className="example">
          <div className="container">
            <Spin spinning={this.state.spinning2} tip="loading..." size={30}>
              <div>Further details about the context of this element.</div>
            </Spin>

            <div style={{ textAlign: "center" }}>
              <Button style={{ marginRight: 20, marginTop: 40 }} type="primary" onClick={this.toggle2}>Toggle</Button>
            </div>
          </div>
          <CodeBox
            title="容器加载中"
            description="可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。"
          >
          </CodeBox>
        </div>

        <section>
          <h2>API</h2>
        </section>

        <table className="api-table">
          <thead>
            <tr>
              <th>参数</th>
              <th className="des">说明</th>
              <th className="type">类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>spinning</td>
              <td className="des">是否为加载中状态</td>
              <td className="type">boolean</td>
              <td>true</td>
            </tr>

            <tr>
              <td>size</td>
              <td className="des">加载图标的大小，单位：px</td>
              <td className="type">number</td>
              <td>16</td>
            </tr>

            <tr>
              <td>tip</td>
              <td className="des">自定义描述文案</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>className</td>
              <td className="des">自定义 Spin 容器类名</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>style</td>
              <td className="des">自定义 Spin 容器样式</td>
              <td className="type">React.CSSProperties</td>
              <td>——</td>
            </tr>

          </tbody>
        </table>

      </div>
    )
  }
}

export default ButtonPage
