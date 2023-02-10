# Vue.js tutorial

You can use Vue to control either your entire page, or just a section of it.

When starting with Vue, then the first thing that you always want to do is connect
a certain part of your app with Vue.

A directive is an instruction that we give to Vue to do something. All built-in 
directives that are shipped with Vue start with a `v-...`.

The most basic directive is `v-bind`. This tells Vue to bind a certain HTML attribute
to Vue. So for example `<a v-bind:href="someLinkHref"></a>` would bind the value 
`someLinkHref` that we have defined in our Vue data to the href's value.

Another thing to consider is that you can call any Javascript code inside the HTML
that is being controlled by Vue. So just calling `{{Math.random()}}` is valid code as 
long as it's being controlled by Vue.

You can use the directive `v-html` to tell Vue that whatever is passed into that directive
should be parsed as HTML. However, remember, this is a last resort. Don't reach for it.
This opens up the app to XSS.

```ts
const app = Vue.createApp({
    data() { // This is a keyword for Vue.js. You can set up variables here that
        // Will be connected to the view. Any variable that you use here can be
        // Used in the HTML that Vue is controlling. The variables are defined by
        // The returned object.
        return {
            someVariableForMyView: 'Here is my random variable',
            someLinkHref: 'https://banana.com',
            someHtmlThatWeWantToDefineInAVariable: '<h2>Some HTML</h2>'
        };
    },
    // This one takes an object, not a method. Here you define the methods that become
    // Available in the HTML that is being controlled by Vue.
    methods: {
        // Notice that we do not use fat arrow functions here. someMethod: () => {}
        // This is because the keyword function gets the `this` reference in a different
        // Way.
        // Our methods and our variables can be accessed through the `this` keyword.
        someMethodThatWeWantToUseThatAlsoReturns() {
            return 'Some string ' + this.someVariableForMyView;
        }
    }
});

app.mount('#id-of-the-node-that-we-want-to-control');
```

```html
<section id="i-am-not-controlled-by-vue-but-am-in-the-same-HTML">
    Out of control of Vue.
</section>
<section id="id-of-the-node-that-we-want-to-control">
    <p>{{ Math.random() }}</p>
    <p>{{ someVariableForMyView }}</p>
    <p>{{ someMethodThatWeWantToUseThatAlsoReturns() }}</p>
    <a v-bind:href="someLinkHref">Some link here</a>
    <div v-html="someHtmlThatWeWantToDefineInAVariable"></div>
</section>
```