<template>
  <div>
    <h1>{{ $t("about") }}</h1>
    <div>
      <NuxtLink :to="localePath('/')">to Index</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
