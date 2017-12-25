import {create, action} from 'tunk';
import _increment from './_increment';

@create
class counter extends _increment {
  //不允许异步，应该保持简单
  constructor(){
    super();
    this.state = {
      count:0
    };
  }

  @action
  async decrement(){
    return {count:this.state.count - 1};
  }
  
  @action
  async decrementAsync(){
    const count = await new Promise((resolve, reject) => {
      setTimeout(() => {
        this.dispatch('decrement');
        resolve(this.state.count - 1);
      }, 1000);
    });
    return {count}
  }

}
