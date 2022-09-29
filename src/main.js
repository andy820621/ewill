import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import BaseCard from "./components/ui/BaseCard.vue";

const app = createApp(App);
// static register prevent bug
app.component("BaseCard", BaseCard);
// dynamic register
app.component(
	"BaseButton",
	defineAsyncComponent(() => import("./components/ui/BaseButton.vue"))
);
app.component(
	"BadgeCard",
	defineAsyncComponent(() => import("./components/ui/BadgeCard.vue"))
);

app.mount("#app");
