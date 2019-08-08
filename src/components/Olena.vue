<template>
 <div class="hello">
   <test />
  <button class="button" @click="add">Add An Item</button>
  <draggable
    :list="list"
    class="group"
    @start="dragging = true"
    @end="dragging = false">
    <div class="olena-list" v-for="(item, i) in list" :key="i">
      <div class="o-list-item">{{ item.name }} - ID {{item.id}}</div>
    </div>
  </draggable>
  
 </div>
</template>

<script>
import Draggable from 'vuedraggable'
import Test from './Test.vue'
let id = 0
export default {
  name: 'Olena',
  props: {
    msg: String
  },
  components: {
    Test,
    Draggable
  },
  data() {
    return {
      enabled: true,
      list: [
        {id: 1, name: 'Jim'},
        {id: 2, name: 'Nicole'},
        {id: 3, name: 'Mike'},
        {id: 4, name: 'Nancy'},
      ],
      dragging: false
    }
  },
  methods: {
    add: function(){
      this.list.push({id: id++, name: 'amy'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .o-list-item {
    padding: 10px;
    background: red;
    color: white;
    margin: 2px 0;
    width: 400px;
  }
</style>
