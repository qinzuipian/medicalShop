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
                <tr>
                    <td>2018-12-02 12:25:30</td>
                    <td>回到家是否还行绝对不诉讼法公司电话比较多比较好的方便</td>
                    <td>
                        <el-button type="danger" size="mini" @click="canceldocBtn">取消预约</el-button>
                    </td>
                    <td>已预约</td>
                </tr>
                <tr>
                    <td>2018-12-02 12:25:30</td>
                    <td>回到家是否还行绝对不诉讼法公司电话比较多比较好的方便</td>
                    <td>
                        <el-button type="danger" size="mini">取消预约</el-button>
                    </td>
                    <td>取消预约</td>
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
                <tr>
                        <td>2018-12-02 12:25:30</td>
                        <td>回到家是否还行绝对不诉讼法公司电话比较多比较好的方便</td>
                        <td>
                            <el-button type="danger" size="mini" @click="cancelApp">取消预约</el-button>
                        </td>
                        <td>已预约</td>
                </tr>
                <tr>
                        <td>2018-12-02 12:25:30</td>
                        <td>回到家是否还行绝对不诉讼法公司电话比较多比较好的方便</td>
                        <td>
                            <el-button type="danger" size="mini">取消预约</el-button>
                        </td>
                        <td>取消预约</td>
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
    return {};
  },
  methods: {
    //   医生预约记录
    doctorlist() {
      axios({
        method: "post",
        url: axios.PARK_API + "jkda/basappointreg/list",
        data: {
          token: "",
          personId: "",
          limit: 1000
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
    },
    //医生预约取消
    canceldocBtn() {
      axios({
        method: "post",
        url: axios.PARK_API + "jkda/basappointreg/updateVisitStatus",
        data: {
          token: "",
          personId: "",
          packId: "",
          itemId: "",
          visitStatus: 3,
          doctorNo: ""
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
    },
    // 接种预约记录
    recordlist() {
      axios({
        method: "post",
        url: axios.PARK_API + "jkda/basvaccinationreg/list",
        data: {
          token: "",
          personId: "",
          limit: 1000
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
    },
    //接种取消预约
    cancelApp() {
      axios({
        method: "post",
        url: axios.PARK_API + "jkda/basvaccinationreg/updateVisitStatus",
        data: {
          token: "",
          personId: "",
          visitStatus: 3,
          vaccineId: ""
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

