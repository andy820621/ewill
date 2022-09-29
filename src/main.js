import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.component(
	"BaseCard",
	defineAsyncComponent(() => import("./components/ui/BaseCard.vue"))
);
app.component(
	"BaseButton",
	defineAsyncComponent(() => import("./components/ui/BaseButton.vue"))
);

app.mount("#app");
