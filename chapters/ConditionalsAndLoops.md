**A note about using conditionals and loops. If you need `v-for` and `v-if`, DON'T use
them on the same element. Use a wrapper with `v-if` instead.**

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

# Loops
In order to create a list of DOM elements based on some array that we have in
our Vue code, then we can use the directive `v-for`. So the structure for that is
`v-for="<localVariable> in <arrayName>"` and then the local variable becomes available
in the DOM children, but also on the element itself. 

Similar to React, you'll want to utilize the `:key` property on the elements that you're
looping over to avoid strange bugs which come from Vue trying to optimize. Nothing
forces you to use it, but you might start seeing some funky bugs if you omit it.

It's also possible to get the current index in `v-for`. 
`v-for="(<localVariable>, <index>) in <arrayName>"`. In case you might need it, then
you can also use an object in the iteration. `v-for="<propertyValueVariable> in <object>"`.
If you want to get access to the key as well, then you can do 
`v-for="(<propertyValueVariable>, <propertyKeyVariable>) in <object>"`. You can also access
the index as the third parameter. `v-for="(<propertyValueVariable>, <propertyKeyVariable>, <index>) in <object>"`

One additional utility that might be useful is that you can loop through numbers. `v-for="num in 10"`,
this would produce numbers 1-10.

```html
<li 
    v-for="localVariableNameForOurCurrentArrayElement in someArrayThatWeHaveInOurJS" 
    :key="localVariableNameForOurCurrentArrayElement"
>
    {{ localVariableNameForOurCurrentArrayElement }}
</li>

<li 
    v-for="(localVariableNameForOurCurrentArrayElement, localIndexVariable) in someArrayThatWeHaveInOurJS"
    :key="localVariableNameForOurCurrentArrayElement"
>
    {{ localVariableNameForOurCurrentArrayElement }}
</li>

<!-- This would iterate over the values of the object, so ´Some value´ and ´Other value´ 
The risk here with the key is that it might be a repeated value, so using the object
property name would be better for the key, but for the sake of the syntax example, it's
omitted here.
-->
<li 
    v-for="theValueOfTheObject in { someProperty: 'Some value', otherProp: 'Other value' }"
    :key="theValueOfTheObject"
>
    {{ theValueOfTheObject }}
</li>

<!-- For objects, it'd probably be better to use the object property name for the key,
 as it cannot repeat. -->
<li 
    v-for="(theValueOfTheObject, theKey, anIndex) in { someProperty: 'Some value', otherProp: 'Other value' }"
    :key="theKey"
>
    {{ theValueOfTheObject }} {{ theKey }} {{ anIndex }}
</li>
```