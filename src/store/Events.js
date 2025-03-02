import {nanoid} from "nanoid";
const Events = {
    namespaced: true,
    action:{

    },
    mutations:{
        // 添加待办事件
        AddEvent(state, event){
            state.todoList.unshift(event)
        },
        // 删除待办事件
        RemoveEvent(state, id){
            state.todoList = state.todoList.filter((event)=>{
                return event.id !== id
            })
        },
        // 删除所有已完成待办事件
        RemoveDoneEvent(state){
            state.todoList = state.todoList.filter((event)=>{
                return event.done === false;
            })
        },
        // 修改待办事件名称
        UpdateEventName(state,info){
            state.todoList.forEach((event)=>{
                if(event.id === info.id){
                    event.name = info.name;
                }
            })
        },
        // 全选或全不选待办事件
        UpdateAllEventDone(state,flag){
            state.todoList.forEach((event)=>{
               event.done = flag;
            })
        },
        // 修改待办事项的勾选状态
        UpdateEventDone(state,id){
            state.todoList.forEach((event)=>{
                if(event.id === id){
                    event.done = !event.done;
                }
            })
        }
    },
    state:{
        todoList:[
            {
                id: nanoid(),
                name: '敲代码',
                done: false
            },
            {
                id: nanoid(),
                name: '看书',
                done: true
            }
        ]
    },
    getters:{
        // 待办事件总数
        number(state){
            return state.todoList.length;
        },
        // 已完成待办事件总数
        finished(state){
            return state.todoList.reduce((pre,cur)=>{
                return pre + (cur.done ? 1 : 0);
            },0)
        }
    }
}
export {Events}