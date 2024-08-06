import type {App} from "vue";
import {useIntersectionObserver} from "@vueuse/core";

export const lazyplugin = {
  install: (app: App): void => {
    app.directive('img-lazy', {
      mounted(el, binding) {
        const {stop} = useIntersectionObserver(
            el,
            ([{isIntersecting}]) => {

              if (isIntersecting) {
                // 进入视口区域
                el.src = binding.value
                stop()
              }
            },
        )
      }
    })

  }
}