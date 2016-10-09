import React from 'react';
import { observer } from 'mobx-react';


@observer
export default class Counter extends React.Component {

  onClickAdd = () => {
    this.props.counterStore.increase();
    // this.setState({count:this.state.count + 1});
  }

  onClickMinus = () => {
    this.props.counterStore.decrease();
    // this.setState({count:this.state.count - 1});
  }


  render() {

      return (
      <div>
        <button className='minus' onClick={this.onClickMinus}>-</button>
        <span>{this.props.counterStore.count}</span>
        <button className='add' onClick={this.onClickAdd}>+</button>
      </div>
    );
  }
}
