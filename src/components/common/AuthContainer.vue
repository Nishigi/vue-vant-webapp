<template>
  <div class="auth" v-if="show" @click="handle">
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    const isLogin = localStorage.getItem("token");
    this.show = !isLogin;
  },
  methods: {
    handle() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.auth {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
}
</style>