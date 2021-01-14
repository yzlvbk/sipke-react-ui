import * as React from 'react'
import CodeBox from '../components/codebox/CodeBox'
import { Row, Col } from 'spike-react'
const componentName = 'GridPage'

class ButtonPage extends React.Component {
  public static displayName = componentName

  public render() {
    const sm = { span: 12, offset: 0 }
    const md = { span: 9, offset: 0 }
    const lg = { span: 6, offset: 0 }
    const xl = { span: 3, offset: 0 }

    return (
      <div>
        <section>
          <h1>Grid 栅格</h1>
          <p className="text">24格栅格系统。</p>
        </section>
        <section>
          <h2>何时使用</h2>
          <p className="text">快速实现响应式布局。</p>
        </section>
        <section>
          <h2>代码示例</h2>
        </section>
        <div className="example">
          <div className="container">
            <Row style={{ marginBottom: '10px', height: '40px' }}>
              <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(64, 169, 255)' }} span={12}>Col-12</Col>
              <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(24, 144, 255)' }} span={12}>Col-12</Col>
            </Row>
            <Row style={{ marginBottom: '10px', height: '40px' }}>
              <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(64, 169, 255)' }} span={8}>Col-8</Col>
              <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(24, 144, 255)' }} span={8}>Col-8</Col>
              <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(64, 169, 255)' }} span={8}>Col-8</Col>
            </Row>
            <Row style={{ marginBottom: '10px', height: '40px' }}>
              <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(64, 169, 255)' }} span={6}>Col-6</Col>
              <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(24, 144, 255)' }} span={6}>Col-6</Col>
              <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(64, 169, 255)' }} span={6}>Col-6</Col>
              <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(24, 144, 255)' }} span={6}>Col-6</Col>
            </Row>
          </div>
          <CodeBox
            title="基础栅格"
            description="使用 Row 和 Col 栅格组件，创建一个基本的栅格系统，所有 Col 必须放在 Row 内，Row 的直接子组件也只能是 Col。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Row</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Col</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Row</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">12</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col-12</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">12</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col-12</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="label">/</span><span className="component">Row</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Row</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">8</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col-8</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">8</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col-8</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">8</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col-8</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="label">/</span><span className="component">Row</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="component">Row</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">6</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col-6</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">6</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col-6</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">6</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col-6</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">6</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col-6</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="label">/</span><span className="component">Row</span><span className="label">&gt;</span><br />
          </CodeBox>
        </div>

        <div className="example">
          <div className="container">
            <Row style={{ height: '40px' }}>
              <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(64, 169, 255)' }} span={4}>Col-4</Col>
              <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(24, 144, 255)' }} span={4} offset={1}>Col-4</Col>
              <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(64, 169, 255)' }} span={4} offset={3}>Col-4</Col>
              <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(24, 144, 255)' }} span={4} offset={4}>Col-4</Col>
            </Row>
          </div>
          <CodeBox
            title="区块偏移"
            description="使用 offset 属性使区块向右侧偏移。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Row</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Col</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Row</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">4</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col-4</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">4</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">offset</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">1</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col-4</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">4</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">offset</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">3</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col-4</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">4</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">offset</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">4</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col-4</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="label">/</span><span className="component">Row</span><span className="label">&gt;</span><br />
          </CodeBox>
        </div>

        <div className="example">
          <div className="container">
            <Row gutter={10}>
              <Col span={6}><div style={{ height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(64, 169, 255)' }} >Col-6</div></Col>
              <Col span={6}><div style={{ height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(24, 144, 255)' }} >Col-6</div></Col>
              <Col span={6}><div style={{ height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(64, 169, 255)' }} >Col-6</div></Col>
              <Col span={6}><div style={{ height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(24, 144, 255)' }} >Col-6</div></Col>
            </Row>
          </div>
          <CodeBox
            title="区块间隔"
            description="使用 gutter 属性设置区块间隔。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Row</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Col</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Row</span><span className="space">&nbsp;&nbsp;</span><span className="property">gutter</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">10</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">6</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col-6</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">6</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col-6</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">6</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col-6</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">6</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col-6</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="label">/</span><span className="component">Row</span><span className="label">&gt;</span><br />
          </CodeBox>
        </div>

        <div className="example">
          <div className="container">
            <Row gutter={4}>
              <Col span={12} sm={sm} md={md} lg={lg} xl={xl}><div style={{ height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(64, 169, 255)' }} >Col</div></Col>
              <Col span={12} sm={sm} md={md} lg={lg} xl={xl}><div style={{ height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(24, 144, 255)' }} >Col</div></Col>
              <Col span={12} sm={sm} md={md} lg={lg} xl={xl}><div style={{ height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(64, 169, 255)' }} >Col</div></Col>
              <Col span={12} sm={sm} md={md} lg={lg} xl={xl}><div style={{ height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(24, 144, 255)' }} >Col</div></Col>
              <Col span={12} sm={sm} md={md} lg={lg} xl={xl}><div style={{ height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(64, 169, 255)' }} >Col</div></Col>
              <Col span={12} sm={sm} md={md} lg={lg} xl={xl}><div style={{ height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(24, 144, 255)' }} >Col</div></Col>
              <Col span={12} sm={sm} md={md} lg={lg} xl={xl}><div style={{ height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(64, 169, 255)' }} >Col</div></Col>
              <Col span={12} sm={sm} md={md} lg={lg} xl={xl}><div style={{ height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(24, 144, 255)' }} >Col</div></Col>
            </Row>
          </div>
          <CodeBox
            title="响应式布局"
            description="span 和 offset 默认所有宽度下生效，具体设置见 Options，设置 sm、md、lg、xl 属性覆盖以实现响应式布局。"
          >
            <span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Row</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'{'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">Col</span><span className="space">&nbsp;&nbsp;</span><span className="htmlstr">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="keyword">from</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react'</span><br /><span className="keyword">import</span><span className="space">&nbsp;&nbsp;</span><span className="string">'spike-react/lib/spike-react.css'</span><br /><br /><span className="label">&lt;</span><span className="component">Row</span><span className="space">&nbsp;&nbsp;</span><span className="property">gutter</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">4</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">12</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">sm</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">sm</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">md</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">md</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">lg</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">lg</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">xl</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">xl</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">12</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">sm</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">sm</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">md</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">md</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">lg</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">lg</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">xl</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">xl</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">12</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">sm</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">sm</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">md</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">md</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">lg</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">lg</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">xl</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">xl</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">12</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">sm</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">sm</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">md</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">md</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">lg</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">lg</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">xl</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">xl</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">12</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">sm</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">sm</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">md</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">md</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">lg</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">lg</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">xl</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">xl</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">12</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">sm</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">sm</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">md</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">md</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">lg</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">lg</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">xl</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">xl</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span>
            <span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">12</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">sm</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">sm</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">md</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">md</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">lg</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">lg</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">xl</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">xl</span><span className="htmltag">{'}'}</span>
            <span className="label">&gt;</span><span className="text">Col</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="label">&lt;</span><span className="component">Col</span><span className="space">&nbsp;&nbsp;</span><span className="property">span</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="num">12</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">sm</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">sm</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">md</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">md</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">lg</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">lg</span><span className="htmltag">{'}'}</span><span className="space">&nbsp;&nbsp;</span><span className="property">xl</span><span className="htmlstr">=</span><span className="htmltag">{'{'}</span><span className="property">xl</span><span className="htmltag">{'}'}</span><span className="label">&gt;</span><span className="text">Col</span><span className="label">&lt;</span><span className="label">/</span><span className="component">Col</span><span className="label">&gt;</span><br /><span className="label">&lt;</span><span className="label">/</span><span className="component">Row</span><span className="label">&gt;</span><br />
          </CodeBox>
        </div>

        <section>
          <h2>API</h2>
        </section>
        <section className="sub">
          <h3>Row</h3>
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
              <td>gutter</td>
              <td className="des">栅格间隔，单位：px</td>
              <td className="type">number</td>
              <td>——</td>
            </tr>

            <tr>
              <td>className</td>
              <td className="des">自定义 Row 类名</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>style</td>
              <td className="des">自定义 Row 样式</td>
              <td className="type">React.CSSProperties	</td>
              <td>——</td>
            </tr>

          </tbody>
        </table>

        <section className="sub">
          <h3>Col</h3>
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
              <td>span</td>
              <td className="des">栅格占位格数，设置为 0 时相当于设置 display: none</td>
              <td className="type">number</td>
              <td>——</td>
            </tr>

            <tr>
              <td>offset</td>
              <td className="des">栅格向右偏移的格数</td>
              <td className="type">number</td>
              <td>0</td>
            </tr>

            <tr>
              <td>sm</td>
              <td className="des">响应式栅格，&gt; 576px 生效，具体属性设置见 Options</td>
              <td className="type">Options</td>
              <td>——</td>
            </tr>

            <tr>
              <td>md</td>
              <td className="des">响应式栅格，&gt; 768px 生效，具体属性设置见 Options</td>
              <td className="type">Options</td>
              <td>——</td>
            </tr>

            <tr>
              <td>lg</td>
              <td className="des">响应式栅格，&gt; 992px 生效，具体属性设置见 Options</td>
              <td className="type">Options</td>
              <td>——</td>
            </tr>

            <tr>
              <td>xl</td>
              <td className="des">响应式栅格，&gt; 1200px 生效，具体属性设置见 Options</td>
              <td className="type">Options</td>
              <td>——</td>
            </tr>

            <tr>
              <td>className</td>
              <td className="des">自定义 Col 类名</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>

            <tr>
              <td>style</td>
              <td className="des">自定义 Col 样式</td>
              <td className="type">	React.CSSProperties</td>
              <td>——</td>
            </tr>

          </tbody>
        </table>

        <section className="sub">
          <h3>Options</h3>
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
              <td>span</td>
              <td className="des">栅格占位格数，设置为 0 时相当于设置 display: none</td>
              <td className="type">number</td>
              <td>——</td>
            </tr>

            <tr>
              <td>offset</td>
              <td className="des">栅格向右偏移的格数</td>
              <td className="type">number</td>
              <td>——</td>
            </tr>

          </tbody>
        </table>
      </div>
    )
  }
}

export default ButtonPage
