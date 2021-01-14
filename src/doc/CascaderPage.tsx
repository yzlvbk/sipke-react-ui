import * as React from 'react';
import Cascader from '../lib/packages/cascader/Cascader'

export interface ICascaderPageProps {
}

export default class CascaderPage extends React.Component<ICascaderPageProps> {
  public handleChange() {
    console.log('handleChange')

  }

  public handleSelect() {
    console.log('handleSelect')
  }

  public render() {
    const options = [
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
    return (
      <div>
        <div style={{ width: '300px' }}>
          <Cascader options={options} placeholder="cascader" onChange={this.handleChange} onSelect={this.handleSelect} />
        </div>

      </div>
    );
  }
}
