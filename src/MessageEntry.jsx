import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

export default class MessageEntry extends React.Component {

  @observable entry = '';


  onSendMessage = () => {
    this.props.chatStore.addMessages(this.entry);
    this.entry = '';
  }

  onChangeEntry = (e) => {
    this.entry = e.target.value;
  }

  render() {
    return (
      <div>
          <input type="text" onChange={this.onChangeEntry}/>
          <button onClick={this.onSendMessage}>Send</button>
      </div>
    );
  }
}
