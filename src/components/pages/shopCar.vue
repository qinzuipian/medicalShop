<template>
    <div class="shopCar">
        <div class="allOrder">
            <div class="left">
                <span>祛痘淡化痘印修复敏感皮肤芦荟胶正品</span>
                <p>
                    <span>尺码</span>
                    <span>一支装</span>
                </p>
            </div>
            <div class="right">
               <span> ￥39.00</span>
            </div>
            <div class="bot">
                <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                <el-button type="danger" @click="orderDelete">删除</el-button>
            </div>
        </div>

        <div class="allOrder">
            <div class="left">
                <span>培哚普利吲达帕胺片</span>
                <p>
                    <span>尺码</span>
                    <span>一瓶装</span>
                </p>
            </div>
            <div class="right">
               <span> ￥89.00</span>
            </div>
            <div class="bot">
                <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                <el-button type="danger">删除</el-button>
            </div>
        </div>

        <div class="carBot">
            <span>总金额</span>
            <span>￥118</span>
            <span>（不含运费）</span>
            <p>
                <el-button type="success" class="btn" @click="resultType">结算</el-button>
            </p>
            
        </div>
        <el-dialog title="填写配送方式" v-if='addressVisible' :visible.sync="addressVisible" width="40%" top="10px">
              <Address></Address>
        </el-dialog>
    </div>
</template>


<script>
import Address from "./../component/address";
import { getgoodsObject, updateData, remoteItem } from "./../kits/localSg.js";
import axios from "axios";
export default {
  data() {
    return {
      num: 1,
      addressVisible: false
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    orderDelete() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      });
    },

    resultType() {
      this.addressVisible = true;
    },

    getdatalist() {
      //				1.0 从localstorage中获取到所有的商品id值
      //				obj的格式：{
      //					87:4,
      //					 88:1
      //					 }
      var obj = getgoodsObject();
      //				2.0 将id值按照 api的参数格式提交给api
      var idstring = "";
      for (var key in obj) {
        idstring += key + ",";
      }
      console.log(obj);
      idstring = idstring.substring(0, idstring.length - 1);

      //3.0 ajax请求这个api获取到完整的商品数据信息赋值给this.datalist
      /*  var url = common.apidomain + "/api/goods/getshopcarlist/" + idstring;
      this.$http.get(url).then(function(res) {
        //状态值的判断
        if (res.body.status != 0) {
          Toast(res.body.message);
          return;
        }
        //					将locaStorage中的所有的商品对应的count的值赋值给message中每个对象的cou
        res.body.message.forEach(item => {
          item.cou = obj[item.id];

          //	为了解决一个bug所以必须在此处初始化values数组全部为false
          this.value.push(false);
        });

        this.datalist = res.body.message;
      }); */
    },

    orderDelete(goodsid, index) {
      console.log(goodsid, index);
      //			1.0 将this.value数组中的index这个位置的值移除(当移除了这个值的时候就会自动触发计算属性totalcount的执行)
      this.value.splice(index, 1);
      //			2.0 将this.datalist中的index这个位置的值移除(当移除了这个值的时候就会自动触发计算属性totalcount的执行)
      this.datalist.splice(index, 1);
      //			3.0 将localStroage中的goodsid对应的所有值移除
      remoteItem(goodsid);
    },

    updateData(resObj) {
      console.log(resObj)
    }
  },
  created() {
    this.getdatalist();
    this.updateData();
  },
  components: {
    Address
  }
};
</script>

<style scoped>
.shopCar {
  margin-top: 10px;
}
.shopCar .allOrder {
  width: 80%;
  background-color: #f5f5f5;
  margin: 10px auto;
  border-radius: 8px;
  height: 150px;
}
.shopCar .allOrder .left {
  width: 68%;
  float: left;
  height: 80px;
  text-align: left;
  padding: 10px;
}
.shopCar .allOrder .left span:nth-child(1) {
  font-size: 16px;
  color: dimgray;
}
.shopCar .allOrder .left p span:nth-child(1),
.shopCar .allOrder .left p span:nth-child(2) {
  font-size: 12px;
  color: #000;
}

.shopCar .allOrder .right {
  width: 28%;
  float: left;
  height: 80px;
  padding: 10px;
}
.shopCar .allOrder .right span {
  font-size: 22px;
  color: orangered;
  font-weight: 700;
}
.shopCar .allOrder .right p {
  color: gray;
  font-size: 14px;
}
.shopCar .allOrder .bot {
  text-align: center;
  padding: 10px;
}
.shopCar .allOrder .bot button {
  float: right;
}
.carBot {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
}
.carBot span:nth-child(2) {
  color: orangered;
  font-weight: 700;
  font-size: 20px;
}
</style>
