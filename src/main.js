import "./assets/style.css"

import { createApp, ref } from "vue"
import App from "./App.vue"
import router from "./router"

const app = createApp(App)

app.use(router)

app.mount("#app")

// Gets screen width for reactive componets
export function getScreenWidth() {
  const width = ref(window.innerWidth)

  window.addEventListener("resize", () => {
    width.value = window.innerWidth
  })

  return width
}
