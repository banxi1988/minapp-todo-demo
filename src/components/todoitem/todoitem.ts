// 此文件是由模板文件 ".dtpl/component/$rawModuleName.ts.dtpl" 生成的，你可以自行修改模板

import {MyComponent, comify} from 'base'

@comify()
export default class extends MyComponent {
  /**
   * 组件的属性列表
   */
  properties = {
    content :{
      value : "",
      type: String
    },
    done : {
      value: false,
      type: Boolean
    },
    index:{
      value: -1,
      type: Number
    }
  }

  /**
   * 组件的初始数据
   */
  data = {

  }

  /**
   * 组件属性值有更新时会调用此函数，不需要在 properties 中设置 observer 函数
   */
  onPropUpdate(prop: string, newValue: any, oldValue: any) {

  }

  onMarkDone(){
    this.setDataSmart({done: true})
  }

  onMarkTodo(){
    this.setDataSmart({done: false})
  }

  onDeleteTodo(){
    const eventDetail = {index: this.data.index}
    const eventOption = {}
    this.triggerEvent('deletetodo', eventDetail, eventOption)
  }
}

