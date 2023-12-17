<template>
  <div class="m-4 bg-white">
    <p class="pb-4 text-2xl text-slate-600">這裡是最外層 app.vue</p>
    <NuxtLayout>
      <template #header>
        <p class="px-6 pt-4 text-xl text-green-500">這段會放置在 header 插槽</p>
      </template>
      <template #default>
        <NuxtPage/> 
        <div>
          <ClientOnly>
            <NewYear/>
            <template #fallback>
              <p class="my-6 flex justify-center">載入中...</p>
            </template>
          </ClientOnly>
          <JustClient />
          <ClientAndServer />
        </div>
      </template>
      <template #footer>
        <p class="px-6 pt-4 text-xl text-blue-500">這段會放置在 footer 插槽</p>
      </template>
    </NuxtLayout>
  </div>
</template>