<template>
  <div class="login">
    <GsNavBar>
      <template>
        <span>登录</span>
      </template>
      <template #right>
        <span @click="$router.replace('/register')">注册</span>
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
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
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
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("登录", this.form);
      this.$api.fetchLogin(this.form).then((res) => {
        // this.$router.replace("/home");
        console.log("token", res.token);
        localStorage.setItem("token", res.token); //添加token
        this.$router.back(); //返回上一页
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.van-form {
  margin-top: 1.33rem;
}
</style>