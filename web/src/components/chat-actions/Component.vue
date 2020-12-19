<template>
  <div class="p-2 flex justify-center bg-gray-200">
    <button class="chat-action-button bg-gray-500"
            @click="wantToChangeRoleRef = true">
      Switch Role ({{ roleRef }})
    </button>
    <button class="chat-action-button bg-red-500"
            v-if="isMatchedRef"
            @click="leave">Leave</button>
    <button class="chat-action-button inline-flex items-center pl-4"
            :class="isFindingRef ? 'bg-yellow-500' : 'bg-blue-500'"
            v-if="!isMatchedRef"
            @click="queue">
      <svg class="animate-spin -ml-1 mr-2 h-5 w-4 text-white"
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           v-if="isFindingRef">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Find
    </button>
  </div>
</template>
<script src="./script"></script>
<style>
.chat-action-button {
  @apply text-white text-base rounded shadow mx-2 py-1 px-3;
}
</style>
