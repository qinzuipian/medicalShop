<template>
    <div class="Register">
        <el-tabs type="border-card">
        <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i> 医生预约</span>
            <table cellspacing=0 cellpadding=10>
                <tr>
                    <th>下单时间</th>
                    <th>订单内容</th>
                    <th>操作</th>
                    <th>状态</th>
                </tr>
                <tr v-for="(item,index) in doctorData" :key="index">
                    <td>{{item.hbDate}}</td>
                    <td>{{item.taskName}}</td>
                    <td>
                        <el-button type="danger" size="mini" @click="canceldocBtn(item)">取消预约</el-button>
                    </td>
                    <td>{{item.visitStatus==1?"已预约":"已取消"}}</td>
                </tr>
               
            </table>
        </el-tab-pane>
        <el-tab-pane label="接种预约">
            <table cellspacing=0 cellpadding=10>
                <tr>
                        <th>下单时间</th>
                        <th>订单内容</th>
                        <th>操作</th>
                        <th>状态</th>
                </tr>
                <tr v-for="(item,index) in recordData" :key="index">
                        <td>{{item.hbDate}}</td>
                        <td>{{item.vaccineName}}</td>
                        <td>
                            <el-button type="danger" size="mini" @click="cancelApp(item)">取消预约</el-button>
                        </td>
                        <td>{{item.visitStatus == 0?"已预约":"已取消"}}</td>
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
      doctorData: [],
      recordData: []
    };
  },
  methods: {
    //医生预约记录
    doctorlist() {
      axios({
        method: "post",
        url: axios.PARK_API + "jkda/jkda/basappointreg/list",
        params: {
          token: localStorage.getItem("token"),
          personId: localStorage.getItem("personId"),
          limit: 1000
        } /* ,
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        } */
      })
        .then(res => {
          if (res.data.code == 0) {
            this.doctorData = res.data.page.list;
          } else {
          }
        })
        .catch(error => {
          // this.$message.error('请检查网络');
        });
    },
    //医生预约取消
    canceldocBtn(item) {
      this.$confirm("取消订单, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          axios({
            method: "post",
            url: axios.PARK_API + "jkda/jkda/basappointreg/updateVisitStatus",
            data: {
              token: localStorage.getItem("token"),
              personId: localStorage.getItem("personId"),
              packId: item.packId,
              itemId: item.itemId,
              visitStatus: 3,
              doctorNo: item.doctorNo
            },
            headers: {
              "Content-Type": "application/json;charset=UTF-8"
            }
          })
            .then(res => {
              if (res.data.code == 0) {
              } else {
              }
            })
            .catch(error => {
              // this.$message.error('请检查网络');
            });
        })
        .catch(() => {});
    },
    // 接种预约记录
    recordlist() {
      axios({
        method: "post",
        url: axios.PARK_API + "jkda/jkda/basvaccinationreg/list",
        params: {
          token: localStorage.getItem("token"),
          personId: localStorage.getItem("personId"),
          limit: 1000
        } /* ,
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        } */
      })
        .then(res => {
          if (res.data.code == 0) {
            this.recordData = res.data.page.list;
          } else {
          }
        })
        .catch(error => {
          // this.$message.error('请检查网络');
        });
    },
    //接种取消预约
    cancelApp(item) {
      this.$confirm("取消订单, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          axios({
            method: "post",
            url: axios.PARK_API + "jkda/jkda/basvaccinationreg/updateVisitStatus",
            data: {
              token: localStorage.getItem("token"),
              personId: localStorage.getItem("personId"),
              visitStatus: 3,
              vaccineId: item.vaccineId
            },
            headers: {
              "Content-Type": "application/json;charset=UTF-8"
            }
          })
            .then(res => {
              if (res.data.code == 0) {
                this.$message.success("预约取消成功");
                this.recordlist();
              } else {
              }
            })
            .catch(error => {
              // this.$message.error('请检查网络');
            });
        })
        .catch(() => {});
    }
  },
  created() {
    this.doctorlist();
    this.recordlist();
  }
};
</script>


<style scoped>
.Register {
  padding: 10px;
}
.Register table {
  text-align: center;
  width: 100%;
}
.Register table th {
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  background-color: #f5f5f5;
  font-size: 14px;
}
.Register table td {
  font-size: 14px;
}
</style>

