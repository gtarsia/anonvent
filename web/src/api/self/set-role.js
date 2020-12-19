import api from '/@/lib/api'

let firstTime = true

export default async function setRole({ role }) {
  const method = 'PUT'
  const json = { role }
  return api('self/role', { method, json })
  // if (firstTime) {
  //   const isMatched = false
  //   firstTime = false
  //   return { isMatched }
  // }
  // const isMatched = true
  // const partnerNickname = await getNickname()
  // const role = 'venter'
  // return { isMatched, partnerNickname, role }
}
