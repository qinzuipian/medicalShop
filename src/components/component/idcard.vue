<template>
    <div class="idcard">
        <span>姓名：</span>
        <el-input placeholder="" v-model="idcardData.姓名.words" style="width:220px"></el-input>
        <p>
            <span>身份证号码：</span>
            <el-input placeholder="" v-model="idcardData.公民身份号码.words" style="width:220px"></el-input>
        </p>
        <p>
            <span>民族：</span>
            <el-input placeholder="" v-model="idcardData.民族.words" style="width:220px"></el-input>
        </p>
        <p>
            <span>性别：</span>
            <el-input placeholder="" v-model="idcardData.性别.words" style="width:220px"></el-input>
        </p>
        <p>
            <span>出生日期：</span>
            <el-input placeholder="" v-model="idcardData.出生.words" style="width:220px"></el-input>
        </p>
        <p>
            <span>住址：</span>
            <el-input placeholder="" v-model="idcardData.住址.words" style="width:300px"></el-input>
        </p>
        <p style="text-align:center;">
            <el-button type="primary" @click="detailSure">确认</el-button>
        </p>
    </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["idcardData"],
  data() {
    return {};
  },
  methods: {
    detailSure() {
      axios({
        method: "post",
        url: axios.PARK_API + "jkda/jkda/ehrpiruser/bindIdNo",
        params: {
          idNo: this.idcardData.公民身份号码.words,
          //   idNo: "360502197711127133",
          mobile: localStorage.getItem("user"),
          token: localStorage.getItem("token"),
          idCardImagePath: localStorage.getItem("idCardpath")
        }
      })
        .then(res => {
          if (res.data.code == 0) {
              this.$message.success("绑定成功");
              this.$emit("hidden");
          } else {
          }
        })
        .catch(error => {
          // this.$message.error('请检查网络');
        });
    }
  },
  created() {
    console.log(this.idcardData);
  }
};
</script>



<style scoped>
.idcard {
  text-align: left;
}
</style>
