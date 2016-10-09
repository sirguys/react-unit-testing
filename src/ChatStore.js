import { observable } from 'mobx';

class ChatStore {
  @observable messages = ['Hello', 'Guys'];

  addMessages(text) {
    this.messages.push(text);
  }
}
