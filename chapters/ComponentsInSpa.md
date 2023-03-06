# Components in an SPA

`.vue` files contain components. It uses simpler syntax than the JS object that we had
in the app example. It contains three sections. The `template` section for the template,
the `script` section for the JS, the `style` section for the CSS. The empty scaffolding
looks like this.

```vue
<template>
<!-- Our template code goes into here -->
  <p>{{ someValue }}</p>
</template>

<script>
// Our JS code goes into here

// This section also defines what the file is exporting. Using the 
// export default {...} 
// statement will create a default export and whatever is in the curlies will be
// the default export.

// Notice that the object that we're exporting has the exact same shape that the object
// had in the basic isolated examples that we looked at before. 
export default {
  data() {
    return {
      someValue: 'Some value that we have'
    }
  }
}
</script>

<style>
/*Our CSS goes into here*/
</style>

```

Props are used as a concept in Vue as well. You pass data into the component using the
props. When we're using props, then we have to define them on our component. It goes into
the config object. In its simplest form, it's an array of strings.

Same as React, the props should be considered immutable by the child.
```vue
<template>
<!--  Props are usable here as well. Notice, however, that it has no unique identifier
other than its name to set it apart from other variables, so need to make sure that your
local variables have different names to your props to avoid clashes. -->
  <h2>{{ secondProp }}</h2>
</template>

<script>
export default {
  // The props become useable everywhere. In the configuration, in the template.
  // props: [
  //     'prop',
  //     'firstProp', // Notice this camelCase. When the value is being provided, it's being
  //     // provided as kebab-case, but when we're using it here, then we're receiving it as 
  //     // camelCase.
  //     'secondProp'
  // ],
  // However, if we want to have props in a better form, that gives more information,
  // then we can use a prop object
  props: {
    // We can provide just a type.
    prop: String,
    firstProp: String,
    // Or we can provide even more configuration.
    // Vue gives is a warning message in the developer console if we miss 
    // provide props in the wrong way, that doesn't conform to the definitions that
    // we have put down.
    secondProp: {
      type: String,
      required: false,
      // Default can also be a method for more complicated logic.
      default: 'Some default value',
      validator: function(value) {
        // We can provide custom validation to make sure that the prop value provided
        // is correct.
        return value === 'banana';
      }
    }
  },
  data() {
    // Notice that we can initialize our local state value to a prop value.
    return {
      initializeToAPropValueByDefault: this.firstProp
    }
  },
  methods: {
    usingPropsHereNow() {
      // Props are usable here
      this.firstProp;
    }
  }
}
</script>
```

The props that you pass are parsed as string by default. If you want it to be
parsed as some more functional type like a boolean, then you have to bind the
property.

```vue
<custom-component-of-ours
  v-for="data in allData"
  :key="data.id"
  :some-prop="true"
  :other-prop="customPropertyDefinedSomewhereElse"
  :third-prop="data.id"
>
</custom-component-of-ours>
```