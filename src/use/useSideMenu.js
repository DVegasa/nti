import {ref, watch} from "vue"

const visible = ref(false)

const show = () => visible.value = true
const hide = () => visible.value = false

export const useSideMenu = () => {
  return {
    visible,
    show,
    hide,
  }
}
