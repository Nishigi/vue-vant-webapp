<template>
  <div class="gs-tabbar">
    <van-tabbar route active-color="#ed3f41">
      <van-tabbar-item to="/home" icon="bag-o"> 首页 </van-tabbar-item>
      <van-tabbar-item to="/cate" icon="apps-o"> 分类 </van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o">
        购物车
      </van-tabbar-item>
      <van-tabbar-item to="/user" icon="friends-o"> 我的 </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
