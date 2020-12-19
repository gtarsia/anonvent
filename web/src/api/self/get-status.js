import api from '/@/lib/api'

let firstTime = true

export default async function getStatus() {
  return api('self/status')
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
