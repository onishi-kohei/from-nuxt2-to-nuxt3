import {
  ElDatePicker,
  ElSwitch,
  ElSelect,
  ElOption,
  ElOptionGroup,
  ElCascader,
  ElInput,
  ElMenu,
  ElMenuItem,
  ElPopover,
  ElProgress,
  ElTooltip,
  ElDialog,
  ElButton,
  ElSlider,
} from 'element-plus'
import 'assets/styles/element-plus.scss'

export default defineNuxtPlugin((nuxtApp) => {
  // import components
  nuxtApp.vueApp.component(ElDatePicker.name, ElDatePicker)
  nuxtApp.vueApp.component(ElSwitch.name, ElSwitch)
  nuxtApp.vueApp.component(ElSelect.name, ElSelect)
  nuxtApp.vueApp.component(ElOption.name, ElOption)
  nuxtApp.vueApp.component(ElOptionGroup.name, ElOptionGroup)
  nuxtApp.vueApp.component(ElCascader.name, ElCascader)
  nuxtApp.vueApp.component(ElInput.name, ElInput)
  nuxtApp.vueApp.component(ElMenu.name, ElMenu)
  nuxtApp.vueApp.component(ElMenuItem.name, ElMenuItem)
  nuxtApp.vueApp.component(ElPopover.name, ElPopover)
  nuxtApp.vueApp.component(ElProgress.name, ElProgress)
  nuxtApp.vueApp.component(ElTooltip.name, ElTooltip)
  nuxtApp.vueApp.component(ElDialog.name, ElDialog)
  nuxtApp.vueApp.component(ElButton.name, ElButton)
  nuxtApp.vueApp.component(ElSlider.name, ElSlider)
})