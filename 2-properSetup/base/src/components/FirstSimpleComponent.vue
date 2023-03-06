<template>
  <h2>
    Rendered a first simple component! {{ someLocalValueOfOurs }}
  </h2>
</template>

<script>
  export default {
    data() {
      return {
        someLocalValueOfOurs: 'Hello'
      };
    }
  };
</script>