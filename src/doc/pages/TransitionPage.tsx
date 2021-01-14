import * as React from 'react'
import CodeBox from '../components/codebox/CodeBox'
import { Transition, Button } from 'spike-react'
const componentName = 'TransitionPage'

class ButtonPage extends React.Component {
  public static displayName = componentName

  public state = { visible1: true, visible2: true }

  public toggle1 = () => {
    this.setState({ visible1: !this.state.visible1 })
  }

  public toggle2 = () => {
    this.setState({ visible2: !this.state.visible2 })
  }

  public render() {

    return (
      <div>
        <section>
          <h1>Transition 过渡</h1>
          <p className="text">提供入场/离场动画的功能组件。</p>
        </section>
        <section>
          <h2>何时使用</h2>
          <p className="text">适当的动画效果提升用户体验。</p>
        </section>
        <section>
          <h2>代码示例</h2>
        </section>
        <div className="example">
          <div className="container">
            <Button onClick={this.toggle1}>Toggle</Button>
            <Transition visible={this.state.visible1} beforeEnter={{ opacity: 0 }} afterEnter={{ opacity: 1 }}>
              <div style={{
                backgroundColor: 'rgb(52, 70, 110)', width: 150, height: 150, fontSize: 24, fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', textAlign: 'center', lineHeight: '150px'
              }}>Transition</div>
            </Transition>
          </div>
          <CodeBox
            title="基本用法"
            description="最基本的用法。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Transition</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'xue-react'</span><br /><br /><span className="label">&lt;</span><span className="component">Transition</span><span className="space">&nbsp;&nbsp;</span><span className="property">visible</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="htmltag">this</span><span className="htmlstr">.</span><span className="property">state</span><span className="htmlstr">.</span><span className="property">visible1</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">beforeEnter</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">beforeEnterCSS</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">afterEnter</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">afterEnterCSS</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="htmltag">div</span><span className="label">&gt;</span><span className="htmlstr">Transition</span><span className="label">&lt;</span><span className="label">/</span><span className="htmltag">div</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="label">/</span><span className="component">Transition</span><span className="label">&gt;</span>
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
              <td className="des">可见状态</td>
              <td className="type">boolean</td>
              <td>——</td>
            </tr>

            <tr>
              <td>beforeEnter</td>
              <td className="des">入场动画开始前的样式</td>
              <td className="type">React.CSSProperties</td>
              <td>——</td>
            </tr>

            <tr>
              <td>afterEnter</td>
              <td className="des">入场动画结束时的样式</td>
              <td className="type">React.CSSProperties	</td>
              <td>——</td>
            </tr>

            <tr>
              <td>beforeLeave</td>
              <td className="des">离场动画开始前的样式</td>
              <td className="type">React.CSSProperties	</td>
              <td>——</td>
            </tr>

            <tr>
              <td>afterLeave</td>
              <td className="des">离场动画结束时的样式</td>
              <td className="type">React.CSSProperties	</td>
              <td>——</td>
            </tr>

            <tr>
              <td>transitionActive</td>
              <td className="des">入场/离场动画时的过渡属性</td>
              <td className="type">React.CSSProperties	</td>
              <td>{'transition:' + '.3s all cubic-bezier(.645, .045, .355, 1)'}</td>
            </tr>

          </tbody>
        </table>

      </div >
    )
  }
}

export default ButtonPage
