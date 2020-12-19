import { ref, computed } from 'vue'
import setRoleRequest from '/@/api/self/set-role'

export const roleRef = ref(true)
export const wantToChangeRoleRef = ref(false)
export const showRolePickerRef = computed(() => !Boolean(roleRef.value) || wantToChangeRoleRef.value)

export function setRole(role) {
  roleRef.value = role
}

export function changeRole(role) {
  setRole(role)
  wantToChangeRoleRef.value = false
  return setRoleRequest({ role })
}

export function changeListenerRole() {
  changeRole('listener')
}

export function changeVenterRole() {
  changeRole('venter')
}

