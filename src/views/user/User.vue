<template>
  <div class="gs-user">
    <div class="user-info">
      <div class="ui-tip">个人中心</div>
      <div class="ui-box">
        <img
          src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png!q70.jpg.dpg"
        />
        <div>
          <div>Plus会员</div>
          <div>Nishigi</div>
        </div>
      </div>
    </div>

    <div>
      <van-cell-group>
        <van-cell title="收货地址管理" value="管理我的收货地址" is-link />
        <van-cell title="账户与安全" value="密码实名认证等管理" is-link />
      </van-cell-group>
    </div>

    <div>
      <van-grid direction="horizontal" :column-num="3">
        <van-grid-item text="意见反馈">
          <template #icon>
            <img class="icon" :src="$img.fbIcon" alt="" />
          </template>
        </van-grid-item>
        <van-grid-item text="京东客户端">
          <template #icon>
            <img class="icon" :src="$img.jdIcon" alt="" />
          </template>
        </van-grid-item>
        <van-grid-item text="退出登录" @click="logout">
          <template #icon>
            <img class="icon" :src="$img.exitIcon" alt="" />
          </template>
        </van-grid-item>
      </van-grid>
    </div>

    <GsTabBar></GsTabBar>
  </div>
</template>

<script>
import { GsTabBar } from "@/components";
export default {
  components: {
    GsTabBar,
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.replace("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.gs-user {
  .user-info {
    .ui-tip {
      line-height: 1.33rem;
      font-size: 0.53rem;
      padding-left: 0.33rem;
      box-sizing: border-box;
      background: white;
    }
    .ui-box {
      width: 9.47rem;
      height: 2.4rem;
      overflow: hidden;
      border: 0.03rem solid red;
      box-sizing: border-box;
      margin: 0 auto;
      border-radius: 0.11rem;
      background: white;
      & > img {
        float: left;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        margin-top: 0.6rem;
        margin-left: 0.47rem;
      }
      & > div {
        line-height: 0.6rem;
        font-size: 0.43rem;
        float: left;
        margin-top: 0.6rem;
        margin: 0.47rem;
      }
    }
  }
  .icon {
    display: inline-block;
    width: 0.53rem;
    height: 0.48rem;
  }
}
</style>
