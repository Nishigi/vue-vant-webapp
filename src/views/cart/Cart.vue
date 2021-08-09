<template>
  <div class="gs-cart">
    <GsNavBar>
      <template #default>
        <span>购物车</span>
      </template>
      <template #right>
        <span>筛选</span>
      </template>
    </GsNavBar>

    <GsNoData :show="loaded && list.length === 0" />
    <van-swipe-cell v-for="(item, idx) in list" :key="item._id">
      <van-row type="flex" justify="center" align="center">
        <van-col span="4">
          <van-checkbox
            @click="rowChange"
            v-model="item.checked"
          ></van-checkbox>
        </van-col>
        <van-col span="20">
          <van-card
            :num="item.num"
            :price="item.good_info.price"
            :desc="item.good_info.desc"
            :title="item.good_info.name"
            :thumb="item.good_info.img"
          >
            <template #footer>
              <div class="row-btns">
                <span @touchstart="updateNum(item, idx, -1)">
                  <van-button size="mini">-</van-button>
                </span>
                <span @touchstart="updateNum(item, idx, 1)">
                  <van-button size="mini">+</van-button>
                </span>
              </div>
            </template>
          </van-card>
        </van-col>
      </van-row>
      <template #right>
        <van-button
          square
          text="删除"
          type="danger"
          style="height: 100%"
          class="delete-button"
          @click="delRow(item, idx)"
        />
      </template>
    </van-swipe-cell>

    <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="full" @click="allChange">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送, <span @click="onEditAddr">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
import { GsNavBar, GsNoData } from "@/components";
export default {
  name: "Cart",
  components: {
    GsNavBar,
    GsNoData,
  },
  data() {
    return {
      loaded: false,
      full: false,
      list: [],
    };
  },
  computed: {
    total() {
      let sum = 0;
      this.list.map((el) => {
        if (el.checked) {
          sum += el.num * el.good_info.price;
        }
      });
      return sum * 100;
    },
  },
  watch: {
    list() {
      if (this.list.length === 0) this.full = false;
    },
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$api.fetchCartList().then((res) => {
        console.log("我的购物车", res);
        this.list = res.list;
        this.loaded = true;
      });
    },
    isFull() {
      const rowChecked = this.list.filter((el) => el.checked);
      this.full = rowChecked.length === this.list.length;
    },
    allChange() {
      // console.log("all");
      this.list.forEach((el) => {
        el.checked = this.full;
      });
      this.list = JSON.parse(JSON.stringify(this.list));
    },
    rowChange() {
      this.isFull();
    },
    delRow(item, idx) {
      this.$dialog
        .confirm({
          title: "提示",
          message: `确认删除商品 ${item.good_info.name} 吗？`,
        })
        .then(() => {
          // on confirm
          this.$api.fetchCartDel({ cart_id: item._id }).then(() => {
            this.list.splice(idx, 1);
            this.isFull();
          });
        })
        .catch(() => {});
    },
    updateNum(item, idx, num) {
      console.log("num", num);
      // 如果当前数据等于1，不能再减
      let params = {
        cart_id: item._id,
        newNum: item.num + num,
      };
      if (item.num === 1 && num === -1) {
        return false;
      }
      this.$api.fetchCartUpdate(params).then(() => {
        this.list[idx].num = params.newNum;
      });
    },
    onSubmit() {
      console.log("购买");
      const checkedList = this.list.filter((el) => el.checked);
      let ids = "";
      checkedList.map((el) => {
        ids += ";" + el._id;
      });
      this.$api.fetchCartSubmit({ ids }).then(() => {
        this.init();
      });
    },
    onEditAddr() {
      console.log("修改地址");
    },
  },
};
</script>

<style lang="scss" scoped>
.gs-cart {
  padding-top: 1.25rem;
  padding-bottom: 2.67rem;
  .van-swipe-cell {
    border-bottom: 1px solid #eeeeee;
    .van-card {
      background-color: white;
      padding-left: 0;
    }
  }
  .van-row {
    background-color: white;
    .row-btns {
      & > span {
        padding: 0 0.13rem;
        .van-button {
          padding: 0 0.2rem;
        }
      }
    }
  }
}
</style>
