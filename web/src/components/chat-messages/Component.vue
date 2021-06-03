<template>
  <div class="flex-grow overflow-y-auto" ref="messagesElRef">
    <div class="mx-2">
      <div v-for="(messageGroup,i) in messageGroupsRef"
           class="my-2">
        <div class="font-mono text-xs text-gray-800">
          {{ messageGroup.mine ? selfNicknameRef : partnerNicknameRef }}
        </div>
        <div v-for="(message,j) in messageGroup.messagesRef"
             class="-mb-1 px-2 message-text"
             :class="messageGroup.mine ? 'text-blue-600' : 'text-gray-600'">
          {{ message.text }}
        </div>
      </div>
      <div v-if="didPartnerLeaveRef"
           class="mt-auto bg-red-800 bg-opacity-80 rounded-xl py-2 px-4 inline-flex text-white font-semibold">
        Partner has left the conversation
      </div>
    </div>
  </div>
</template>
<script src="./script"></script>
