<template>
  <div id="app">
    <todoHeader></todoHeader>
    <todoList></todoList>
    <todoFooter v-if="num !== 0"></todoFooter>
    <div class="default" v-if="num === 0">快来添加待办事项吧,亲~</div>
  </div>
</template>

<script>
import todoHeader from "@/components/todoHeader.vue";
import todoFooter from "@/components/todoFooter.vue";
import todoList from "@/components/todoList.vue";
import {mapGetters} from "vuex";
export default {
  name: 'App',
  components: {
    todoHeader,
    todoList,
    todoFooter
  },
  computed: {
    ...mapGetters('Events',{
      num:'number'
    })
  }
}
</script>

<style lang="scss" scoped>
#app {
  width: 800px;
  border: 2px solid gray;
  border-radius: 5px;
  margin: 5px auto;

  .default {
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    line-height: 50px;
    color: lightpink;
  }
}
</style>

