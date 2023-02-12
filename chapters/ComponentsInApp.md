# Components in an app
When creating a component, you should give it a unique name. You can't use something
like h2, because that already exists in HTML.

```ts
const app = Vue.createApp({ /* ... */ });

// This is basically another app that we're creating, but will be connected to our main
// app.
// Since our component is a mini-app, then it needs its own template.
app.component('name-of-our-component', {
    template: `
        <h2>Hello, I am a new component.</h2>
    `,
    data() {
        return {
            // ...
        };
    },
    methods: {
        // ...
    }
});

app.mount('#the-root-into-which-we-mount-the-main-app');
```

```html
<section id="the-root-into-which-we-mount-the-main-app">
    <name-of-our-component></name-of-our-component>
</section>
```