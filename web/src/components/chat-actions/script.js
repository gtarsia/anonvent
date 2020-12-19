import { isMatchedRef, isFindingRef, queue, leave } from '/@/store/store'
import { wantToChangeRoleRef, showRolePickerRef, roleRef } from '/@/store/role'

function setup() {
  return { isMatchedRef, isFindingRef, queue, leave, wantToChangeRoleRef, showRolePickerRef, roleRef }
}

export default { setup }
