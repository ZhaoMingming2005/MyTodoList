<script>
import {mapGetters,mapMutations} from "vuex";
export default {
  name: "todoFooter",
  methods:{
    ...mapMutations('Events',{
      del:'RemoveDoneEvent'
    }),
    check(e){
      this.$store.commit('Events/UpdateAllEventDone',e.target.checked)
    }
  },
  computed:{
    ...mapGetters('Events',{
      num:'number',
      finished:'finished'
    }),
    checkedAll(){
      return this.num === this.finished;
    }
  }
}
</script>

<template>
  <div class="footer">
    <div class="container">
      <input
          name="footer-checkbox"
          type="checkbox"
          :checked="checkedAll"
          @click="check($event)"
      />
      <div>已完成{{finished}}/全部{{num}}</div>
    </div>
    <button @click="del">清除已完成任务</button>
  </div>
</template>

<style lang="scss" scoped>
.footer{
  width: 95%;
  margin:10px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  .container{
    display: flex;
    align-items: center;
    font-weight: bold;
    input{
      margin-top: 6px;
      margin-right: 20px;
      font-size: 1.3rem;
    }
  }
  button{
    background: red;
    color:#fff;
    border:none;
    border-radius: 4px;
    height:30px;
    font-weight: bold;
  }
}
</style>