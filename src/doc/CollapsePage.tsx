import * as React from 'react';
import Collapse from '../lib/packages/collapse/Collapse'
import Panel from '../lib/packages/collapse/Panel'

export interface ICollapsePageProps {
}

export default class CollapsePage extends React.Component<ICollapsePageProps> {
  public render() {
    return (
      <div>
        <Collapse>
          <Panel header="Header1" key="1">
            <div>Content of Panel 1</div>
          </Panel>
          <Panel header="Header2" key="2">
            <div>Content of Panel 2</div>
          </Panel>
          <Panel header="Header3" key="3">
            <div>Content of Panel 3</div>
          </Panel>
        </Collapse>
      </div>
    );
  }
}
