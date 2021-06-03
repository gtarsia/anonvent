export function userConvoKey(userId) {
  return `users:${userId}:convo`
}

export function convoUsersKey(convoId) {
  return `convos:${convoId}:users`
}

export function convoMessagesKey(convoId) {
  return `convos:${convoId}:messages`
}
