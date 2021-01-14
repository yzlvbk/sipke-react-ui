import * as React from 'react'
import CodeBox from '../components/codebox/CodeBox'
import { CheckBox, CheckBoxGroup } from 'spike-react'
const componentName = 'CheckBoxPage'

class ButtonPage extends React.Component {
  public static displayName = componentName

  public options = [
    { value: 'apple', label: 'apple' },
    { value: 'pear', label: 'pear' },
    { value: 'orange', label: 'orange' }
  ]

  public render() {

    return (
      <div>
        <section>
          <h1>CheckBox 选择框</h1>
          <p className="text">选择框。</p>
        </section>
        <section>
          <h2>何时使用</h2>
          <p className="text">在一组可选项中进行单项/多项选择时。</p>
        </section>
        <section>
          <h2>代码示例</h2>
        </section>
        <div className="example">
          <div className="container">
            <CheckBox>CheckBox</CheckBox>
          </div>
          <CodeBox
            title="基本用法"
            description="最基本的用法。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">CheckBox</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">CheckBox</span><span className="label">&gt;</span><span className="text">CheckBox</span><span className="label">&lt;</span><span className="label">/</span><span className="component">CheckBox</span><span className="label">&gt;</span>
          </CodeBox>
        </div>

        <div className="example">
          <div className="container">
            <CheckBox disabled={true}>Disabled</CheckBox>
            <CheckBox defaultChecked={true} disabled={true}>Disabled</CheckBox>
            <CheckBox indeterminate={true}>Indeterminate</CheckBox>
          </div>
          <CodeBox
            title="Disabled 和 Indeterminate 状态"
            description="禁用和半选（只负责样式控制）状态。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">CheckBox</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">CheckBox</span><span className="space">&nbsp;&nbsp;</span><span className="property">disabled</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">true</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Disabled</span><span className="label">&lt;</span><span className="label">/</span><span className="component">CheckBox</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">CheckBox</span><span className="space">&nbsp;&nbsp;</span><span className="property">defaultChecked</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">true</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">disabled</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">true</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Disabled</span><span className="label">&lt;</span><span className="label">/</span><span className="component">CheckBox</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">CheckBox</span><span className="space">&nbsp;&nbsp;</span><span className="property">indeterminate</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">true</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Indeterminate</span><span className="label">&lt;</span><span className="label">/</span><span className="component">CheckBox</span><span className="label">&gt;</span>
          </CodeBox>
        </div>

        <div className="example">
          <div className="container">
            <CheckBoxGroup options={this.options} title="SelectAll" style={{ 'flexDirection': 'column' }} />
          </div>
          <CodeBox
            title="CheckBoxGroup"
            description="方便的从数组生成 Checkbox 组，并提供全选功能。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">CheckBoxGroup</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">CheckBoxGroup</span><span className="space">&nbsp;&nbsp;</span><span className="property">options</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="property">options</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">title</span><span className="htmlstr">=</span><span className="string">"SelectAll"</span><span className="space">&nbsp;&nbsp;</span><span className="label">/</span><span className="label">&gt;</span>
          </CodeBox>
        </div>

        <section>
          <h2>API</h2>
        </section>

        <section className="sub">
          <h3>CheckBox</h3>
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
              <td className="des">选中状态</td>
              <td className="type">boolean</td>
              <td>false</td>
            </tr>

            <tr>
              <td>defaultChecked</td>
              <td className="des">默认选中状态</td>
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
              <td>indeterminate</td>
              <td className="des">半选状态</td>
              <td className="type">boolean</td>
              <td>false</td>
            </tr>

            <tr>
              <td>onChange</td>
              <td className="des">选中状态改变时的回调</td>
              <td className="type">{'(checked: boolean, e: React.MouseEvent) => any'}</td>
              <td>——</td>
            </tr>

          </tbody>
        </table>

        <section className="sub">
          <h3>CheckBoxGroup</h3>
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
              <td>options</td>
              <td className="des">CheckBox 数据源</td>
              <td className="type">Option[]</td>
              <td>——</td>
            </tr>

            <tr>
              <td>defaultValue</td>
              <td className="des">默认选中项 value 数组</td>
              <td className="type">string[]</td>
              <td>——</td>
            </tr>

            <tr>
              <td>value</td>
              <td className="des">选中项 value 数组</td>
              <td className="type">string[]</td>
              <td>——</td>
            </tr>

            <tr>
              <td>title</td>
              <td className="des">全选 CheckBox 的渲染内容</td>
              <td className="type">	string | React.ReactNode</td>
              <td>——</td>
            </tr>

            <tr>
              <td>onChange</td>
              <td className="des">选中状态改变时的回调</td>
              <td className="type">{'(checked: boolean, e: React.MouseEvent) => any'}</td>
              <td>——</td>
            </tr>

            <tr>
              <td>className</td>
              <td className="des">自定义 CheckBoxGroup 容器类名</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>style</td>
              <td className="des">自定义 CheckBoxGroup 容器样式</td>
              <td className="type">React.CSSProperties</td>
              <td>——</td>
            </tr>

          </tbody>
        </table>

        <section className="sub">
          <h3>Option</h3>
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
              <td>value</td>
              <td className="des">CheckBox 唯一标志</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>label</td>
              <td className="des">CheckBox 的渲染内容</td>
              <td className="type">	string | React.ReactNode</td>
              <td>——</td>
            </tr>

            <tr>
              <td>disabled</td>
              <td className="des">对应 CheckBox 的 disabled 属性，可选</td>
              <td className="type">boolean</td>
              <td>——</td>
            </tr>

          </tbody>
        </table>

      </div>
    )
  }
}

export default ButtonPage
