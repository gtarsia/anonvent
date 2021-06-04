import { isMatchedRef, isFindingRef, joinQueue, leaveQueue, leave, queueStatusRef } from '/@/store/store'
import { wantToChangeRoleRef, showRolePickerRef, roleRef } from '/@/store/role'

function setup() {
  return { isMatchedRef, isFindingRef, joinQueue, leave, leaveQueue, wantToChangeRoleRef, showRolePickerRef, roleRef, queueStatusRef }
}

export default { setup }
