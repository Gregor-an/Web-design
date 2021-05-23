<template>
  <div class="home">
      <Post />
       <div>
        <form>
            <span class="input-group-text">Add comment</span>
            <textarea class="form-control" aria-label="With textarea" id= "comtext" v-model="itemTitle"></textarea>
            <button @click="add" type="button" class="btn btn-primary" id = "send">Send</button>
        </form>
        <hr>
      </div>
    <CommentsTable :todoItems="$store.state.todoItems.items" 
      @toggleDone="toggleDone"/>
  </div>
</template>

<script>

import CommentsTable from '../components/CommentsTable.vue'
import Post from '../components/Post.vue'

export default {
  name: 'Home',
  components: {  CommentsTable , Post},
  data() {
      return {
        itemTitle: ''
      }
  },

  methods: {
    add() {
      if(this.itemTitle != ''){
        var obj = {
          username: 'Yehor Poliakov',
          text: this.itemTitle,
          date: new Date().toLocaleString()
        }
        this.itemTitle ='';
       this.$store.dispatch('ADD_TODO', obj);
      }
    },
    toggleDone(itemId) {
      this.$store.dispatch('TOGGLE_DONE_TODO', itemId);
    },
    deleteItem(itemId) {
      this.$router.push({name:'Delete', params: {itemId: itemId}});
    }
  }
}
</script>
