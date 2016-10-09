import React from 'react';
import Message from './Message';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class MessageList extends React.Component {
  render() {

    return (
      <div>
        {
            this.props.messages.map((messages, i) => {
              return <Message key={i} text={messages} />
          })
        }
      </div>
    );
  }
}
