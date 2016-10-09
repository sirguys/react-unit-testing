import React from 'react';
import Counter from './Counter';
import ChatBox from './ChatBox';
import CounterStore from './CounterStore';

let counterStore = new CounterStore();

class App extends React.Component {
  constructor() {
    super();
    this.state = {name: "Guys"};
  }

  onChangeText = (e) => {
    let newState = e.target.value;
    this.setState({name: newState});
  }

  render() {
      return (
      <div>

        <Counter counterStore={counterStore}/>
        <ChatBox />

      </div>
    );
  }
}

export default App;
