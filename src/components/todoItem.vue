<script>
import {mapMutations} from "vuex";
export default {
  name: "todoItem",
  props: ['e'],
  methods:{
    ...mapMutations('Events',{
      del:'RemoveEvent',
      changeChecked:'UpdateEventDone',
    }),
    editEvent(eventObj){
      if (!Object.prototype.hasOwnProperty.call(eventObj, 'isEdit')) {
        this.$set(eventObj, 'isEdit', true);
      }
      eventObj.isEdit = true;
      // console.log(this.$refs.input_text)
      this.$nextTick(function(){
        this.$refs.input_text.focus();
      })
    },
    inputBlur(e,eventObj){
      const name = e.target.value.trim();
      if(!name){
        alert('待办事件名称不能为空');
        return ;
      }
      eventObj.isEdit = false;
      this.$store.commit('Events/UpdateEventName',{id:eventObj.id,name:name});
      e.target.value = '';
    }
  }
}
</script>

<template>
  <div class="item">
    <div style="display: flex; justify-content: center;align-items: center;">
      <input
          name="item-checkbox"
          type="checkbox"
          :checked="e.done"
          @click="changeChecked(e.id)"
      />
      <div v-show="!e.isEdit">{{e.name}}</div>
      <input
          ref="input_text"
          type="text"
          v-show="e.isEdit"
          :placeholder="e.name"
          @blur="inputBlur($event,e)"
      />
    </div>
    <div style="display: flex; justify-content: center;align-items: center;gap:25px">
      <button
          v-show="!e.isEdit"
          class="edit"
          @click="editEvent(e)"
      >编辑</button>
      <button
          class="del"
          @click="del(e.id)"
      >删除</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item{
  width:94%;
  height:35px;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:0 auto;
  border:1px solid gray;
  border-radius: 3px;
  &:hover{
    border-width: 2px;
    button{
      display: block;
    }
  }
  input{
    margin-right: 5px;
  }
  .del{
    width:50px;
    font-size: 0.8rem;
    font-weight: bold;
    height: 85%;
    background: #ff5000;
    color:#fff;
    border: none;
    border-radius: 3px;
    display: none;
    margin-right: 10px;
  }
  .edit{
    width:50px;
    font-size: 0.8rem;
    font-weight: bold;
    height: 85%;
    background: deepskyblue;
    color:#fff;
    border: none;
    border-radius: 3px;
    display: none;
  }
}
</style>