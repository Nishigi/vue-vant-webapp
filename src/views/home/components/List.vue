<template>
  <div class="good-list">
    <div class="gs-good" v-for="item in row" :key="item._id">
      <div class="wrap" @click="skipToDetail(item)">
        <img :src="item.img" alt="" />
        <div>
          <span v-text="item.name"></span>
          <span v-text="item.price"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    row: { type: Array, required: true },
  },
  methods: {
    skipToDetail(ele) {
      console.log("ele", ele);
      this.$router.push(`/good/detail/${ele._id}`);
    },
  },
  mounted() {
    console.log(this.row);
  },
};
</script>


<style lang="scss" scoped>
.good-list {
  padding: 0 0.2rem;
  display: flex;
  .gs-good {
    flex: 1;
    width: 4.72rem;
    height: 5.1rem;
    background: rgba(247, 247, 247, 1);
    border-radius: 0.08rem;
    font-size: 0.4rem;
    line-height: 0.56rem;
    padding: 0.2rem;
    .wrap {
      background: white;
      padding: 0.19rem 0;
      & > img {
        width: 4.27rem;
        height: 4.27rem;
        display: block;
        margin: 0 auto;
      }
      & > div {
        box-sizing: border-box;
        padding: 0 0.13rem;
      }
    }
  }
}
</style>