import * as React from 'react'
import CodeBox from '../components/codebox/CodeBox'
import { Affix } from 'spike-react'
const componentName = 'AffixPage'

class ButtonPage extends React.Component {
  public static displayName = componentName

  public render() {

    return (
      <div>
        <section>
          <h1>Affix 固钉</h1>
          <p className="text">将页面元素固定在可视范围。</p>
        </section>
        <section>
          <h2>何时使用</h2>
          <p className="text">当内容区域出现滚动，需要部分内容始终在可视范围内展示时。</p>
        </section>
        <section>
          <h2>代码示例</h2>
        </section>
        <div className="example">
          <div className="container">
            <Affix distance={20}>
              <div style={{ backgroundColor: '#1890ff', height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontSize: 20, fontWeight: 600 }}>Affix</div>
            </Affix>
          </div>
          <CodeBox
            title="基本用法"
            description="最基本的用法。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Affix</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Affix</span><span className="space">&nbsp;&nbsp;</span><span className="property">distance</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">20</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="htmltag">div</span><span className="label">&gt;</span><span className="htmlstr">Affix</span><span className="label">&lt;</span><span className="label">/</span><span className="htmltag">div</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="label">/</span><span className="component">Affix</span><span className="label">&gt;</span><br />
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
              <td>distance</td>
              <td className="des">距离窗口顶部达到指定偏移量后触发</td>
              <td className="type">number</td>
              <td>0</td>
            </tr>

            <tr>
              <td>className</td>
              <td className="des">自定义固钉容器类名</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>style</td>
              <td className="des">自定义固钉容器样式</td>
              <td className="type">React.CSSProperties	</td>
              <td>——</td>
            </tr>

          </tbody>
        </table>

      </div>
    )
  }
}

export default ButtonPage
