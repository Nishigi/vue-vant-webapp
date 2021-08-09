<template>
  <div v-if="show" class="no-data" :style="{ width }">
    <img :src="$img.noIcon" alt="" />
    <div>暂无数据</div>
  </div>
</template>

<script>
export default {
  props: {
    width: { type: String, required: false, default: "50%" },
    show: { type: Boolean, required: false, default: false },
  },
};
</script>

<style lang="scss" scoped>
.no-data {
  margin: 0 auto;
  margin-top: 1.07rem;
  width: 5rem;
  font-size: 0.4rem;
  text-align: center;
  line-height: 0.93rem;
  color: #888;
  & > img {
    display: block;
    width: 100%;
  }
}
</style>