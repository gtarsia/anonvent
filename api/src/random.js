import crypto from 'crypto'

export function hex16() {
  return crypto.randomBytes(16).toString('hex')
}
