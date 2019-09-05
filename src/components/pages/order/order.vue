<template>
   <div class="orderMain">
       <p>我的订单</p>
       <div class="orderList">
           <div class="listLeft">
               <img src="./../../../assets/huanzhe.png" alt="">
               <p>182****3047</p>
               <el-menu
                :default-active="activeIndex"
                router
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="ownOrder">
                    <i class="el-icon-tickets"></i>
                    <span slot="title">我的订单</span>
                </el-menu-item>
                <el-menu-item index="Register">
                    <i class="el-icon-folder-add"></i>
                    <span slot="title">我的挂号</span>
                </el-menu-item>
               <!--  <el-menu-item index="3">
                    <i class="el-icon-s-custom"></i>
                    <span slot="title">我的医生</span>
                </el-menu-item> -->
                <el-menu-item index="setting">
                    <i class="el-icon-setting"></i>
                    <span slot="title">我的设置</span>
                </el-menu-item>
                <!-- <el-menu-item index="evaluate">
                    <i class="el-icon-s-comment"></i>
                    <span slot="title">就医评价</span>
                </el-menu-item> -->
              </el-menu>
           </div>
          <router-view class="rightContent"></router-view>
       </div>
   </div>
</template>



<script>
export default {
  data() {
    return {};
  },
  computed: {
    activeIndex() {
      return this.$route.path.replace("/", "");
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath[0]);
      var keyVal = key.split("/");
      // console.log(keyVal[1]);
      // this.$router.push({ path: "/" + keyVal });
    }
  },
  created() {
    this.$router.push({ path: "/ownOrder" });
  }
};
</script>



<style scoped>
.orderMain {
  margin-top: 10px;
}
.orderMain p {
  height: 30px;
  line-height: 30px;
  background-color: #d9f1ff;
  border-top: 2px solid dodgerblue;
  color: dodgerblue;
  text-align: left;
  font-weight: 700;
  font-size: 14px;
  padding: 10px;
}
.orderList {
  padding: 10px;
}
.orderList .listLeft {
  width: 18%;
  float: left;
  border: 1px solid #f1f1f1;
}
.orderList .listLeft p {
  border: 0;
  background-color: transparent;
  color: #000;
  font-weight: normal;
  text-align: center;
  margin: 0;
  padding: 0;
}
.orderList .listLeft img {
  width: 80px;
  margin-top: 10px;
}
.orderList .rightContent {
  width: 78%;
  height: 20px;
  float: left;
}
</style>


