import * as React from 'react'
import CodeBox from '../components/codebox/CodeBox'
import { Switch } from 'spike-react'
const componentName = 'SwitchPage'

class ButtonPage extends React.Component {
  public static displayName = componentName

  public render() {

    return (
      <div>
        <section>
          <h1>Switch 开关</h1>
          <p className="text">开关选择器。</p>
        </section>
        <section>
          <h2>何时使用</h2>
          <p className="text">需要在两种状态之间切换时。</p>
        </section>
        <section>
          <h2>代码示例</h2>
        </section>
        <div className="example">
          <div className="container">
            <Switch />
          </div>
          <CodeBox
            title="基本用法"
            description="最基本的用法。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Switch</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Switch</span><span className="space">&nbsp;&nbsp;</span><span className="property">onChange</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmlstr">(</span><span className="property">checked</span><span className="htmlstr">)</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">=&gt;</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="method">handleOnChange</span><span className="htmlstr">(</span><span className="property">checked</span><span className="htmlstr">)</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="label">/</span><span className="label">&gt;</span>
          </CodeBox>
        </div>

        <div className="example">
          <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
            <Switch style={{ marginRight: 20 }} />
            <Switch size='small' />
          </div>
          <CodeBox
            title="两种大小"
            description="不同尺寸大小。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Switch</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Switch</span><span className="space">&nbsp;&nbsp;</span><span className="property">onChange</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmlstr">(</span><span className="property">checked</span><span className="htmlstr">)</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">=&gt;</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="method">handleOnChange</span><span className="htmlstr">(</span><span className="property">checked</span><span className="htmlstr">)</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="label">/</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Switch</span><span className="space">&nbsp;&nbsp;</span><span className="property">onChange</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmlstr">(</span><span className="property">checked</span><span className="htmlstr">)</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">=&gt;</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="method">handleOnChange</span><span className="htmlstr">(</span><span className="property">checked</span><span className="htmlstr">)</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">size</span><span className="htmlstr">=</span><span className="string">"small"</span><span className="space">&nbsp;&nbsp;</span><span className="label">/</span><span className="label">&gt;</span>
          </CodeBox>
        </div>

        <div className="example">
          <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
            <Switch style={{ marginRight: 20 }} disabled={true} />
            <Switch disabled={true} checked={true} />
          </div>
          <CodeBox
            title="禁用状态"
            description="设置 disabled 以禁用。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Switch</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Switch</span><span className="space">&nbsp;&nbsp;</span><span className="property">disabled</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">true</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="label">/</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Switch</span><span className="space">&nbsp;&nbsp;</span><span className="property">disabled</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">true</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="label">/</span><span className="label">&gt;</span>
          </CodeBox>
        </div>

        <div className="example">
          <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
            <Switch style={{ marginRight: 20 }} />
            <Switch checked={true} />
          </div>
          <CodeBox
            title="默认选中"
            description="设置默认选中状态。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Switch</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Switch</span><span className="space">&nbsp;&nbsp;</span><span className="property">onChange</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmlstr">(</span><span className="property">checked</span><span className="htmlstr">)</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">=&gt;</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="method">handleOnChange</span><span className="htmlstr">(</span><span className="property">checked</span><span className="htmlstr">)</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="label">/</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Switch</span><span className="space">&nbsp;&nbsp;</span><span className="property">onChange</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmlstr">(</span><span className="property">checked</span><span className="htmlstr">)</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">=&gt;</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="method">handleOnChange</span><span className="htmlstr">(</span><span className="property">checked</span><span className="htmlstr">)</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">defaultChecked</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">true</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="label">/</span><span className="label">&gt;</span>
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
              <td>checked</td>
              <td className="des">当前选中状态</td>
              <td className="type">boolean</td>
              <td>——</td>
            </tr>

            <tr>
              <td>defaultChecked</td>
              <td className="des">默认选中状态</td>
              <td className="type">boolean</td>
              <td>false</td>
            </tr>

            <tr>
              <td>size</td>
              <td className="des">尺寸大小</td>
              <td className="type">'small' | 'default'</td>
              <td>'default'</td>
            </tr>

            <tr>
              <td>disabled</td>
              <td className="des">禁用状态</td>
              <td className="type">boolean</td>
              <td>false</td>
            </tr>

            <tr>
              <td>onChange</td>
              <td className="des">选中状态改变时的回调</td>
              <td className="type">{'(checked: boolean, e: React.MouseEvent) => any'}</td>
              <td>——</td>
            </tr>

            <tr>
              <td>className</td>
              <td className="des">自定义外层容器类名</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>style</td>
              <td className="des">自定义外层容器样式</td>
              <td className="type">	React.CSSProperties</td>
              <td>——</td>
            </tr>

          </tbody>
        </table>

      </div>
    )
  }
}

export default ButtonPage
