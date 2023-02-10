const app = Vue.createApp({
  data() {
    return {
      someValue: 0
    };
  },
  methods: {
    someMethod(num) {
      this.someValue += num;
    }
  }
});

app.mount('#my-wrapper-that-is-controlled-by-vue');
