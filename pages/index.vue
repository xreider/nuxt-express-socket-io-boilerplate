<template>
  <div>
    <h1>{{ $t("welcome") }}</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$socket.emit("hello");
  },
};
</script>

<style scoped>
</style>
