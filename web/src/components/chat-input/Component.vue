<template>
  <div class="flex-shrink">
    <textarea class="shadow p-3 h-full w-full border-t resize-none"
              id="message-box"
              placeholder="Type message here..."
              @keydown="onKeydown"
              v-model="inputRef"></textarea>
  </div>
</template>
<script src="./script"></script>
