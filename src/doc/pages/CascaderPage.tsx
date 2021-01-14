import * as React from 'react'
import CodeBox from '../components/codebox/CodeBox'
import { Cascader } from 'spike-react'
const componentName = 'CascaderPage'

class ButtonPage extends React.Component {
  public static displayName = componentName

  state = {
    options: [
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [
              {
                value: 'xihu',
                label: 'West Lake'
              }
            ]
          }
        ]
      },
      {
        value: 'jiangshu',
        label: 'Jiangshu',
        children: [
          {
            value: 'nanjing',
            label: 'Nanjing',
            disabled: true,
            children: [
              {
                value: 'jiangning',
                label: 'Jiangning'
              }
            ]
          }
        ]
      },
      {
        value: 'shanghai',
        label: 'Shanghai',
        children: [
          {
            value: 'pudong',
            label: 'Pudong',
            children: [
              {
                value: 'lujiazhui',
                label: 'Lujiazhui'
              }
            ]
          }
        ]
      }
    ]
  }

  public handleChange() {
    console.log('handleChange')

  }

  public handleSelect() {
    console.log('handleSelect')
  }

  public render() {

    return (
      <div>
        <section>
          <h1>Cascader 级联选择</h1>
          <p className="text">级联选择器。</p>
        </section>
        <section>
          <h2>何时使用</h2>
          <p className="text">需要从一组层级信息中进行选择时，例如省市区，公司层级，事物分类等。</p>
        </section>
        <section>
          <h2>代码示例</h2>
        </section>
        <div className="example">
          <div className="container" >
            <div style={{ width: 250 }}>
              <Cascader options={this.state.options} placeholder="cascader" onChange={this.handleChange} onSelect={this.handleSelect} />
            </div>
          </div>
          <CodeBox
            title="基本用法"
            description="省市区级联，在 options 数组的某一项设置 disabled: true 可以禁用该项。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Cascader</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="property">options</span><span className="htmlstr"> = [</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">{'{'}</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">value: </span><span className="string">'zhejiang'</span><span className="htmlstr">,</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">label: </span><span className="string">'Zhejiang'</span><span className="htmlstr">,</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">children: </span><span className="htmlstr">[</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">{'{'}</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">value: </span><span className="string">'hangzhou'</span><span className="htmlstr">,</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">label: </span><span className="string">'Hangzhou'</span><span className="htmlstr">,</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">children: </span><span className="htmlstr">[</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">{'{'}</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">value: </span><span className="string">'xihu'</span><span className="htmlstr">,</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">label: </span><span className="string">'West Lake'</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">{'}'}</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">]</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">{'}'}</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">]</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">{'{'},</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">{'{'}</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">value: </span><span className="string">'jiangshu'</span><span className="htmlstr">,</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">label: </span><span className="string">'Jiangshu'</span><span className="htmlstr">,</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">children: </span><span className="htmlstr">[</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">{'{'}</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">value: </span><span className="string">'nanjing'</span><span className="htmlstr">,</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">label: </span><span className="string">'Nanjing'</span><span className="htmlstr">,</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">disabled: </span><span className="htmltag">true</span><span className="htmlstr">,</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">children: </span><span className="htmlstr">[</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">{'{'}</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">value: </span><span className="string">'jiangning'</span><span className="htmlstr">,</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">label: </span><span className="string">'Jiangning'</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">{'}'}</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">]</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">{'}'}</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">]</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">{'}'},</span><br /> &nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">{'{'}</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">value: </span><span className="string">'shanghai'</span><span className="htmlstr">,</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">label: </span><span className="string">'Shanghai'</span><span className="htmlstr">,</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">children: </span><span className="htmlstr">[</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">{'{'}</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">value: </span><span className="string">'pudong'</span><span className="htmlstr">,</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">label: </span><span className="string">'Pudong'</span><span className="htmlstr">,</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">children: </span><span className="htmlstr">[</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">{'{'}</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">value: </span><span className="string">'lujiazhui'</span><span className="htmlstr">,</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">label: </span><span className="string">'Lujiazhui'</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">{'}'}</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">]</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">{'}'}</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">]</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="htmlstr">{'}'}</span><br /><span className="htmlstr">]</span><br /><br /><span className="label">&lt;</span><span className="component">Cascader</span><span className="space">&nbsp;&nbsp;</span><span className="property">options</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="property">options</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">placeholder</span><span className="htmlstr">=</span><span className="string">"cascader"</span><span className="space">&nbsp;&nbsp;</span><span className="property">onChange</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="property">handleChange</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">onSelect</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="property">handleSelect</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="label">/</span><span className="label">&gt;</span>
          </CodeBox>
        </div>

        <div className="example">
          <div className="container" >
            <div style={{ width: 250 }}>
              <Cascader options={this.state.options} placeholder="cascader" changeOnSelect={true} onChange={this.handleChange} onSelect={this.handleSelect} />
            </div>
          </div>
          <CodeBox
            title="选择即展示"
            description="这种模式下父级选项的改变将立即展示。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Cascader</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Cascader</span><span className="space">&nbsp;&nbsp;</span><span className="property">options</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="property">options</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">placeholder</span><span className="htmlstr">=</span><span className="string">"cascader"</span><span className="space">&nbsp;&nbsp;</span><span className="property">changeOnSelect</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">true</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">onChange</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="property">handleChange</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">onSelect</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="property">handleSelect</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="label">/</span><span className="label">&gt;</span>
          </CodeBox>
        </div>

        <section>
          <h2>API</h2>
        </section>

        <section className="sub">
          <h3>Cascader</h3>
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
              <td className="des">选项数组，选项具体属性设置见 Option</td>
              <td className="type">	Option[]</td>
              <td>——</td>
            </tr>

            <tr>
              <td>placeholder</td>
              <td className="des">input 原生属性</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>changeOnSelect</td>
              <td className="des">每级菜单选项值发生变化是否展示</td>
              <td className="type">boolean</td>
              <td>false</td>
            </tr>

            <tr>
              <td>onChange</td>
              <td className="des">选择完成时的回调</td>
              <td className="type">{'(valueArr: string[], selectedOptions: option[]) => any'}</td>
              <td>——</td>
            </tr>

            <tr>
              <td>onSelect</td>
              <td className="des">选择完成时的回调</td>
              <td className="type">{'(valueArr: string[], selectedOptions: option[]) => any'}</td>
              <td>——</td>
            </tr>

            <tr>
              <td>itemClassName</td>
              <td className="des">自定义子菜单项类名</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>itemStyle</td>
              <td className="des">自定义子菜单项样式</td>
              <td className="type">	React.CSSProperties</td>
              <td>——</td>
            </tr>

            <tr>
              <td>className</td>
              <td className="des">自定义 input 框类名</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>style</td>
              <td className="des">自定义 input 框样式</td>
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
