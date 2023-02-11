# Conditionals
As with the rest of the interactions that Vue has with the template, then here, as well,
we have directives that can be utilized.

If we want to render some DOM element, based on some property, then we can use the `v-if`
directive.

When we inspect the DOM, then we can notice a `<!--v-if-->` element where our element
should be, if the condition is false. It's a placeholder that Vue uses to decide on 
rendering the conditional DOM elements. This disappears when using if-else logic, though.

There are also the `v-else` and `v-else-if` directives. Do note, that these have to come
DIRECTLY after the element with the `v-if` condition.

```html
<!-- There can be no elements in between these, if you want the if-else logic to work. -->
<p v-if="someValueThatWeHave === 0">Some paragraph that is rendered conditionally.</p>
<p v-if-else="someValueThatWeHave === 1">Value is now 1, above paragraph isn't shown.</p>
<p v-else>Default case if no if matches.</p>
```

There is also a directive called `v-show`. This also makes the element disappear visually.
However, the difference is that `v-if` removes the element fully from the DOM as well,
whereas with `v-show`, you can still see the element in the DOM, but not in the UI.
`v-show` just utilizes CSS to hide the element.

You should default to `v-if`, though. Go for `v-show` if you have a situation where
an element is constantly appearing and disappearing. In such a situation, it can help
with performance, as only CSS changes are being made. The DOM isn't getting elements
added to and removed from.