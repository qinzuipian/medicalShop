<template>
  <div class="homeMain">
      <div class="top">
        <span class="el-icon-s-home"></span>
        <span>祝您健康！</span>
        <div class="right">
          <span class="el-icon-user-solid"></span>
          <span>您好，{{user}}</span>
          <span class="getOut" @click="getOut">退出</span>
        </div>
      </div>
      <div class="menulist">
          <el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="home">首页</el-menu-item>
            <el-menu-item index="ownOrder">我的订单</el-menu-item>   
            <el-menu-item index="medical">药品信息</el-menu-item>
            <el-menu-item index="shop">我的商城</el-menu-item>
            <el-menu-item index="shopCar">购物车
              <el-badge class="mark" is-dot v-show="dotShow"/>
            </el-menu-item>
          </el-menu>
      </div>
     <router-view></router-view>
  </div>
</template>

<script>
import { vm, COUNTSTR } from "./kits/vm.js";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      value: "0",
      dotShow: false,
      user: localStorage.getItem("user")
    };
  },
  computed: {
    activeIndex() {
      return this.$route.path.replace("/", "");
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    userInit() {
      if (localStorage.getItem("token")) {
        axios({
          method: "post",
          url: axios.PARK_API + "jkda/jkda/ehrpiruser/getUser",
          params: {
            token: localStorage.getItem("token")
          }
        })
          .then(res => {
            if (res.data.code == 0) {
              localStorage.setItem("personId", res.data.UserInfo.id); // 保存personId;
              localStorage.setItem("teamCode", res.data.UserInfo.teamCode); // 签约的团队code
            } else if (res.data.code == 501) {
              this.$confirm(
                res.data.msg + "前去我的设置绑定身份信息？",
                "提示",
                {
                  confirmButtonText: "确定",
                  cancelButtonText: "取消",
                  type: "warning"
                }
              )
                .then(() => {
                  this.$router.push({ path: "/setting" });
                })
                .catch(() => {});
            }
          })
          .catch(error => {
            // this.$message.error('请检查网络');
          });
      } else {
        this.$router.push({ path: "/" });
      }
    },
    getOut() {
      axios({
        method: "post",
        url: axios.PARK_API + "jkda/jkda/ehrpiruser/logout",
        params: {
          token: localStorage.getItem("token"),
          deviceType: 1
        } /* ,
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        } */
      })
        .then(res => {
          if (res.data.code == 0) {
            this.$router.push({ path: "/" });
            localStorage.removeItem("token");
          } else {
          }
        })
        .catch(error => {
          // this.$message.error('请检查网络');
        });
    }
  },
  created() {
    // 利用 vm.$on() 来注册 COUNT这个常量代表的事件
    var _this = this;
    vm.$on(COUNTSTR, function(count) {
      //		1.0 将count值追加到购物车中
      console.log(count);
      if (count > 0) {
        _this.dotShow = true;
      } else {
        _this.dotShow = false;
      }
    });

    if (
      localStorage.getItem("goodsdata") &&
      localStorage.getItem("goodsdata") != "[]"
    ) {
      this.dotShow = true;
    } else {
      this.dotShow = false;
    }

    this.userInit();
  }
};
</script>

<style scoped>
.homeMain .top {
  width: 100%;
  height: 30px;
  background: #f7f7f7;
}
.homeMain .top span {
  color: gray;
  font-size: 14px;
  float: left;
  line-height: 30px;
}
.homeMain .top .el-icon-s-home {
  color: #00a2ff;
  margin-left: 10%;
}
.homeMain .getOut {
  cursor: pointer;
  color: #00a2ff !important;
}
.homeMain .right {
  float: right;
  margin-right: 10%;
}
.homeMain .right .el-icon-user-solid {
  color: #00a2ff;
}
.homeMain .right span:nth-child(2) {
  margin-right: 20px;
}
.el-menu-item:nth-child(1) {
  margin-left: 18%;
}
.el-menu-item {
  font-size: 16px;
  padding: 0 60px;
}

.mark {
  margin-top: -20px;
  margin-right: 40px;
}
</style>
