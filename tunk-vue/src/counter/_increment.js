import {action} from 'tunk';


export default class increment {
  constructor(){
    console.log('init list');
    this.state = {
      count: 1
    }
  }
  @action
  increment(){
    return {count:this.addOne()};
  }

  addOne(){
    return this.state.count+1;
  }
}

