import * as React from 'react'
import CodeBox from '../components/codebox/CodeBox'
import { DatePicker } from 'spike-react'
const componentName = 'DatePickerPage'

class ButtonPage extends React.Component {
  public static displayName = componentName

  public render() {

    return (
      <div>
        <section>
          <h1>DatePicker 日期选择</h1>
          <p className="text">选择日期的控件。</p>
        </section>
        <section>
          <h2>何时使用</h2>
          <p className="text">需要用户输入一个日期时。</p>
        </section>
        <section>
          <h2>代码示例</h2>
        </section>
        <div className="example">
          <div className="container">
            <DatePicker placeholder="datepicker" />
          </div>
          <CodeBox
            title="基本用法"
            description="最基本的用法，在浮层中选择日期。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">DatePicker</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">DatePicker</span><span className="space">&nbsp;&nbsp;</span><span className="property">placeholder</span><span className="htmlstr">=</span><span className="string">"datepicker"</span><span className="space">&nbsp;&nbsp;</span><span className="label">/</span><span className="label">&gt;</span>
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
              <td>value</td>
              <td className="des">选前选中日期</td>
              <td className="type">string，可被 Date.parse() 解析</td>
              <td>——</td>
            </tr>

            <tr>
              <td>defaultValue</td>
              <td className="des">默认选中日期</td>
              <td className="type">string，可被 Date.parse() 解析</td>
              <td>——</td>
            </tr>

            <tr>
              <td>defaultPickerValue</td>
              <td className="des">calendar 面板默认展示日期</td>
              <td className="type">string，可被 Date.parse() 解析</td>
              <td>today</td>
            </tr>

            <tr>
              <td>placeholder</td>
              <td className="des">输入框提示文字</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>footer</td>
              <td className="des">日期选择面板的自定义页脚</td>
              <td className="type">string | React.ReactNode</td>
              <td>——</td>
            </tr>

            <tr>
              <td>onChange</td>
              <td className="des">选中日期改变时的回调</td>
              <td className="type">{'(value: string, valueObject: { year: number, month: number, date: number } | null) => any'}</td>
              <td>——</td>
            </tr>

            <tr>
              <td>zIndex</td>
              <td className="des">calendar 面板的 z-index 值</td>
              <td className="type">number</td>
              <td>80</td>
            </tr>

            <tr>
              <td>className</td>
              <td className="des">自定义输入框类名</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>style</td>
              <td className="des">自定义输入框样式</td>
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
