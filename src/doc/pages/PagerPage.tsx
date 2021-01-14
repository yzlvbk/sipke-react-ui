import * as React from 'react'
import CodeBox from '../components/codebox/CodeBox'
import { Pager } from 'spike-react'
const componentName = 'PagerPage'

class ButtonPage extends React.Component {
  public static displayName = componentName

  public render() {

    return (
      <div>
        <section>
          <h1>Pager 分页</h1>
          <p className="text">分隔长列表，展示单个页面。</p>
        </section>
        <section>
          <h2>何时使用</h2>
          <p className="text">加载/渲染所有数据开销较大时，每次只加载/渲染单个页面。</p>
        </section>
        <section>
          <h2>代码示例</h2>
        </section>

        <div className="example">
          <div className="container">
            <Pager total={5} />
          </div>
          <CodeBox
            title="基本用法"
            description="最基本的用法。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Pager</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Pager</span><span className="space">&nbsp;&nbsp;</span><span className="property">total</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">5</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">onChange</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmlstr">(</span><span className="property">current</span><span className="htmlstr">)</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">=&gt;</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="method">handleChange</span><span className="htmlstr">(</span><span className="property">current</span><span className="htmlstr">)</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="label">/</span><span className="label">&gt;</span><br />
          </CodeBox>
        </div>

        <div className="example">
          <div className="container">
            <Pager total={400} />
          </div>
          <CodeBox
            title="更多"
            description="页码更多时显示效果。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Pager</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Pager</span><span className="space">&nbsp;&nbsp;</span><span className="property">total</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">400</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">onChange</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmlstr">(</span><span className="property">current</span><span className="htmlstr">)</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">=&gt;</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="method">handleChange</span><span className="htmlstr">(</span><span className="property">current</span><span className="htmlstr">)</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="label">/</span><span className="label">&gt;</span><br />
          </CodeBox>
        </div>

        <div className="example">
          <div className="container">
            <Pager total={20} size="small" />
          </div>
          <CodeBox
            title="迷你"
            description="迷你版本。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Pager</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Pager</span><span className="space">&nbsp;&nbsp;</span><span className="property">total</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">20</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">size</span><span className="htmlstr">=</span><span className="string">"small"</span><span className="space">&nbsp;&nbsp;</span><span className="property">onChange</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmlstr">(</span><span className="property">current</span><span className="htmlstr">)</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">=&gt;</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="method">handleChange</span><span className="htmlstr">(</span><span className="property">current</span><span className="htmlstr">)</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="label">/</span><span className="label">&gt;</span><br />
          </CodeBox>
        </div>

        <div className="example">
          <div className="container">
            <Pager total={20} simple={true} />
          </div>
          <CodeBox
            title="简洁"
            description="简洁版本。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Pager</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Pager</span><span className="space">&nbsp;&nbsp;</span><span className="property">total</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">20</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">simple</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">true</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">onChange</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmlstr">(</span><span className="property">current</span><span className="htmlstr">)</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">=&gt;</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="method">handleChange</span><span className="htmlstr">(</span><span className="property">current</span><span className="htmlstr">)</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="label">/</span><span className="label">&gt;</span><br />
          </CodeBox>
        </div>

        <div className="example">
          <div className="container">
            <Pager total={20} />
          </div>
          <CodeBox
            title="受控"
            description="页码由 current 控制。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Pager</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Pager</span><span className="space">&nbsp;&nbsp;</span><span className="property">total</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">20</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">current</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="property">state</span><span className="htmlstr">.</span><span className="property">current</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">onChange</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmlstr">(</span><span className="property">current</span><span className="htmlstr">)</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">=&gt;</span><span className="space">&nbsp;&nbsp;</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="method">changeState</span><span className="htmlstr">(</span><span className="property">current</span><span className="htmlstr">)</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="label">/</span><span className="label">&gt;</span><br />
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
              <td>current</td>
              <td className="des">当前页码</td>
              <td className="type">number</td>
              <td>——</td>
            </tr>

            <tr>
              <td>defaultCurrent</td>
              <td className="des">默认的当前页码</td>
              <td className="type">number</td>
              <td>1</td>
            </tr>

            <tr>
              <td>total</td>
              <td className="des">总页数</td>
              <td className="type">number</td>
              <td>——</td>
            </tr>

            <tr>
              <td>size</td>
              <td className="des">尺寸</td>
              <td className="type">'small' | 'default'</td>
              <td>'default'</td>
            </tr>

            <tr>
              <td>simple</td>
              <td className="des">简洁版本</td>
              <td className="type">Boolean</td>
              <td>false</td>
            </tr>

            <tr>
              <td>hideOnSinglePage</td>
              <td className="des">只有一页时是否隐藏</td>
              <td className="type">Boolean</td>
              <td>false</td>
            </tr>

            <tr>
              <td>onChange</td>
              <td className="des">页码改变时的回调</td>
              <td className="type">{'(current: number) => any'}</td>
              <td>——</td>
            </tr>

            <tr>
              <td>className</td>
              <td className="des">自定义 Pager 类名</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>style</td>
              <td className="des">自定义 Pager 样式</td>
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
