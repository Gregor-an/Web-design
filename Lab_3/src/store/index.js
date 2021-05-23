import Vue from 'vue'
import Vuex from 'vuex'
import CommentsList from '@/cls/model/CommentsList.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoItems: new CommentsList()
  },
  mutations: { 
    ADD_TODO: (state, todoItem) => {
      state.todoItems.addItem(todoItem);
    },
    TOGGLE_DONE_TODO: (state, todoItemId) => {
      state.todoItems.toggleDone([todoItemId]);
    },    
    DELETE_ITEM_TODO: (state, todoItemId) => {
      state.todoItems.deleteItem([todoItemId]);
    }
  },
  actions: { 
    ADD_TODO: (context, todoItem) => {
      context.commit('ADD_TODO', todoItem);
    },
    TOGGLE_DONE_TODO: (context, todoItemId) => {
      context.commit('TOGGLE_DONE_TODO', todoItemId);
    },
    DELETE_ITEM_TODO: (context, todoItemId) => {
      context.commit('DELETE_ITEM_TODO', todoItemId);
    }
   
  },
  modules: {
  }
})
