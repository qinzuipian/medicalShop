<template>
    <div class="medicalShop">
        <div class="medLeft">
            <img :src=medical.commodityPicture alt="">
            <p>
              <span>温馨提示：</span>
              <span>图片均为亮健网对原品的真实拍摄，仅供参考；如遇新包装上市可能存在上新滞后，请以实物为准。</span>            
            </p>
        </div>
        <div class="medRight">
          <h2>{{medical.name}}</h2>
          <!-- <p>解表清热，疏风止痛。用于表邪未解、郁里化热引起的重症感冒，症见恶寒、高热、头痛、四肢酸痛、咽痛、鼻塞、咳嗽等。</p> -->
          <p class="red">
            <span>￥</span>
            <span>{{medical.commodityPrice}}</span>
          </p>
         <!--  <p>
            <span>通用名：</span>
            <span>{{medical.name}}</span>
          </p>
          <p>
            <span>批准文号：</span>
            <span>国药准字Z44022468 （国家食药总局查询）</span>
          </p> -->
          <p>
            <span>所属医院：</span>
            <span>{{medical.hospitalName}}</span>
          </p>
          <p>
            <span>类型：</span>
            <span>{{medical.commodityInfo}}</span>
          </p>
          <p class="ballshow">
            <span>数量：</span>
            <el-input-number v-model="Addnum" @change="handleChange" :min="1" :max="100" label="描述文字"></el-input-number>
            <transition name="show" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
						<div v-if="isshow" class="ball"></div>
					</transition>
          </p>
          <p class="promise">
            <span>我们承诺：</span>     
            <span>正</span>
            <span>确保正品</span>
            <span>专</span>
            <span>专业药师</span>
            <span>货到付款</span>
            <span>七天无理由退换</span>
          </p>
          <p>
            <el-button type="danger" @click="shopCarAdd">加入购物车</el-button>
          </p>
          <div class="explain">
              <p>药品说明书</p>
              <div class="medicontent" v-for="(it,index) in medicalContent" :key="index">
                  <p>
                    {{index}}:{{it}}
                  </p>
    
              </div>
          </div>
        </div>
    </div>
</template>


<script>
//使用vm对象
import { vm, COUNTSTR } from "./../../kits/vm.js";
import { setItem, valueObj } from "./../../kits/localSg.js";
import axios from "axios";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      Addnum: "",
      isshow: false, //控制小球的显示状态
      medical: "",
      medicalContent: []
    };
  },
  mounted() {
    //console.log(this.$route.query);
    this.medical = this.$route.query;
    //console.log(this.medical);
  },
  methods: {
    handleChange() {},
    //动画3个方法
    beforeEnter(el) {
      //设定小球的初始位置
      el.style.transform = "translate(0px,0px)";
    },
    enter(el, done) {
      //保证小球出现动画
      el.offsetWidth;
      //设置小球的结束位置
      el.style.transform = "translate(578px,-258px)";
      //结束动画
      done();
    },
    afterEnter(el) {
      //重置小球的初始状态
      this.isshow = !this.isshow;
    },
    shopCarAdd() {
      // 1.0 触发事件
      vm.$emit(COUNTSTR, this.Addnum);
      // 2.0 将数据保存到localStroage中
      valueObj.goodsid = this.medical.drugId;
      valueObj.count = this.Addnum;
      valueObj.medicalName = this.medical.name;
      valueObj.medicalPrice = this.medical.commodityPrice;
      setItem(valueObj);
      //3.0实现小球动画
      this.isshow = !this.isshow;
    },
    // 药品说明书
    medicalDetail() {
      console.log(this.medical.drugId);
      axios({
        method: "post",
        url: axios.PARK_API + "drug/basdrugbatch/queryMongoDrugInfo",
        params: {
          descId: this.medical.descId
        }
        /*  headers: {
          "Content-Type": "application/json;charset=UTF-8"
        } */
      })
        .then(res => {
          if (res.data.code == 0) {
            this.medicalContent = res.data.data[0];
          } else {
          }
        })
        .catch(error => {
          // this.$message.error('请检查网络');
        });
    }
  },
  created() {
    var _this = this;
    setTimeout(function() {
      _this.medicalDetail();
    }, 300);
  }
};
</script>


<style scoped>
.medicalShop {
  padding: 10px;
}
.medicalShop .medLeft {
  width: 21%;
  height: 100%;
  float: left;
  padding: 10px;
}
.medicalShop .medLeft img {
  width: 280px;
  height: 300px;
  border: 1px solid gray;
}
.medicalShop .medLeft p {
  text-align: left;
}
.medicalShop .medLeft p span:nth-child(1) {
  font-size: 14px;
  color: orangered;
}
.medicalShop .medLeft p span:nth-child(2) {
  font-size: 14px;
  color: gray;
}
.medicalShop .medRight {
  width: 70%;
  float: left;
  text-align: left;
  padding-left: 10px;
}
.medicalShop .medRight h2 {
  font-size: 18px;
  font-weight: normal;
  margin: 0;
}
.medicalShop .medRight p {
  font-size: 14px;
  color: gray;
  margin: 6px;
}
.medicalShop .medRight .red span:nth-child(1),
.medicalShop .medRight .red span:nth-child(2) {
  color: orangered;
  font-weight: 700;
}
.medicalShop .medRight .red span:nth-child(1) {
  font-size: 20px;
}
.medicalShop .medRight .red span:nth-child(2) {
  font-size: 28px;
}
.medicalShop .medRight .explain p:nth-child(1) {
  /*  height: 20px;
  line-height: 20px; */
  padding: 10px;
  background-color: #d9f1ff;
  border-top: 1px solid #00a2ff;
}

.medicalShop .medRight .explain .medicontent p:nth-child(1) {
  background-color: transparent;
  border-top: 0;
  padding: 0;
}
.medicalShop .medRight .promise span:nth-child(2),
.medicalShop .medRight .promise span:nth-child(4) {
  font-size: 16px;
  font-weight: 700;
  color: #00a2ff;
  border: 1px solid #00a2ff;
  margin-left: 10px;
}
.medicalShop .medRight .ballshow {
  position: relative;
}
.medicalShop .medRight .ballshow .ball {
  background-color: #f56c6c;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  position: absolute;
  left: 150px;
  top: 10px;
  transition: all 0.6s ease;
  z-index: 100;
}
</style>

