<template>
    <div class="ownOrder">
      <!--<div class="orderData">
            <span>状态：</span>
             <el-select v-model="state" placeholder="请选择">
                <el-option
                v-for="item in stateOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <span class="demonstration">时间：</span>
            <el-date-picker
            v-model="startDate"
            type="date"
            placeholder="选择开始日期">
            </el-date-picker>
            <span>至</span>
            <el-date-picker
            v-model="endDate"
            type="date"
            placeholder="选择开始日期">
            </el-date-picker>
            <el-button type="primary">确认</el-button>
        </div> -->
        <el-tabs type="border-card">
            <el-tab-pane label="图文咨询">
                <table cellspacing=0 cellpadding=10>
                    <tr>
                        <th>下单时间</th>
                        <th>订单内容</th>
                        <th>金额</th>
                        <th>操作</th>
                        <th>状态</th>
                    </tr>
                    <tr>
                        <td>2018-12-02 12:25:30</td>
                        <td>回到家是否还行绝对不诉讼法公司电话比较多比较好的方便</td>
                        <td>36</td>
                        <td>未操作</td>
                        <td>否</td>
                    </tr>
                   <tr>
                        <td>2018-12-02 12:25:30</td>
                        <td>回到家是否还行绝对不诉讼法公司电话比较多比较好的方便</td>
                        <td>36</td>
                        <td>未操作</td>
                        <td>否</td>
                    </tr>
                </table>
            </el-tab-pane>
            <el-tab-pane label="药品订单">
                <div class="allOrder" v-for="(item,index) in medicalData" :key="index">
                    <div class="left">
                        <span>{{JSON.parse(item.body).join(',')}}</span>
                        <p>
                            <span>尺码</span>
                            <span>一支装</span>
                        </p>
                       <p class="no">不支持换货</p>
                    </div>
                    <div class="right">
                       <span>{{item.outTradeNo}}</span>
                       <p>x {{JSON.parse(item.body).length}}</p>
                    </div>
                    <div class="bot">
                        <span>共{{JSON.parse(item.body).length}}件商品</span>
                        <span>订单价格</span>
                        <span>￥{{item.totalFee/100}}</span>
                    </div>
                </div>
               
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label">即时问诊</span>
                <table cellspacing=0 cellpadding=10>
                    <tr>
                        暂未开通
                    </tr>
                </table>
              
            </el-tab-pane>
            <el-tab-pane label="电话咨询">
                <table cellspacing=0 cellpadding=10>
                    <tr>
                        暂未开通
                    </tr>
                </table>
            </el-tab-pane> 
        </el-tabs>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      state: "",
      stateOptions: [
        {
          value: "1",
          label: "全部"
        },
        {
          value: "2",
          label: "支付完成"
        },
        {
          value: "3",
          label: "待支付"
        },
        {
          value: "4",
          label: "取消订单"
        }
      ],
      startDate: "",
      endDate: "",
      medicalData:[]
    };
  },
  methods: {
    medicalList() {
      axios({
        method: "post",
        url: axios.PARK_API + "jkda/jkda/wxpayorder/list",
        params: {
          openid: localStorage.getItem("personId")
        }
      })
        .then(res => {
          if (res.data.code == 0) {
            this.medicalData = res.data.page.list;
          } else {
          }
        })
        .catch(error => {
          // this.$message.error('请检查网络');
        });
    }
  },
  created() {
    this.medicalList();
  }
};
</script>


<style scoped>
.ownOrder {
  margin-left: 10px;
}
.ownOrder .orderData {
  height: 40px;
  line-height: 40px;
  border: 1px solid #00a2ff;
  text-align: left;
  padding: 10px;
  margin-bottom: 10px;
}
.ownOrder .orderData span {
  font-size: 14px;
}

.ownOrder table {
  text-align: center;
  width: 100%;
}
.ownOrder table th {
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  background-color: #f5f5f5;
  font-size: 14px;
}
.ownOrder table td {
  font-size: 14px;
}
.ownOrder .allOrder {
  width: 85%;
  background-color: #f5f5f5;
  margin: 10px auto;
  border-radius: 8px;
  height: 150px;
}
.ownOrder .allOrder .left {
  width: 68%;
  float: left;
  height: 100px;
  text-align: left;
  padding: 10px;
  /* margin-left: 10px; */
}
.ownOrder .allOrder .left span:nth-child(1) {
  font-size: 16px;
  color: dimgray;
}
.ownOrder .allOrder .left p span:nth-child(1),
.ownOrder .allOrder .left p span:nth-child(2) {
  font-size: 12px;
  color: #000;
}
.ownOrder .allOrder .left .no {
  color: #0f0;
  font-size: 14px;
}
.ownOrder .allOrder .right {
  width: 25%;
  float: left;
  height: 100px;
  padding: 10px;
}
.ownOrder .allOrder .right span {
  font-size: 14px;
}
.ownOrder .allOrder .right p {
  color: gray;
  font-size: 14px;
}
.ownOrder .allOrder .bot {
  text-align: right;
  padding: 10px;
}
.ownOrder .allOrder .bot span {
  margin-right: 10px;
}
.ownOrder .allOrder .bot span:nth-child(1) {
  font-size: 14px;
  color: gray;
}
</style>
