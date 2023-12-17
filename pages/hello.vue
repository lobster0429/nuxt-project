<template>
  <div>Response Data: {{ data }}</div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig()
const { apiBase } = runtimeConfig.public

console.log('runtime config', toRaw(runtimeConfig))
console.log(
  `${process.client ? 'Client' : 'Server'} process get [apiSecret]: ${runtimeConfig.apiSecret}`
)
const { data } = await useFetch(`${apiBase}/hello`)
</script>
