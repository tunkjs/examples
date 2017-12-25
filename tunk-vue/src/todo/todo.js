import {create, action} from 'tunk';

@create
class todo {
	constructor(){
		this.state = {
			list: []
		};
    }
    
    @action
    async getList(){
        const list = await this.getFromStorage();
        return {list};
    }
	
	@action
	change(id, text){
		const {list} = this.state;
		for(let i = 0; i < list.length; i++) if(list[i].id === id){
			list[i].text = text;
		}
		this.saveToStorage(list);
		return {list};
	}
	
	@action
	add(text){
		const {list} = this.state;
		list.push(this.make(text));
		this.saveToStorage(list);
		return {list};
	}
	
	@action
	del(id){
		const {list} = this.state;
		for(let i = 0; i < list.length; i++) if(list[i].id === id){
			list.splice(i, 1);
		}
		this.saveToStorage(list);
		return {list};
	}
	
	async getFromStorage(){
        return await new Promise((resolve) => {
            setTimeout(() => {
                const list = window.localStorage['todoList'] ? JSON.parse(window.localStorage['todoList']) : [this.make()];
                resolve(list);
            }, 2000);
		    
        })
	}
	
	
	saveToStorage(list) {
		list = list || this.state.list;
		window.localStorage['todoList'] = JSON.stringify(list);
    }
    
    make(text){
		return {
			id: parseInt(Math.random() * Date.now()),
			text: text || ''
		}
	}
	
}
