<script>
import {nanoid} from "nanoid";
export default {
  name: "todoHeader",
  data(){
    return {
      eventName: '',
    }
  },
  methods:{
    addEvent(){
      const name = this.eventName.trim();
      if(!name){
        alert('待办事件名称不能为空')
        return
      }
      this.$store.commit('Events/AddEvent', {
        id: nanoid(),
        name,
        done: false
      });
      this.eventName = '';
    }
  }
}
</script>

<template>
  <div class="header">
    <input
        placeholder="请输入您的任务名称,按回车键添加任务"
        type="text"
        v-model="eventName"
        @keyup.enter="addEvent"
    />
  </div>
</template>

<style lang="scss" scoped>
.header{
  display: flex;
  justify-content: center;
  input{
    margin-top: 2px;
    width:95%;
    height: 25px;
  }
}
</style>