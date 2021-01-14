import * as React from 'react';
import Col from '../lib/packages/grid/Col'
import Row from '../lib/packages/grid/Row'

export interface IGridPageProps {
}

export default class GridPage extends React.Component<IGridPageProps> {
  public render() {

    const sm = { span: 12, offset: 0 }
    const md = { span: 9, offset: 0 }
    const lg = { span: 6, offset: 0 }
    const xl = { span: 3, offset: 0 }
    return (
      <div>
        <h1>基础栅格</h1>
        <Row style={{ marginBottom: '10px' }}>
          <Col style={{ backgroundColor: 'rgb(64, 169, 255)' }} span={12}>Col-12</Col>
          <Col style={{ backgroundColor: 'rgb(24, 144, 255)' }} span={12}>Col-12</Col>
        </Row>
        <Row style={{ marginBottom: '10px' }}>
          <Col style={{ backgroundColor: 'rgb(64, 169, 255)' }} span={8}>Col-8</Col>
          <Col style={{ backgroundColor: 'rgb(24, 144, 255)' }} span={8}>Col-8</Col>
          <Col style={{ backgroundColor: 'rgb(64, 169, 255)' }} span={8}>Col-8</Col>
        </Row>
        <Row style={{ marginBottom: '10px' }}>
          <Col style={{ backgroundColor: 'rgb(64, 169, 255)' }} span={6}>Col-6</Col>
          <Col style={{ backgroundColor: 'rgb(24, 144, 255)' }} span={6}>Col-6</Col>
          <Col style={{ backgroundColor: 'rgb(64, 169, 255)' }} span={6}>Col-6</Col>
          <Col style={{ backgroundColor: 'rgb(24, 144, 255)' }} span={6}>Col-6</Col>
        </Row>

        <h1>区块偏移</h1>
        <Row>
          <Col style={{ backgroundColor: 'rgb(64, 169, 255)' }} span={4}>Col-4</Col>
          <Col style={{ backgroundColor: 'rgb(24, 144, 255)' }} span={4} offset={1}>Col-4</Col>
          <Col style={{ backgroundColor: 'rgb(64, 169, 255)' }} span={4} offset={3}>Col-4</Col>
          <Col style={{ backgroundColor: 'rgb(24, 144, 255)' }} span={4} offset={4}>Col-4</Col>
        </Row>

        <h1>响应式布局</h1>
        <Row gutter={4}>
          <Col style={{ backgroundColor: 'rgb(64, 169, 255)' }} span={12} sm={sm} md={md} lg={lg} xl={xl}>Col</Col>
          <Col style={{ backgroundColor: 'rgb(24, 144, 255)' }} span={12} sm={sm} md={md} lg={lg} xl={xl}>Col</Col>
          <Col style={{ backgroundColor: 'rgb(64, 169, 255)' }} span={12} sm={sm} md={md} lg={lg} xl={xl}>Col</Col>
          <Col style={{ backgroundColor: 'rgb(24, 144, 255)' }} span={12} sm={sm} md={md} lg={lg} xl={xl}>Col</Col>
          <Col style={{ backgroundColor: 'rgb(64, 169, 255)' }} span={12} sm={sm} md={md} lg={lg} xl={xl}>Col</Col>
          <Col style={{ backgroundColor: 'rgb(24, 144, 255)' }} span={12} sm={sm} md={md} lg={lg} xl={xl}>Col</Col>
          <Col style={{ backgroundColor: 'rgb(64, 169, 255)' }} span={12} sm={sm} md={md} lg={lg} xl={xl}>Col</Col>
          <Col style={{ backgroundColor: 'rgb(24, 144, 255)' }} span={12} sm={sm} md={md} lg={lg} xl={xl}>Col</Col>
        </Row>
      </div>
    );
  }
}
