import * as React from 'react';
import Tabs from '../lib/packages/tabs/Tabs'
import TabPane from '../lib/packages/tabs/TabPane'

export interface ITabsPageProps {
}

export default class TabsPage extends React.Component<ITabsPageProps> {
  public render() {
    return (
      <div>
        <section>
          <h4>基本用法， 默认选中第一项</h4>
          <Tabs>
            <TabPane title="Tab1" key="a">
              <div>Content of Tab Pane 1</div>
            </TabPane>
            <TabPane title="Tab2" key="b">
              <div>Content of Tab Pane 2</div>
            </TabPane>
            <TabPane title="Tab3" key="c">
              <div>Content of Tab Pane 3</div>
            </TabPane>
          </Tabs>
        </section>

        <section>
          <h4>禁用某一项</h4>
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
        </section>

        <section>
          <h4>垂直排列</h4>
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
        </section>

      </div>
    );
  }
}
