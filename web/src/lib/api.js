import ky from 'ky'
// import { error } from './notify'

const prefixUrl = '/api'

export default async function api(url, opts = {}) {
  opts = { ...opts }
  opts.prefixUrl = prefixUrl
  let res = null
  res = await ky(url, opts).json()
  return res
}
