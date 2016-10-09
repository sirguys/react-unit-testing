import React from 'react';
import MessageList from './MessageList';
import MessageEntry from './MessageEntry';
import { observable } from 'mobx';
import { observer } from 'mobx-react';


class ChatStore {
  @observable messages = ['Hello', 'Guys'];

  addMessages(text) {
    this.messages.push(text);
  }
}

let chatStore = new ChatStore();

@observer
export default class ChatBox extends React.Component {
  render() {
    return (
      <div>
        <MessageList messages={chatStore.messages} />
        <MessageEntry chatStore={chatStore} />
      </div>
    );
  }
}
