import { createStore } from 'vuex'

export default createStore({
  state: {
    messages: []
  },
  getters: {
    getAllMessages(state) {
      return state.messages;
    }
  },
  mutations: {
    getMessages(state, messages) {
      state.messages = messages;
    },
    addMessages(state, message) {
      state.messages.push(message);
    }
  },
  actions: {
    async getMessages(context) {
      const messages = await fetch("http://localhost:8080/chat");
      context.commit('getMessages', await messages.json());
    },
    async sendMessage(context, params) {
      const message = await fetch("http://localhost:8080/chat", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(params)
      })
      context.commit('addMessages', params);
    }
  },
  modules: {
  }
})
