import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@/styles/common.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// 定义全局指令
app.directive("img-lazy", {
  mounted(el, binding) {
    // const observer = new IntersectionObserver(([entry]) => {
    //   if (entry.isIntersecting) {
    //     el.src = binding.value;
    //     observer.unobserve(el);
    //   }
    // });

    // observer.observe(el);

  
  },
});
