<template>
  <div>
    <p>primary color: <strong>{{ theme.primaryColor }}</strong></p>
    <p>dark mode: <strong>{{ theme.darkMode }}</strong></p>
    <div>
      <button @click="theme.darkMode = !theme.darkMode">
        dark mode switch
      </button>&nbsp;
      <NuxtLink to="/">
        Back to index
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
const appConfig = useAppConfig()
const { theme } = appConfig
</script>
