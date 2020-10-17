import * as React from 'react';
import Affix from '../packages/affix/Affix'
export interface IAffixPageProps {
}

export default class AffixPage extends React.Component<IAffixPageProps> {
  public render() {
    return (
      <div>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <Affix style={{ height: '40px', backgroundColor: 'skyblue' }}>sss</Affix>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
      </div>
    );
  }
}
