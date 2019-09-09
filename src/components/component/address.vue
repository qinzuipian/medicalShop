<template>
    <div class="addressShow">
        <el-radio v-model="radioType" label="1">到医院取药</el-radio>
        <p>
            <span>医院地址：</span>
            <span>陕西省西安市高新区</span>
        </p>
        <p>
            <el-radio v-model="radioType" label="2">配送至</el-radio>
        </p>
        <p v-show="selectShow">
            <span>详细地址：</span>
            <el-input placeholder="填写详细地址" type="textarea" :rows="2" v-model="addressInput"></el-input>
        </p>
        <p style="text-align:center;">
            <el-button type="primary" @click="addressSure">确认</el-button>
            <el-button type="danger" @click="addressCancel">取消</el-button>
        </p>

        <el-dialog
          title="支付页面"
          :visible.sync="weixinVisible"
          width="30%"
          style="text-align:center;"
          :append-to-body='true'
          :before-close="handleClose">
          <img src="./../../assets/weixin.jpg" v-show="weixinShow == 1" alt="" style="width:100px; cursor:pointer" @click="imgData">
          <p style="margin:8px;" v-show="weixinShow == 1">点击图标支付</p>
          <img :src=this.imgurl style="width:80%"  v-show="weixinShow == 2"  alt="">
          <span slot="footer" class="dialog-footer" v-show="btnShow">
            <el-button type="primary" @click="weixinClose">确认支付完成</el-button>
            <!-- <el-button type="danger" @click="weixinVisible = false">取 消</el-button>          -->
          </span>
        </el-dialog>

       <!--  <div class="weixin" v-show="weixinShow">
          <img src="./../../assets/weixin.jpg" alt="" @click="imgData">
        </div> -->
    </div>
</template>



<script>
import axios from "axios";
export default {
  props: ["totalMoney", "orderListData"],
  data() {
    return {
      radioType: "1",
      addressInput: "",
      selectShow: false,
      weixinShow: 1,
      weixinVisible: false,
      erweimaShow: "",
      btnShow: false,
      imgurl: "",
      orderlistNUM: ""
    };
  },
  watch: {
    radioType(val) {
      console.log(val);
      if (val == "1") {
        this.selectShow = false;
      } else {
        this.selectShow = true;
      }
    }
  },
  methods: {
    addressCancel() {
      this.$emit("hidden");
    },
    addressSure() {
      // console.log(this.orderListData);
      var nameList = [];
      for (var i = 0; i < this.orderListData.length; i++) {
        nameList.push(this.orderListData[i].medicalName);
      }
      console.log(nameList);
      this.guid();
      axios({
        method: "post",
        url: axios.PARK_API + "jkda/wxpay/createOrder",
        data: {
          body: nameList,
          openid: localStorage.getItem("personId"),
          // totalFee: this.totalMoney * 100,
          totalFee: 1,
          tradeType: "NATIVE",
          outTradeNo: this.orderlistNUM
        },
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      })
        .then(res => {
          console.log(res);
          if (res.data.codeUrl) {
            this.weixinVisible = true;
            this.erweimaShow = res.data.codeUrl;
          } else {
          }
        })
        .catch(error => {
          // this.$message.error('请检查网络');
        });

      // this.$emit("hidden");
    },

    // 生成订单号
    guid() {
      var orderNum = (((1 + Math.random()) * 0x10000) | 0)
        .toString(16)
        .substring(1);
      this.orderlistNUM = orderNum + orderNum + orderNum + orderNum + orderNum;
      console.log(this.orderlistNUM);
    },
    handleClose() {
      this.weixinVisible = false;
    },
    imgData() {
      axios({
        method: "get",
        url:
          axios.PARK_API +
          "jkda/wxpay/createScanPayQrcodeMode2?" +
          "codeUrl=" +
          this.erweimaShow
        // data: {
        //   body: nameList,
        //   openid: localStorage.getItem("personId"),
        //   totalFee: this.totalMoney,
        //   // totalFee:0.01,
        //   tradeType: "NATIVE"
        // },
        // headers: {
        //   "Content-Type": "application/json;charset=UTF-8"
        // }
      })
        .then(res => {
          // console.log(res.data);
          this.weixinShow = 2;
          this.imgurl = "data:image/png;base64," + res.data;
          this.btnShow = true;
        })
        .catch(error => {
          // this.$message.error('请检查网络');
        });
    },
    // base64转图片
    base64ToBlob(urlData) {
      var arr = urlData.split(",");
      var mime = arr[0].match(/:(.*?);/)[1] || "image/png";
      // 去掉url的头，并转化为byte
      var bytes = window.atob(arr[1]);
      // 处理异常,将ascii码小于0的转换为大于0
      var ab = new ArrayBuffer(bytes.length);
      // 生成视图（直接针对内存）：8位无符号整数，长度1个字节
      var ia = new Uint8Array(ab);

      for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
      }

      return new Blob([ab], {
        type: mime
      });
      console.log(Blob);
    },
    weixinClose() {
      axios({
        method: "post",
        url: axios.PARK_API + "jkda/wxpay/queryOrder",
        data: {
          outTradeNo: this.orderlistNUM
        },
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      })
        .then(res => {
          /*  if (res.data.tradeState == "SUCCESS") {
          } else {
          } */
          this.$emit("hidden");
          if (this.$route.query.tradeState == "SUCCESS") {
            localStorage.removeItem("goodsdata");
          }

          this.$router.push({ path: "/payment", query: res.data });
        })
        .catch(error => {
          // this.$message.error('请检查网络');
        });
    }
  },
  created() {}
};
</script>


<style scoped>
.addressShow {
  text-align: left;
}
.addressShow .weixin {
  text-align: center;
}
.addressShow .el-dialog img {
  width: 80px;
  cursor: pointer;
}
.el-dialog__footer {
  text-align: center !important;
}
</style>

