import * as React from 'react';
import Spin from '../lib/packages/spin/Spin'

export interface ISpinPageProps {
}

export default class SpinPage extends React.Component<ISpinPageProps> {
  public render() {
    return (
      <div>
        <section>
          <h4>基本用法</h4>
          <Spin />
        </section>

        <section>
          <h4>自定义描述文案</h4>
          <Spin tip="loading" />
        </section>

        <section>
          <h4>受控</h4>
          <Spin spinning={true} />
        </section>

        <section>
          <h4>可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。</h4>
          <Spin spinning={true} tip="loading..." size={30}>
            <div>Further details about the context of this element.</div>
          </Spin>
        </section>

      </div>
    );
  }
}
