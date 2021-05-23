<template>
  <div class='row'>
      <div v-for="todoItem in todoItems" :key="todoItem.id">
        <div class='col-md-5'>
          <div>
              <div>
              <section>
                  <div class='row'>
                      <div>
                          <a href='#' class='anchor-username'>
                              <h4 class='media-heading'>{{todoItem.title.username}}</h4>
                          </a>
                          <a href='#' class='anchor-time'>{{todoItem.title.date}} </a>
                      </div>
                  </div>
                </section>
                <section class='post-body'>
                  <p class="overflow-visible">{{todoItem.title.text}}</p>
              </section>
              </div>

          </div>
        </div>
        <button type="button" class="btn btn-primary" @click="deleteItem(todoItem.id)">Delete</button> &nbsp;
        <hr>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CommentsTable',
  props: {
    todoItems: Array
  },
  methods: {
    deleteItem(id) {
      this.$store.dispatch('DELETE_ITEM_TODO', id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table, th, td {
  border: 1px solid black;
}
</style>
