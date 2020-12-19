import { upperFirst, camelCase } from 'lodash'
import randomWords from 'random-words'
import { get, set } from '../redis-promise'
import client from '../redis-client'

const wordsPerString = 2
const exactly = 1

function getRandomNickname() {
  let nickname = randomWords({ exactly, wordsPerString })
  nickname = camelCase(nickname)
  nickname = upperFirst(nickname)
  return nickname
}

function getUserNicknameKey(userId) {
  return `users:${userId}:nickname`
}

export async function getUserNickname({ userId }) {
  const key = getUserNicknameKey(userId)
  const res = await get(client, key)
  if (res) {
    return res
  }
  const nickname = getRandomNickname()
  await set(client, key, nickname)
  return nickname
}
