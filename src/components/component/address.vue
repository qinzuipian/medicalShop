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

        <div class="weixin" v-show="weixinShow">
          <img src="./../../assets/weixin.jpg" alt="" @click="imgData">
        </div>
    </div>
</template>



<script>
export default {
  data() {
    return {
      radioType: "1",
      addressInput: "",
      selectShow: false,
      weixinShow: false
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
      this.weixinShow = true;
      // this.$emit("hidden");
    },
    imgData() {
      console.log("ok");
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
.addressShow .weixin img {
  width: 80px;
  cursor: pointer;
}
</style>

