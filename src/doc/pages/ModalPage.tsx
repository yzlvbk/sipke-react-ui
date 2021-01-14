import * as React from 'react'
import CodeBox from '../components/codebox/CodeBox'
import { Modal, Button } from 'spike-react'
const componentName = 'ModalPage'

class ButtonPage extends React.Component {
  public static displayName = componentName

  state = { visible: false }

  content = <section>
    <div>Some contents...</div>
    <div>Some contents...</div>
    <div>Some contents...</div>
  </section>

  public render() {

    return (
      <div>
        <section>
          <h1>Modal 对话框</h1>
          <p className="text">弹出一个对话框。</p>
        </section>
        <section>
          <h2>何时使用</h2>
          <p className="text">需要与用户交互，同时避免中断用户的操作流程时。</p>
        </section>
        <section>
          <h2>代码示例</h2>
        </section>
        <div className="example">
          <div className="container">
            <Button type="primary" onClick={() => this.setState({ visible: true })}>Toggle Visble</Button>
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
          <CodeBox
            title="组件式使用"
            description="使用组件声明一个对话框，通过控制 visible 属性来显示/隐藏。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Modal</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Modal</span><span className="space">&nbsp;&nbsp;</span><span className="property">visible</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="property">state</span><span className="htmlstr">.</span><span className="property">visible</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">title</span><span className="htmlstr">=</span><span className="string">"Declarative"</span><span className="space">&nbsp;&nbsp;</span><span className="property">onConfirm</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="property">handleConfirm</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">onCancel</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="property">handleCancel</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="htmltag">div</span><span className="label">&gt;</span><span className="htmlstr">Some contents...</span><span className="label">&lt;</span><span className="label">/</span><span className="htmltag">div</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="htmltag">div</span><span className="label">&gt;</span><span className="htmlstr">Some contents...</span><span className="label">&lt;</span><span className="label">/</span><span className="htmltag">div</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="htmltag">div</span><span className="label">&gt;</span><span className="htmlstr">Some contents...</span><span className="label">&lt;</span><span className="label">/</span><span className="htmltag">div</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="label">/</span><span className="component">Modal</span><span className="label">&gt;</span>
          </CodeBox>
        </div>

        <div className="example">
          <div className="container">
            <Button onClick={() => { Modal.openModal({ title: 'imperative', content: this.content }).then(() => console.log('resolve')).catch(() => console.log('reject')) }}>openModal</Button>
          </div>
          <CodeBox
            title="命令式使用"
            description="调用 openModal 函数弹出一个对话框，openModal 函数将返回一个 promise 对象，其状态由用户操作决定。openModal 函数接受一个 options 参数，支持组件大部分属性，具体属性设置见 Options。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Modal</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="htmltag">public </span><span className="method">handleOpenModal </span><span className="htmlstr">= () </span><span className="htmltag">=&gt; </span><span className="htmlstr">{'{'}</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">Modal</span><span className="htmlstr">.</span><span className="method">openModal</span><span className="htmlstr">({'{'} </span><span className="property">title: </span><span className="string">'Imperative'</span><span className="htmlstr">, </span><span className="property">content: </span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="property">content </span><span className="htmlstr">{'}'})</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">.</span><span className="method">then</span><span className="htmlstr">(()</span><span className="htmltag"> =&gt; </span><span className="htmlstr">{'{'}</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="component">console</span><span className="htmlstr">.</span><span className="method">log</span><span className="htmlstr">(</span><span className="string">'resolve'</span><span className="htmlstr">)</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">{'}'})</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">.</span><span className="method">catch</span><span className="htmlstr">(()</span><span className="htmltag"> =&gt; </span><span className="htmlstr">{'{'}</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="component">console</span><span className="htmlstr">.</span><span className="method">log</span><span className="htmlstr">(</span><span className="string">'reject'</span><span className="htmlstr">)</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">{'}'})</span><br /><span className="htmlstr">{'}'}</span><br /><br /><span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">type</span><span className="htmlstr">=</span><span className="string">"primary"</span><span className="space">&nbsp;&nbsp;</span><span className="property">onClick</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="property">handleOpenModal</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Open Modal</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span>
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
              <td>visible</td>
              <td className="des">对话框是否可见</td>
              <td className="type">boolean</td>
              <td>——</td>
            </tr>

            <tr>
              <td>title</td>
              <td className="des">标题</td>
              <td className="type">string | ReactNode</td>
              <td>——</td>
            </tr>

            <tr>
              <td>footer</td>
              <td className="des">底部内容</td>
              <td className="type">ReactNode</td>
              <td>——</td>
            </tr>

            <tr>
              <td>onConfirm</td>
              <td className="des">点击确认按钮时的回调</td>
              <td className="type">{'(e: React.MouseEvent) => any'}</td>
              <td>——</td>
            </tr>

            <tr>
              <td>onCancel	</td>
              <td className="des">点击取消按钮时的回调</td>
              <td className="type">{'(e: React.MouseEvent) => any'}</td>
              <td>——</td>
            </tr>

            <tr>
              <td>onMask</td>
              <td className="des">点击蒙层时的回调</td>
              <td className="type">{'(e: React.MouseEvent) => any'}</td>
              <td>——</td>
            </tr>

            <tr>
              <td>afterClose</td>
              <td className="des">对话框完全关闭（离场动画结束）时的回调</td>
              <td className="type">{'() => any'}</td>
              <td>——</td>
            </tr>

            <tr>
              <td>className</td>
              <td className="des">	自定义 Modal 类名</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>style</td>
              <td className="des">自定义 Modal 样式</td>
              <td className="type">React.CSSProperties</td>
              <td>——</td>
            </tr>

          </tbody>
        </table>

        <section>
          <h2>Options</h2>
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
              <td>title</td>
              <td className="des">标题</td>
              <td className="type">string | ReactNode</td>
              <td>——</td>
            </tr>

            <tr>
              <td>content</td>
              <td className="des">内容</td>
              <td className="type">string | ReactNode</td>
              <td>——</td>
            </tr>

            <tr>
              <td>okText</td>
              <td className="des">确认按钮文字</td>
              <td className="type">string</td>
              <td>'确定'</td>
            </tr>

            <tr>
              <td>okType</td>
              <td className="des">确认按钮类型</td>
              <td className="type">'default' | 'dashed' | 'primary' | 'danger'</td>
              <td>'primary'</td>
            </tr>

            <tr>
              <td>cancelText</td>
              <td className="des">取消按钮文字</td>
              <td className="type">string</td>
              <td>'取消'</td>
            </tr>

            <tr>
              <td>cancelType</td>
              <td className="des">取消按钮类型</td>
              <td className="type">'default' | 'dashed' | 'primary' | 'danger'</td>
              <td>'default'</td>
            </tr>

            <tr>
              <td>maskClosable</td>
              <td className="des">点击蒙层是否关闭 Modal（相当于点击取消按钮）</td>
              <td className="type">boolean</td>
              <td>false</td>
            </tr>

            <tr>
              <td>afterClose</td>
              <td className="des">对话框完全关闭（离场动画结束）时的回调</td>
              <td className="type">{'() => any'}</td>
              <td>——</td>
            </tr>

            <tr>
              <td>className</td>
              <td className="des">自定义 Modal 类名</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>style</td>
              <td className="des">自定义 Modal 样式</td>
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
