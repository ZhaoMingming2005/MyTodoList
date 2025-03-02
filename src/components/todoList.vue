<script>
import todoItem from "@/components/todoItem.vue";
import {mapState} from "vuex";
export default {
  name: "todoList",
  components: {
    todoItem
  },
  computed:{
    ...mapState('Events',{
      list:'todoList'
    })
  },
}
</script>

<template>
  <div class="list">
    <todoItem v-for="e in list" :key="e.id" :e="e"></todoItem>
  </div>
</template>

<style lang="scss" scoped>
.list{
  list-style: none;
  width: 100%;
  margin: 10px auto;
}
</style>