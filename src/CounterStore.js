import { observable } from 'mobx';
//npm install --save-dev babel-plugin-transform-decorators-legacy

export default class CounterStore {
  @observable count = 0;

  increase() {
    this.count = this.count + 1;
  }

  decrease() {
    this.count = this.count - 1;
  }
}
