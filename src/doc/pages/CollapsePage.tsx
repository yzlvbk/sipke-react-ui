import * as React from 'react'
import CodeBox from '../components/codebox/CodeBox'
import { Collapse, Panel } from 'spike-react'
const componentName = 'CollapsePage'

class ButtonPage extends React.Component {
  public static displayName = componentName

  public render() {

    return (
      <div>
        <section>
          <h1>Collapse 折叠面板</h1>
          <p className="text">可以折叠/展开的内容区域。</p>
        </section>
        <section>
          <h2>何时使用</h2>
          <p className="text">对复杂区域进行分组和隐藏时。 手风琴是一种特殊的折叠面板，只允许单个面板展开。</p>
        </section>
        <section>
          <h2>代码示例</h2>
        </section>
        <div className="example">
          <div className="container">
            <Collapse>
              <Panel header="Header1" key="1">
                <div style={{ padding: 20 }}>Content of Panel 1</div>
              </Panel>
              <Panel header="Header2" key="2">
                <div style={{ padding: 20 }}>Content of Panel 2</div>
              </Panel>
              <Panel header="Header3" key="3">
                <div style={{ padding: 20 }}>Content of Panel 3</div>
              </Panel>
            </Collapse>
          </div>
          <CodeBox
            title="折叠面板"
            description="可同时展开多个面板。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Collapse</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'components/Collapse'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Panel</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'components/Collapse'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Collapse</span><span className="space">&nbsp;&nbsp;</span><span className="property">onChange</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmlstr">(</span><span className="property">activeKey</span><span className="htmlstr">)</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">=&gt;</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="method">handleChange</span><span className="htmlstr">(</span><span className="property">activeKey</span><span className="htmlstr">)</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Panel</span><span className="space">&nbsp;&nbsp;</span><span className="property">header</span><span className="htmlstr">=</span><span className="string">"Header1"</span><span className="space">&nbsp;&nbsp;</span><span className="property">key</span><span className="htmlstr">=</span><span className="string">"1"</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="htmltag">div</span><span className="label">&gt;</span><span className="htmlstr">Content of Panel 1</span><span className="label">&lt;</span><span className="label">/</span><span className="htmltag">div</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp; <span className="label">&lt;</span><span className="label">/</span><span className="component">Panel</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Panel</span><span className="space">&nbsp;&nbsp;</span><span className="property">header</span><span className="htmlstr">=</span><span className="string">"Header2"</span><span className="space">&nbsp;&nbsp;</span><span className="property">key</span><span className="htmlstr">=</span><span className="string">"2"</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="label">&lt;</span><span className="htmltag">div</span><span className="label">&gt;</span><span className="htmlstr">Content of Panel 2</span><span className="label">&lt;</span><span className="label">/</span><span className="htmltag">div</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp; <span className="label">&lt;</span><span className="label">/</span><span className="component">Panel</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Panel</span><span className="space">&nbsp;&nbsp;</span><span className="property">header</span><span className="htmlstr">=</span><span className="string">"Header3"</span><span className="space">&nbsp;&nbsp;</span><span className="property">key</span><span className="htmlstr">=</span><span className="string">"3"</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="htmltag">div</span><span className="label">&gt;</span><span className="htmlstr">Content of Panel 3</span><span className="label">&lt;</span><span className="label">/</span><span className="htmltag">div</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="label">/</span><span className="component">Panel</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="label">/</span><span className="component">Collapse</span><span className="label">&gt;</span>
          </CodeBox>
        </div>

        <div className="example">
          <div className="container">
            <Collapse>
              <Panel header="Header1" key="1">
                <div style={{ padding: 20 }}>Content of Panel 1</div>
              </Panel>
              <Panel header="Header2" key="2" disabled={true}>
                <div style={{ padding: 20 }}>Content of Panel 2</div>
              </Panel>
              <Panel header="Header3" key="3">
                <div style={{ padding: 20 }}>Content of Panel 3</div>
              </Panel>
            </Collapse>
          </div>
          <CodeBox
            title="禁用"
            description="禁用某个面板。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Collapse</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'components/Collapse'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Panel</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'components/Collapse'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Collapse</span><span className="space">&nbsp;&nbsp;</span><span className="property">onChange</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmlstr">(</span><span className="property">activeKey</span><span className="htmlstr">)</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">=&gt;</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="method">handleChange</span><span className="htmlstr">(</span><span className="property">activeKey</span><span className="htmlstr">)</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Panel</span><span className="space">&nbsp;&nbsp;</span><span className="property">header</span><span className="htmlstr">=</span><span className="string">"Header1"</span><span className="space">&nbsp;&nbsp;</span><span className="property">key</span><span className="htmlstr">=</span><span className="string">"1"</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="htmltag">div</span><span className="label">&gt;</span><span className="htmlstr">Content of Panel 1</span><span className="label">&lt;</span><span className="label">/</span><span className="htmltag">div</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp; <span className="label">&lt;</span><span className="label">/</span><span className="component">Panel</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Panel</span><span className="space">&nbsp;&nbsp;</span><span className="property">header</span><span className="htmlstr">=</span><span className="string">"Header2"</span><span className="space">&nbsp;&nbsp;</span><span className="property">key</span><span className="htmlstr">=</span><span className="string">"2"</span><span className="space">&nbsp;&nbsp;</span><span className="property">disabled</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">true</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="label">&lt;</span><span className="htmltag">div</span><span className="label">&gt;</span><span className="htmlstr">Content of Panel 2</span><span className="label">&lt;</span><span className="label">/</span><span className="htmltag">div</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp; <span className="label">&lt;</span><span className="label">/</span><span className="component">Panel</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Panel</span><span className="space">&nbsp;&nbsp;</span><span className="property">header</span><span className="htmlstr">=</span><span className="string">"Header3"</span><span className="space">&nbsp;&nbsp;</span><span className="property">key</span><span className="htmlstr">=</span><span className="string">"3"</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="htmltag">div</span><span className="label">&gt;</span><span className="htmlstr">Content of Panel 3</span><span className="label">&lt;</span><span className="label">/</span><span className="htmltag">div</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="label">/</span><span className="component">Panel</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="label">/</span><span className="component">Collapse</span><span className="label">&gt;</span>
          </CodeBox>
        </div>

        <div className="example">
          <div className="container">
            <Collapse accordion={true}>
              <Panel header="Header1" key="1">
                <div style={{ padding: 20 }}>Content of Panel 1</div>
              </Panel>
              <Panel header="Header2" key="2">
                <div style={{ padding: 20 }}>Content of Panel 2</div>
              </Panel>
              <Panel header="Header3" key="3">
                <div style={{ padding: 20 }}>Content of Panel 3</div>
              </Panel>
            </Collapse>
          </div>
          <CodeBox
            title="手风琴"
            description="每次只展开一个面板。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Collapse</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'components/Collapse'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Panel</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'components/Collapse'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Collapse</span><span className="space">&nbsp;&nbsp;</span><span className="property">accordion</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">true</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">onChange</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmlstr">(</span><span className="property">activeKey</span><span className="htmlstr">)</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">=&gt;</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="method">handleChange</span><span className="htmlstr">(</span><span className="property">activeKey</span><span className="htmlstr">)</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Panel</span><span className="space">&nbsp;&nbsp;</span><span className="property">header</span><span className="htmlstr">=</span><span className="string">"Header1"</span><span className="space">&nbsp;&nbsp;</span><span className="property">key</span><span className="htmlstr">=</span><span className="string">"1"</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="htmltag">div</span><span className="label">&gt;</span><span className="htmlstr">Content of Panel 1</span><span className="label">&lt;</span><span className="label">/</span><span className="htmltag">div</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp; <span className="label">&lt;</span><span className="label">/</span><span className="component">Panel</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Panel</span><span className="space">&nbsp;&nbsp;</span><span className="property">header</span><span className="htmlstr">=</span><span className="string">"Header2"</span><span className="space">&nbsp;&nbsp;</span><span className="property">key</span><span className="htmlstr">=</span><span className="string">"2"</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="label">&lt;</span><span className="htmltag">div</span><span className="label">&gt;</span><span className="htmlstr">Content of Panel 2</span><span className="label">&lt;</span><span className="label">/</span><span className="htmltag">div</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp; <span className="label">&lt;</span><span className="label">/</span><span className="component">Panel</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Panel</span><span className="space">&nbsp;&nbsp;</span><span className="property">header</span><span className="htmlstr">=</span><span className="string">"Header3"</span><span className="space">&nbsp;&nbsp;</span><span className="property">key</span><span className="htmlstr">=</span><span className="string">"3"</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="htmltag">div</span><span className="label">&gt;</span><span className="htmlstr">Content of Panel 3</span><span className="label">&lt;</span><span className="label">/</span><span className="htmltag">div</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="label">/</span><span className="component">Panel</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="label">/</span><span className="component">Collapse</span><span className="label">&gt;</span>
          </CodeBox>
        </div>

        <section>
          <h2>API</h2>
        </section>

        <section className="sub">
          <h3>Collapse</h3>
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
              <td>activeKey</td>
              <td className="des">当前展开面板 key 的数组</td>
              <td className="type">string[]</td>
              <td>——</td>
            </tr>

            <tr>
              <td>defaultActiveKey</td>
              <td className="des">默认展开面板 key 的数组</td>
              <td className="type">string[]</td>
              <td>——</td>
            </tr>

            <tr>
              <td>accordion</td>
              <td className="des">手风琴模式</td>
              <td className="type">boolean</td>
              <td>false</td>
            </tr>

            <tr>
              <td>showArrow</td>
              <td className="des">是否展示面板头的箭头图标</td>
              <td className="type">boolean</td>
              <td>true</td>
            </tr>

            <tr>
              <td>onChange</td>
              <td className="des">点击面板头导致展开项改变时的回调</td>
              <td className="type">{'(activeKey: string[], e: React.MouseEvent) => any'}</td>
              <td>——</td>
            </tr>

            <tr>
              <td>className</td>
              <td className="des">自定义 Collapse 类名</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>style</td>
              <td className="des">自定义 Collapse 样式</td>
              <td className="type">React.CSSProperties</td>
              <td>——</td>
            </tr>

          </tbody>
        </table>

        <section className="sub">
          <h3>Panel</h3>
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
              <td>header</td>
              <td className="des">	面板头内容</td>
              <td className="type">string | React.ReactNode</td>
              <td>——</td>
            </tr>

            <tr>
              <td>disabled</td>
              <td className="des">禁用状态</td>
              <td className="type">	boolean</td>
              <td>false</td>
            </tr>

            <tr>
              <td>className</td>
              <td className="des">自定义面板内容区容器类名</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>style</td>
              <td className="des">自定义面板内容区样式</td>
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
