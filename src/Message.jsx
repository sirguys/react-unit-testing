import React from 'react';

export default class Message extends React.Component {
render() {
return (
      <div>
        <p>{this.props.text}</p>

      </div>
    );
  }
}
