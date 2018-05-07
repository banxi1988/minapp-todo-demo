// 此文件是由模板文件 ".dtpl/page/$rawModuleName.ts.dtpl" 生成的，你可以自行修改模板

import {pagify, MyPage, wxp} from 'base/'
import Todo from 'models/todo'

@pagify()
export default class extends MyPage {
  data = {
    newTodoError:"",
    newTodoContent:"",
    todos: [new Todo("学习 TS"), new Todo("学习 JavaScript"), new Todo("学习小 程序")]
  }

  async onLoad(options: any) {
    console.log(await wxp.getUserInfo())
  }

  onDeleteTodo(event){
    const index = event.detail.index
    console.log("index -> ", index)
    this.data.todos.splice(index, 1)
    this.setDataSmart({todos: this.data.todos})
  }

  onNewTodoFormSubmit(event){
    console.log("event.detail.value-> ", event.detail.value)
    const content = event.detail.value.newTodoContent.trim()
    if(content.length < 1){
      this.setDataSmart({newTodoError: " 待办事项不能为空"})
      return
    }else{
      const todo = new Todo(content)
      this.data.todos.push(todo)
      this.setDataSmart({
        todos: this.data.todos,
        newTodoContent:""
      })
    }

  }
  
  onInputNewTodoContent(event){
    this.setDataSmart({
      newTodoError: ""
    })
  }

}
