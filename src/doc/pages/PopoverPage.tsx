import * as React from 'react'
import CodeBox from '../components/codebox/CodeBox'
import { Popover, Button } from 'spike-react'
const componentName = 'PopoverPage'

class ButtonPage extends React.Component {
  public static displayName = componentName

  public render() {

    const content = (
      <div style={{ padding: '10px' }}>
        content
      </div>
    )

    return (
      <div>
        <section>
          <h1>Popover 气泡卡片</h1>
          <p className="text">触发时弹出卡片浮层。</p>
        </section>
        <section>
          <h2>何时使用</h2>
          <p className="text">根据用户的操作行为展现目标元素的进一步提示或相关操作时。</p>
        </section>
        <section>
          <h2>代码示例</h2>
        </section>

        <div className="example">
          <div className="container">
            <Popover content={content}>
              <Button type="primary">Hover me</Button>
            </Popover>
          </div>
          <CodeBox
            title="基本用法"
            description="最基本的用法，浮层大小由内容区决定。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Popover</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Popover</span><span className="space">&nbsp;&nbsp;</span><span className="property">content</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">content</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">type</span><span className="htmlstr">=</span><span className="string">"primary"</span><span className="label">&gt;</span><span className="text">Hover me</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="label">/</span><span className="component">Popover</span><span className="label">&gt;</span>
          </CodeBox>
        </div>

        <div className="example">
          <div className="container">
            <Popover content={content} position="left">
              <Button type="primary">Left</Button>
            </Popover>
            <span style={{ display: 'inline-block', width: 20 }}></span>
            <Popover content={content} >
              <Button type="primary">Top</Button>
            </Popover>
            <span style={{ display: 'inline-block', width: 20 }}></span>
            <Popover content={content} position="bottom">
              <Button type="primary">Bottom</Button>
            </Popover>
            <span style={{ display: 'inline-block', width: 20 }}></span>
            <Popover content={content} position="right">
              <Button type="primary">Right</Button>
            </Popover>
          </div>
          <CodeBox
            title="四个方向"
            description="支持四个方向。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Popover</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Popover</span><span className="space">&nbsp;&nbsp;</span><span className="property">content</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">content</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">position</span><span className="htmlstr">=</span><span className="string">"left"</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">type</span><span className="htmlstr">=</span><span className="string">"primary"</span><span className="label">&gt;</span><span className="text">Left</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="label">/</span><span className="component">Popover</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Popover</span><span className="space">&nbsp;&nbsp;</span><span className="property">content</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">content</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">type</span><span className="htmlstr">=</span><span className="string">"primary"</span><span className="label">&gt;</span><span className="text">Top</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="label">/</span><span className="component">Popover</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Popover</span><span className="space">&nbsp;&nbsp;</span><span className="property">content</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">content</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">position</span><span className="htmlstr">=</span><span className="string">"bottom"</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">type</span><span className="htmlstr">=</span><span className="string">"primary"</span><span className="label">&gt;</span><span className="text">Bottom</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="label">/</span><span className="component">Popover</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Popover</span><span className="space">&nbsp;&nbsp;</span><span className="property">content</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">content</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">position</span><span className="htmlstr">=</span><span className="string">"right"</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">type</span><span className="htmlstr">=</span><span className="string">"primary"</span><span className="label">&gt;</span><span className="text">Right</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="label">/</span><span className="component">Popover</span><span className="label">&gt;</span>
          </CodeBox>
        </div>

        <div className="example">
          <div className="container">
            <Popover content={content}>
              <Button type="primary">Hover</Button>
            </Popover>
            <span style={{ display: 'inline-block', width: 20 }}></span>
            <Popover content={content} trigger="click">
              <Button type="primary">Click</Button>
            </Popover>
            <span style={{ display: 'inline-block', width: 20 }}></span>
            <Popover content={content} trigger="focus">
              <Button type="primary">Focus</Button>
            </Popover>
          </div>
          <CodeBox
            title="触发方式"
            description="支持 hover, click, focus 三种触发方式。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Popover</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Popover</span><span className="space">&nbsp;&nbsp;</span><span className="property">content</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">content</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">type</span><span className="htmlstr">=</span><span className="string">"primary"</span><span className="label">&gt;</span><span className="text">Hover</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="label">/</span><span className="component">Popover</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Popover</span><span className="space">&nbsp;&nbsp;</span><span className="property">content</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">content</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">trigger</span><span className="htmlstr">=</span><span className="string">"click"</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">type</span><span className="htmlstr">=</span><span className="string">"primary"</span><span className="label">&gt;</span><span className="text">Click</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="label">/</span><span className="component">Popover</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Popover</span><span className="space">&nbsp;&nbsp;</span><span className="property">content</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">content</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">trigger</span><span className="htmlstr">=</span><span className="string">"focus"</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">type</span><span className="htmlstr">=</span><span className="string">"primary"</span><span className="label">&gt;</span><span className="text">Focus</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="label">/</span><span className="component">Popover</span><span className="label">&gt;</span>
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
              <td className="des">手动控制浮层显隐</td>
              <td className="type">boolean</td>
              <td>——</td>
            </tr>

            <tr>
              <td>defaultVisible</td>
              <td className="des">浮层默认贤隐</td>
              <td className="type">boolean</td>
              <td>false</td>
            </tr>

            <tr>
              <td>content</td>
              <td className="des">浮层内容</td>
              <td className="type">	string | React.ReactNode</td>
              <td>——</td>
            </tr>

            <tr>
              <td>trigger</td>
              <td className="des">触发方式</td>
              <td className="type">'hover' | 'click' | 'focus'</td>
              <td>'hover'</td>
            </tr>

            <tr>
              <td>position</td>
              <td className="des">浮层的相对位置</td>
              <td className="type">'top' | 'left' | 'right' | 'bottom'</td>
              <td>'top'</td>
            </tr>

            <tr>
              <td>clickPopClose</td>
              <td className="des">触发方式为 click 时点击浮层是否关闭</td>
              <td className="type">boolean</td>
              <td>false</td>
            </tr>

            <tr>
              <td>onVisibleChange</td>
              <td className="des">浮层显隐状态改变时的回调</td>
              <td className="type">{'(visible: boolean) => any'}</td>
              <td>——</td>
            </tr>

            <tr>
              <td>className</td>
              <td className="des">自定义 content 容器类名</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>style</td>
              <td className="des">自定义 content 容器样式</td>
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
