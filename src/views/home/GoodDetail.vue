<template>
  <div class="gs-good-detail">
    <GsNavBar>
      <span v-text="info.name"></span>
    </GsNavBar>
    <div class="info">
      <img :src="info.img" alt="" />
      <div v-text="info.name"></div>
      <div v-text="info.desc"></div>
      <div>价格：<span v-text="info.price"></span></div>
    </div>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" @click="addToCart">
        <template>
          <AuthContainer></AuthContainer>
          <div>加入购物车</div>
        </template>
      </van-goods-action-button>
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import { GsNavBar, AuthContainer } from "@/components";
export default {
  name: "GoodDetail",
  components: {
    GsNavBar,
    AuthContainer,
  },
  data() {
    return {
      info: {},
    };
  },
  created() {
    console.log("id", this.$route.params.id);
    const id = this.$route.params.id;
    this.$api.fetchGoodInfo({ id }).then((res) => {
      this.info = res.info;
    });
  },
  methods: {
    addToCart() {
      console.log("添加购物车接口");
      const params = {
        good_id: this.info._id,
        num: 1,
      };
      this.$api.fetchCartAdd(params).then(() => {
        console.log("添加成功");
        setTimeout(() => {
          this.$router.push("/cart");
        }, 1000);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.gs-good-detail {
  padding-top: 1.6rem;
  .info {
    line-height: 0.67rem;
    font-size: 0.43rem;
    text-align: center;
    img {
      display: block;
      width: 9.33rem;
      height: 9.33rem;
      margin: 0 auto;
    }
  }
}
</style>
