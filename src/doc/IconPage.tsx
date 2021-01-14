import * as React from 'react';
import Icon from '../lib/packages/icon/Icon'

export interface IAppProps {
}

export default class IconPage extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <Icon name='loading' />
      </div>
    );
  }
}
