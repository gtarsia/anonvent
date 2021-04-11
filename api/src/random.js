import crypto from 'crypto'
import { stubIfTest } from 'dummee'

function _hex16() {
  return crypto.randomBytes(16).toString('hex')
}

export const hex16 = stubIfTest(_hex16)
