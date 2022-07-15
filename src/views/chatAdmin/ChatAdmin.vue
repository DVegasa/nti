<template>
  <div>
    <beautiful-chat :participants="participants" :titleImageUrl="titleImageUrl" :onMessageWasSent="sendMessage"
      :messageList="messageList" :newMessagesCount="newMessagesCount" :isOpen="isChatOpen" :close="closeChat"
      :icons="icons" :open="openChat" :showEmoji="true" :showFile="true" :showEdition="true" :showDeletion="true"
      :deletionConfirmation="true" :showTypingIndicator="showTypingIndicator" :showLauncher="true"
      :showCloseButton="true" :colors="colors" :alwaysScrollToBottom="alwaysScrollToBottom"
      :disableUserListToggle="false" :messageStyling="messageStyling" @onType="handleOnType" @edit="editMessage" />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import store from '@/store/index.js';

export default {
  setup() {
    onMounted(async () => {
      await store.dispatch('getMessages');
    })
    const messageList = computed(() => store.getters.getAllMessages.map(q => {
      if (q.from != 'Admin') q.from = 'me'
      return {
        type: 'text',
        author: q.from,
        data: { text: q.text }
      }
    }))
    return {
      participants: [
        {
          id: 'Admin',
          name: 'Admin',
          imageUrl: 'https://avatars.githubusercontent.com/u/28566199?v=4'
        },
        {
          id: 'UDK',
          name: 'UDK',
          imageUrl: 'https://avatars.githubusercontent.com/u/28108026?v=4'
        }
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      messageList, // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: true, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        launcher: {
          bg: '#4e8cff'
        },
        messageList: {
          bg: '#ffffff'
        },
        sentMessage: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        receivedMessage: {
          bg: '#eaeaea',
          text: '#222222'
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867'
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    }
  },
  methods: {
    async sendMessage(text) {
      await this.$store.dispatch('sendMessage', { text: text.data.text, from: this.$store.getters.getAllMessages.find(q => q.from != 'Admin').from });
    }
  }
}
</script>
