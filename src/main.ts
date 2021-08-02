import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    pageTitle: "fejk",
  },
});

export default app;
