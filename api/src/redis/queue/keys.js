export function queueKey(role) {
  if (role !== 'listener' && role !== 'venter') {
    throw new Error(`Tried to use invalid role ${role}`)
  }
  return `queues:${role}`
}
export const listenerQueueKey = queueKey('listener')
export const venterQueueKey = queueKey('venter')
