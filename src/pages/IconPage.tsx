import * as React from 'react';
import Icon from '../packages/icon/Icon'

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
