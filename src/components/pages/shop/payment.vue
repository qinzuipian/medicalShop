<template>
    <div class="payment">
        <div class="top">
            <h2>
                <img src="./../../../assets/dui.jpg" v-show="this.$route.query.tradeState == 'SUCCESS'" alt="">
                <img src="./../../../assets/cuo.jpg" v-show="this.$route.query.tradeState == 'NOTPAY'" alt="">
                {{this.$route.query.tradeStateDesc}}   
            </h2>
            <p>
                <span>需支付：</span>
                <span>{{this.$route.query.totalFee/100}}元</span>
            </p>
            <p>
                <span>订单号：</span>
                <span>{{this.$route.query.outTradeNo}}</span>
            </p>
            <p>
                <el-button type="success" @click="shopGoon">继续购物</el-button>
            </p>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    shopGoon() {
      this.$router.push({ path: "/shop" });
    }
  },
  created() {
    console.log(this.$route.query);
  }
};
</script>



<style scoped>
.payment .top {
  margin-top: 60px;
}
.payment .top img {
  vertical-align: middle;
  width: 80px;
  margin-right: 20px;
}
.payment .top h2 {
  font-size: 24px;
  color: #f00;
  font-weight: normal;
}
.payment .top p {
  font-size: 16px;
  margin: 20px;
}
</style>
