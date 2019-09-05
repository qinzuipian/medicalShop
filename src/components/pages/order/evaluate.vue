<template>
    <div class="evaluate">
        <el-tabs type="border-card">
            <el-tab-pane>
                <span slot="label">未评价</span>
                <table cellspacing=0 cellpadding=10>
                    <tr>
                        <th>下单时间</th>
                        <th>订单内容</th>
                        <th>金额</th>
                        <th>操作</th>
                    </tr>
                    <tr v-for="(item,index) in noSuggestData" :key="index">
                        <td>{{item.modifyDate}}</td>
                        <td>{{item.taskName}}</td>
                        <td>
                            <el-button type="primary" size="mini">评价</el-button>
                        </td>
                    </tr>
                               
                </table>
            </el-tab-pane>
            <el-tab-pane label="已评价">
                <table cellspacing=0 cellpadding=10>
                    <tr>
                        <th>下单时间</th>
                        <th>订单内容</th>
                        <th>评价</th>
                    </tr>
                    <tr v-for="(item,index) in suggestData" :key="index">
                        <td>{{item.modifyDate}}</td>
                        <td>{{item.taskName}}</td>
                        <td>{{item.scoreRemark}}</td>
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
      suggestData: [],
      noSuggestData:[]
    
    };
  },
  methods: {
    suggestlist() {
      axios({
        method: "post",
        url: axios.PARK_API + "jkda/jkda/basservicetask/queryScoreList",
        params: {
          teamCode: localStorage.getItem("teamCode"),
          personId: localStorage.getItem("personId"),
          visible: 1,
          token: localStorage.getItem("token")
        } /* ,
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        } */
      })
        .then(res => {
          if (res.data.code == 0) {
            this.suggestData = res.data.data;
          } else {
          }
        })
        .catch(error => {
          // this.$message.error('请检查网络');
        });
    },
    noSuggest() {
      axios({
        method: "post",
        url: axios.PARK_API + "jkda/jkda/basservicetask/queryScoreList",
        params: {
          teamCode: localStorage.getItem("teamCode"),
          personId: localStorage.getItem("personId"),
          invisible: 1,
          token: localStorage.getItem("token")
        } /* ,
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        } */
      })
        .then(res => {
          if (res.data.code == 0) {
            this.noSuggestData = res.data.data;
          } else {
          }
        })
        .catch(error => {
          // this.$message.error('请检查网络');
        });
    }
  },
  created() {
    this.suggestlist();
    this.noSuggest();
  }
};
</script>


<style scoped>
.evaluate {
  padding: 10px;
}
.evaluate table {
  text-align: center;
  width: 100%;
}
.evaluate table th {
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  background-color: #f5f5f5;
  font-size: 14px;
}
.evaluate table td {
  font-size: 14px;
}
</style>


