const runtimeConfig = useRuntimeConfig()

export default defineEventHandler((evt) => {
  const { apiSecret } = runtimeConfig
  console.log(`Receive an api req ${evt.path}`)
  console.log(`runtime setting [apiSecret]: ${apiSecret}`)

  return 'OK'
})
