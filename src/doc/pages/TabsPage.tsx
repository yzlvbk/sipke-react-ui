import * as React from 'react'
import CodeBox from '../components/codebox/CodeBox'
import { Tabs, TabPane } from 'spike-react'
const componentName = 'AffixPage'

class ButtonPage extends React.Component {
  public static displayName = componentName

  public render() {

    return (
      <div>
        <section>
          <h1>Tabs 标签页</h1>
          <p className="text">选项卡切换组件。</p>
        </section>
        <section>
          <h2>何时使用</h2>
          <p className="text">平级区域大块内容的的收纳和展现。</p>
        </section>
        <section>
          <h2>代码示例</h2>
        </section>
        <div className="example">
          <div className="container">
            <Tabs>
              <TabPane title="Tab1" key="a">
                <div>Content of Tab Pane 12</div>
              </TabPane>
              <TabPane title="Tab2" key="b">
                <div>Content of Tab Pane 2</div>
              </TabPane>
              <TabPane title="Tab3" key="c">
                <div>Content of Tab Pane 3</div>
              </TabPane>
            </Tabs>
          </div>
          <CodeBox
            title="基本用法"
            description="最基本的用法，默认选中第一项。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Tabs</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">TabPane</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Tabs</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">TabPane</span><span className="space">&nbsp;&nbsp;</span><span className="property">title</span><span className="htmlstr">=</span><span className="string">"Tab1"</span><span className="space">&nbsp;&nbsp;</span><span className="property">key</span><span className="htmlstr">=</span><span className="string">"1"</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="htmltag">div</span><span className="label">&gt;</span><span className="htmlstr">Content of Tab Pane 1</span><span className="label">&lt;</span><span className="label">/</span><span className="htmltag">div</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="label">/</span><span className="component">TabPane</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">TabPane</span><span className="space">&nbsp;&nbsp;</span><span className="property">title</span><span className="htmlstr">=</span><span className="string">"Tab2"</span><span className="space">&nbsp;&nbsp;</span><span className="property">key</span><span className="htmlstr">=</span><span className="string">"2"</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="htmltag">div</span><span className="label">&gt;</span><span className="htmlstr">Content of Tab Pane 2</span><span className="label">&lt;</span><span className="label">/</span><span className="htmltag">div</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="label">/</span><span className="component">TabPane</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">TabPane</span><span className="space">&nbsp;&nbsp;</span><span className="property">title</span><span className="htmlstr">=</span><span className="string">"Tab3"</span><span className="space">&nbsp;&nbsp;</span><span className="property">key</span><span className="htmlstr">=</span><span className="string">"3"</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="htmltag">div</span><span className="label">&gt;</span><span className="htmlstr">Content of Tab Pane 3</span><span className="label">&lt;</span><span className="label">/</span><span className="htmltag">div</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="label">/</span><span className="component">TabPane</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="label">/</span><span className="component">Tabs</span><span className="label">&gt;</span>
          </CodeBox>
        </div>

        <div className="example">
          <div className="container">
            <Tabs activekey='c'>
              <TabPane title="Tab1" key="a">
                <div>Content of Tab Pane 1</div>
              </TabPane>
              <TabPane title="Tab2" key="b" disabled={true}>
                <div>Content of Tab Pane 2</div>
              </TabPane>
              <TabPane title="Tab3" key="c">
                <div>Content of Tab Pane 3</div>
              </TabPane>
            </Tabs>
          </div>
          <CodeBox
            title="禁用"
            description="禁用某一项。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Tabs</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">TabPane</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Tabs</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">TabPane</span><span className="space">&nbsp;&nbsp;</span><span className="property">title</span><span className="htmlstr">=</span><span className="string">"Tab1"</span><span className="space">&nbsp;&nbsp;</span><span className="property">key</span><span className="htmlstr">=</span><span className="string">"1"</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="htmltag">div</span><span className="label">&gt;</span><span className="htmlstr">Content of Tab Pane 1</span><span className="label">&lt;</span><span className="label">/</span><span className="htmltag">div</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="label">/</span><span className="component">TabPane</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">TabPane</span><span className="space">&nbsp;&nbsp;</span><span className="property">title</span><span className="htmlstr">=</span><span className="string">"Tab2"</span><span className="space">&nbsp;&nbsp;</span><span className="property">key</span><span className="htmlstr">=</span><span className="string">"2"</span><span className="space">&nbsp;&nbsp;</span><span className="property">disabled</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">true</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="htmltag">div</span><span className="label">&gt;</span><span className="htmlstr">Content of Tab Pane 2</span><span className="label">&lt;</span><span className="label">/</span><span className="htmltag">div</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="label">/</span><span className="component">TabPane</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">TabPane</span><span className="space">&nbsp;&nbsp;</span><span className="property">title</span><span className="htmlstr">=</span><span className="string">"Tab3"</span><span className="space">&nbsp;&nbsp;</span><span className="property">key</span><span className="htmlstr">=</span><span className="string">"3"</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="htmltag">div</span><span className="label">&gt;</span><span className="htmlstr">Content of Tab Pane 3</span><span className="label">&lt;</span><span className="label">/</span><span className="htmltag">div</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="label">/</span><span className="component">TabPane</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="label">/</span><span className="component">Tabs</span><span className="label">&gt;</span>
          </CodeBox>
        </div>

        <div className="example">
          <div className="container">
            <Tabs vertical={true}>
              <TabPane title="Tab1" key="a">
                <div>Content of Tab Pane 1</div>
              </TabPane>
              <TabPane title="Tab2" key="b" disabled={true}>
                <div>Content of Tab Pane 2</div>
              </TabPane>
              <TabPane title="Tab3" key="c">
                <div>Content of Tab Pane 3</div>
              </TabPane>
            </Tabs>
          </div>
          <CodeBox
            title="纵向"
            description="垂直排列。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Tabs</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">TabPane</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Tabs</span><span className="space">&nbsp;&nbsp;</span><span className="property">vertical</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">true</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">TabPane</span><span className="space">&nbsp;&nbsp;</span><span className="property">title</span><span className="htmlstr">=</span><span className="string">"Tab1"</span><span className="space">&nbsp;&nbsp;</span><span className="property">key</span><span className="htmlstr">=</span><span className="string">"1"</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="htmltag">div</span><span className="label">&gt;</span><span className="htmlstr">Content of Tab Pane 1</span><span className="label">&lt;</span><span className="label">/</span><span className="htmltag">div</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="label">/</span><span className="component">TabPane</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">TabPane</span><span className="space">&nbsp;&nbsp;</span><span className="property">title</span><span className="htmlstr">=</span><span className="string">"Tab2"</span><span className="space">&nbsp;&nbsp;</span><span className="property">key</span><span className="htmlstr">=</span><span className="string">"2"</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="htmltag">div</span><span className="label">&gt;</span><span className="htmlstr">Content of Tab Pane 2</span><span className="label">&lt;</span><span className="label">/</span><span className="htmltag">div</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="label">/</span><span className="component">TabPane</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">TabPane</span><span className="space">&nbsp;&nbsp;</span><span className="property">title</span><span className="htmlstr">=</span><span className="string">"Tab3"</span><span className="space">&nbsp;&nbsp;</span><span className="property">key</span><span className="htmlstr">=</span><span className="string">"3"</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="htmltag">div</span><span className="label">&gt;</span><span className="htmlstr">Content of Tab Pane 3</span><span className="label">&lt;</span><span className="label">/</span><span className="htmltag">div</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="label">/</span><span className="component">TabPane</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="label">/</span><span className="component">Tabs</span><span className="label">&gt;</span>
          </CodeBox>
        </div>

        <section>
          <h2>API</h2>
        </section>

        <section className="sub">
          <h3>Tabs</h3>
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
              <td className="des">	当前激活面板的 key</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>defaultActiveKey</td>
              <td className="des">默认激活面板的 key</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>vertical</td>
              <td className="des">垂直排列</td>
              <td className="type">boolean</td>
              <td>false</td>
            </tr>

            <tr>
              <td>onChange</td>
              <td className="des">激活面板改变时的回调</td>
              <td className="type">{'(activeKey: string) => any'}</td>
              <td>——</td>
            </tr>

            <tr>
              <td>className</td>
              <td className="des">自定义 Tabs 容器类名</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>style</td>
              <td className="des">自定义 Tabs 容器样式</td>
              <td className="type">React.CSSProperties</td>
              <td>——</td>
            </tr>

          </tbody>
        </table>

        <section className="sub">
          <h3>TabPane</h3>
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
              <td>key</td>
              <td className="des">唯一标志</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>title</td>
              <td className="des">对应的选项卡头内容</td>
              <td className="type">string | React.ReactNode</td>
              <td>——</td>
            </tr>

            <tr>
              <td>disabled</td>
              <td className="des">禁用状态</td>
              <td className="type">boolean</td>
              <td>false</td>
            </tr>

            <tr>
              <td>className</td>
              <td className="des">自定义 Tab 面板类名</td>
              <td className="type">string	</td>
              <td>——</td>
            </tr>

            <tr>
              <td>style</td>
              <td className="des">自定义 Tab 面板样式</td>
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
