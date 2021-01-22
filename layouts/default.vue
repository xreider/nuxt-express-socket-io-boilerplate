<template>
  <div>
    <div>
      <nuxt-link :to="localePath('index')">{{ $t("home") }}</nuxt-link>
      <br />
      <nuxt-link :to="localePath('/')">{{ $t("home") }}</nuxt-link>
      <br />
      <nuxt-link :to="localePath('index', 'en')">Homepage in English</nuxt-link>
      <br />
      <nuxt-link :to="localePath('index', 'ru')">Homepage in Russian</nuxt-link>
      <br />
      <nuxt-link :to="localePath('/about')">
        Route by path to: {{ $t("about") }}
      </nuxt-link>
      <br />

      <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
      <br />
      <nuxt-link :to="switchLocalePath('ru')">Russian</nuxt-link>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {};

// {
// mounted() {
//   // window.socket = io();
//   // this.$store.commit("addIo", io);
//   window.addEventListener("beforeunload", (event) => {
//     // window.socket.emit("destroy");
//   });
// },
// destroyed() {
//   // window.socket.emit("destroy");
// },
// };
</script>

<style scoped>
</style>
