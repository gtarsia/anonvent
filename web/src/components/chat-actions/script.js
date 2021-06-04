import { isMatchedRef, isFindingRef, joinQueue, leaveQueue, leave, queueStatusRef, partnerNicknameRef } from '/@/store/store'
import { wantToChangeRoleRef, showRolePickerRef, roleRef } from '/@/store/role'

function setup() {
  return {
    isMatchedRef,
    isFindingRef,
    joinQueue,
    leave,
    leaveQueue,
    wantToChangeRoleRef,
    showRolePickerRef,
    roleRef,
    queueStatusRef,
    partnerNicknameRef,
  }
}

export default { setup }
