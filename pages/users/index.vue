<template>
  <div>
    <h1>USERS</h1>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: [function(to, from) {
    console.log(to.params, 'middleware in component, haha')
  }]
})
</script>
