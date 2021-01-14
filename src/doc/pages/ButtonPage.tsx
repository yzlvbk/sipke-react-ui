import * as React from 'react'
import CodeBox from '../components/codebox/CodeBox'
import { Button, ButtonGroup } from 'spike-react'
const componentName = 'ButtonPage'

class ButtonPage extends React.Component {
  public static displayName = componentName

  public state = { loading: false }

  public handleClick = () => {
    this.setState({ loading: !this.state.loading })
  }

  public render() {
    return (
      <div>
        <section>
          <h1>Button 按钮</h1>
          <p className="text">点击以开始即时操作。</p>
        </section>
        <section>
          <h2>何时使用</h2>
          <p className="text">响应用户点击行为，触发相应业务逻辑。</p>
        </section>
        <section>
          <h2>代码示例</h2>
        </section>
        <div className="example">
          <div className="container">
            <Button style={{ marginRight: 20 }}>Default</Button>
            <Button style={{ marginRight: 20 }} type="primary">Primary</Button>
            <Button style={{ marginRight: 20 }} type="dashed">Dashed</Button>
            <Button style={{ marginRight: 20 }} type="danger">Danger</Button>
          </div>
          <CodeBox
            title="按钮类型"
            description="按钮有四种类型：默认按钮、主要按钮、虚线按钮和危险按钮。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Button</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><span className="label">&lt;</span><span className="component">Button</span><span className="label">&gt;</span><span className="text">Default</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">type</span><span className="htmlstr">=</span><span className="string">"primary"</span><span className="label">&gt;</span><span className="text">Primary</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">type</span><span className="htmlstr">=</span><span className="string">"dashed"</span><span className="label">&gt;</span><span className="text">Dashed</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">type</span><span className="htmlstr">=</span><span className="string">"danger"</span><span className="label">&gt;</span><span className="text">Danger</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br />
          </CodeBox>
        </div>
        <div className="example">
          <div className="container" style={{ display: 'flex' }}>
            <Button style={{ marginRight: 20 }} disabled={true} >Disabled</Button>
            <Button style={{ marginRight: 20 }} loading={true} type="primary">Loading</Button>
            <Button style={{ marginRight: 20 }} icon="setting" loading={this.state.loading} type="primary" onClick={this.handleClick}>Click me</Button>
          </div>
          <CodeBox
            title="Disabled 和 Loading 状态"
            description="设置按钮的禁用和加载中状态。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Button</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">disabled</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">true</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Disabled</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">loading</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">true</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">type</span><span className="htmlstr">=</span><span className="string">"primary"</span><span className="label">&gt;</span><span className="text">Loading</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">icon</span><span className="htmlstr">=</span><span className="string">"setting"</span><span className="space">&nbsp;&nbsp;</span><span className="property">loading</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="property">state</span><span className="htmlstr">.</span><span className="property">loading</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">type</span><span className="htmlstr">=</span><span className="string">"primary"</span><span className="space">&nbsp;&nbsp;</span><span className="property">onClick</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="property">handleClick</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Click me</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br />
          </CodeBox>
        </div>
        <div className="example">
          <div className="container" style={{ display: 'flex' }}>
            <Button style={{ marginRight: 20 }} icon="setting">Icon</Button>
            <Button style={{ marginRight: 20 }} icon="setting" position="right">Icon</Button>
          </div>
          <CodeBox
            title="Icon 图标"
            description="设置内嵌 Icon 图标和位置。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Button</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">icon</span><span className="htmlstr">=</span><span className="string">"setting"</span><span className="label">&gt;</span><span className="text">Icon</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">icon</span><span className="htmlstr">=</span><span className="string">"setting"</span><span className="space">&nbsp;&nbsp;</span><span className="property">position</span><span className="htmlstr">=</span><span className="string">"right"</span><span className="label">&gt;</span><span className="text">Icon</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br />
          </CodeBox>
        </div>
        <div className="example">
          <div className="container" style={{ backgroundColor: 'rgb(190, 200, 200)' }}>
            <Button style={{ marginRight: 20 }} ghost={true}>Default</Button>
            <Button style={{ marginRight: 20 }} ghost={true} type="primary">Primary</Button>
            <Button style={{ marginRight: 20 }} ghost={true} type="dashed">Dashed</Button>
            <Button style={{ marginRight: 20 }} ghost={true} type="danger">Danger</Button>
          </div>
          <CodeBox
            title="幽灵按钮"
            description="幽灵按钮常用在有色背景上。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Button</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">ghost</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">true</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Default</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">ghost</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">true</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">type</span><span className="htmlstr">=</span><span className="string">"primary"</span><span className="label">&gt;</span><span className="text">Primary</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">ghost</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">true</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">type</span><span className="htmlstr">=</span><span className="string">"dashed"</span><span className="label">&gt;</span><span className="text">Dashed</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">ghost</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">true</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">type</span><span className="htmlstr">=</span><span className="string">"danger"</span><span className="label">&gt;</span><span className="text">Danger</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br />
          </CodeBox>
        </div>

        <div className="example">
          <div className="container" >
            <Button style={{ marginRight: 20 }} size='large' type="primary">Large</Button>
            <Button style={{ marginRight: 20 }} size='medium' type="primary">Medium</Button>
            <Button style={{ marginRight: 20 }} size='small' type="primary">Small</Button>

          </div>
          <CodeBox
            title="按钮尺寸"
            description="按钮有大、中、小三种尺寸。点击以查看对应尺寸的效果。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Button</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">size</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="property">state</span><span className="htmlstr">.</span><span className="property">size</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">type</span><span className="htmlstr">=</span><span className="string">"primary"</span><span className="label">&gt;</span><span className="text">Small</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">size</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="property">state</span><span className="htmlstr">.</span><span className="property">size</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">type</span><span className="htmlstr">=</span><span className="string">"primary"</span><span className="label">&gt;</span><span className="text">Medium</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Button</span><span className="space">&nbsp;&nbsp;</span><span className="property">size</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="property">state</span><span className="htmlstr">.</span><span className="property">size</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">type</span><span className="htmlstr">=</span><span className="string">"primary"</span><span className="label">&gt;</span><span className="text">Large</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Button</span><span className="label">&gt;</span><br />
          </CodeBox>
        </div>

        <div className="example">
          <div className="container" >
            <ButtonGroup>
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
          </div>
          <CodeBox
            title="按钮组合"
            description="可以容纳多个按钮的容器。"
          >
            <span className="keyword">import</span>
            <span className="space">&nbsp;&nbsp;</span>
            <span className="htmlstr">{'{'}</span>
            <span className="space">&nbsp;&nbsp;</span>
            <span className="property">Button</span>
            <span className="space">&nbsp;&nbsp;</span>
            <span className="htmlstr">{'}'}</span>
            <span className="space">&nbsp;&nbsp;</span>
            <span className="keyword">from</span>
            <span className="space">&nbsp;&nbsp;</span>
            <span className="string">'spike-react'</span>
            <br />
            <span className="keyword">import</span>
            <span className="space">&nbsp;&nbsp;</span>
            <span className="htmlstr">{'{'}</span>
            <span className="space">&nbsp;&nbsp;</span>
            <span className="property">ButtonGroup</span>
            <span className="space">&nbsp;&nbsp;</span>
            <span className="htmlstr">{'}'}</span>
            <span className="space">&nbsp;&nbsp;</span>
            <span className="keyword">from</span>
            <span className="space">&nbsp;&nbsp;</span>
            <span className="string">'spike-react'</span>
            <br />
            <span className="keyword">import</span>
            <span className="space">&nbsp;&nbsp;</span>
            <span className="string">'spike-react/lib/spike-react.css'</span>
            <br />
            <br />
            <span className="label">&lt;</span>
            <span className="component">ButtonGroup</span>
            <span className="label">&gt;</span>
            <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;
<span className="label">&lt;</span>
            <span className="component">Button</span>
            <span className="label">&gt;</span>
            <span className="text">Left</span>
            <span className="label">&lt;</span>
            <span className="label">/</span>
            <span className="component">Button</span>
            <span className="label">&gt;</span>
            <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
<span className="label">&lt;</span>
            <span className="component">Button</span>
            <span className="label">&gt;</span>
            <span className="text">Middle</span>
            <span className="label">&lt;</span>
            <span className="label">/</span>
            <span className="component">Button</span>
            <span className="label">&gt;</span>
            <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;
<span className="label">&lt;</span>
            <span className="component">Button</span>
            <span className="label">&gt;</span>
            <span className="text">Right</span>
            <span className="label">&lt;</span>
            <span className="label">/</span>
            <span className="component">Button</span>
            <span className="label">&gt;</span>
            <br />
            <span className="label">&lt;</span>
            <span className="label">/</span>
            <span className="component">ButtonGroup</span>
            <span className="label">&gt;</span>
            <br />
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
              <td>icon</td>
              <td className="des">内嵌 Icon 图标的 name 属性</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>
            <tr>
              <td>position</td>
              <td className="des">内嵌 Icon 图标的位置</td>
              <td className="type">'left' | 'right'</td>
              <td>'left'</td>
            </tr>

            <tr>
              <td>type</td>
              <td className="des">不同样式风格的按钮</td>
              <td className="type">'default' | 'dashed' | 'primary' | 'danger'</td>
              <td>'default'</td>
            </tr>

            <tr>
              <td>size</td>
              <td className="des">按钮的尺寸</td>
              <td className="type">'small' | 'medium' | 'large'</td>
              <td>'medium'</td>
            </tr>

            <tr>
              <td>loading</td>
              <td className="des">加载中状态</td>
              <td className="type">boolean</td>
              <td>false</td>
            </tr>

            <tr>
              <td>disabled</td>
              <td className="des">禁用状态</td>
              <td className="type">boolean</td>
              <td>false</td>
            </tr>

            <tr>
              <td>ghost</td>
              <td className="des">幽灵按钮</td>
              <td className="type">boolean</td>
              <td>false</td>
            </tr>

            <tr>
              <td>htmlType</td>
              <td className="des">按钮的原生 type 属性</td>
              <td className="type">'button' | 'submit' | 'reset'</td>
              <td>'button'</td>
            </tr>

            <tr>
              <td>onClick</td>
              <td className="des">点击按钮时的回调</td>
              <td className="type">	React.MouseEventHandler</td>
              <td>——</td>
            </tr>

            <tr>
              <td>className</td>
              <td className="des">自定义 Button 类名</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>style</td>
              <td className="des">自定义 Button 样式</td>
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
