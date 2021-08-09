<template>
  <div class="register">
    <GsNavBar>
      <template>
        <span>注册</span>
      </template>
      <template #right>
        <span @click="$router.replace('/login')">登录</span>
      </template>
    </GsNavBar>
    <van-form @submit="onSubmit">
      <van-field
        v-model="form.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="form.password2"
        type="password"
        name="确认密码"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >注册</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { GsNavBar } from "@/components";
export default {
  components: {
    GsNavBar,
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
        password2: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("注册", this.form);
      if (this.form.password !== this.form.password2) {
        this.$toast.fail("密码不一致");
      } else {
        this.$api.fetchRegister(this.form).then(() => {
          this.$router.replace("/login");
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.van-form {
  margin-top: 1.33rem;
}
</style>