import * as React from 'react'
import CodeBox from '../components/codebox/CodeBox'
import { Message, Button } from 'spike-react'
const componentName = 'MessagePage'

class ButtonPage extends React.Component {
  public static displayName = componentName

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

  public render() {

    return (
      <div>
        <section>
          <h1>Message 全局提示</h1>
          <p className="text">全局展示反馈信息。</p>
        </section>
        <section>
          <h2>何时使用</h2>
          <p className="text">需要一种不打断用户的轻量级提示方式时。</p>
        </section>
        <section>
          <h2>代码示例</h2>
        </section>
        <div className="example">
          <div className="container">
            <Button onClick={this.error}>error</Button>
            <span style={{ width: 20, display: 'inline-block' }}></span>
            <Button onClick={this.info}>info</Button>
            <span style={{ width: 20, display: 'inline-block' }}></span>
            <Button onClick={this.warning}>warning</Button>
            <span style={{ width: 20, display: 'inline-block' }}></span>
            <Button onClick={this.success}>success</Button>
          </div>
          <CodeBox
            title="基本用法"
            description="通过调用 Message 的静态方法：info()、success()、warning()、error() 并传递 options 参数来使用。具体属性设置见 Options。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Message</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'xue-react'</span><br /><br /><span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">onClick</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="property">handleInfo</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Info</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">onClick</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="property">handleSuccess</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Success</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">onClick</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="property">handleWarning</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Warning</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">onClick</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="property">handleError</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Error</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span>
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
              <td>content</td>
              <td className="des">内容</td>
              <td className="type">string | ReactNode</td>
              <td>——</td>
            </tr>

            <tr>
              <td>duration</td>
              <td className="des">自动关闭的延时，单位：秒。设为 0 时不自动关闭</td>
              <td className="type">number</td>
              <td>0</td>
            </tr>

            <tr>
              <td>top</td>
              <td className="des">消息距离顶部的位置</td>
              <td className="type">number</td>
              <td>24</td>
            </tr>

            <tr>
              <td>showIcon</td>
              <td className="des">是否显示默认的提示 Icon 图标</td>
              <td className="type">boolean</td>
              <td>true</td>
            </tr>

            <tr>
              <td>onClose</td>
              <td className="des">消息完全关闭（离场动画结束）时的回调</td>
              <td className="type">{'() => any'}</td>
              <td>——</td>
            </tr>

            <tr>
              <td>className</td>
              <td className="des">自定义 Message 类名</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>style</td>
              <td className="des">自定义 Message 样式</td>
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
