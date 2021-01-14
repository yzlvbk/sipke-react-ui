import * as React from 'react';
import CheckBox from '../lib/packages/checkBox/CheckBox'
import CheckBoxGroup from '../lib/packages/checkBox/CheckBoxGroup'
export interface ICheckBoxProps {
}

export default class CheckBoxPage extends React.Component<ICheckBoxProps> {
  public options = [
    { value: 'apple', label: 'apple' },
    { value: 'pear', label: 'pear' },
    { value: 'orange', label: 'orange' }
  ]
  public render() {
    return (
      <div>
        <h1>基本用法</h1>
        <CheckBox>CheckBox</CheckBox>

        <h1>Disabled 和 Indeterminate 状态</h1>
        <CheckBox disabled={true}>Disabled</CheckBox>
        <CheckBox defaultChecked={true} disabled={true}>Disabled</CheckBox>
        <CheckBox indeterminate={true}>Indeterminate</CheckBox>

        <h1>CheckBoxGroup</h1>
        <CheckBoxGroup options={this.options} title="SelectAll" style={{ 'flexDirection': 'column' }} />
      </div>


    );
  }
}
