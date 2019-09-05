<template>
    <div class="medicalMain">
        <div class="search">
          <el-input placeholder="输入查询的信息" style="width:40%;"></el-input>
          <el-button type="primary">搜索</el-button>
          <div class="info">
            <h2 class="el-icon-chat-line-round">药品信息</h2>
            <p class="line"></p>
            <div class="botinfo" v-for="(item,index) in medicalData" :key="index" @click="medicalDetail(item)">
              <div class="left">
                <img src="./../../assets/info.jpg" alt="">
              </div>
              <div class="right">
                <h3>{{item.drugName}}</h3>
                <p>
                  <span>药品编码：</span>
                  <span>{{item.drugCode}}</span>
                </p>
                <p>
                  <span>规格：</span>
                  <span>{{item.specification}}</span>
                </p>
                <p>
                  <span>价格：</span>
                  <span>{{item.price}}</span>
                </p>
              </div>
            </div>    
          </div>
        </div>

         <el-dialog title="药品详情" v-if='medicalVisible' :visible.sync="medicalVisible" width="60%" top="10px">
              <medical :medicalContent="medicalContent"></medical>
        </el-dialog>
    </div>
</template>

<script>
import medical from "./../component/medical";
import axios from "axios";
export default {
  data() {
    return {
      medicalData: [],
      medicalVisible: false,
      medicalContent: []
    };
  },
  methods: {
    medicalList() {
      axios({
        method: "post",
        url: axios.PARK_API + "drug/basdrugbatch/queryDrugList",
        params: {
          token: localStorage.getItem("token")
        }
        /*  headers: {
          "Content-Type": "application/json;charset=UTF-8"
        } */
      })
        .then(res => {
          if (res.data.code == 0) {
            this.medicalData = res.data.data;
          } else {
          }
        })
        .catch(error => {
          // this.$message.error('请检查网络');
        });
    },
    medicalDetail(item) {
      axios({
        method: "post",
        url: axios.PARK_API + "drug/basdrugbatch/queryMongoDrugInfo",
        params: {
          descId: item.descriptionCode
        }
        /*  headers: {
          "Content-Type": "application/json;charset=UTF-8"
        } */
      })
        .then(res => {
          if (res.data.code == 0) {
            this.medicalContent = res.data.data[0];
            this.medicalVisible = true;
          } else {
          }
        })
        .catch(error => {
          // this.$message.error('请检查网络');
        });
    }
  },
  components: { medical },
  created() {
    this.medicalList();
  }
};
</script>

<style scoped>
.medicalMain {
  padding: 10px;
}
.medicalMain .search {
  text-align: right;
}
.medicalMain .info {
  text-align: left;
  padding: 10px;
}
.medicalMain .info h2 {
  color: #00a2ff;
  font-weight: normal;
  padding: 0;
  margin: 4px;
  font-size: 20px;
}
.medicalMain .info .line {
  width: 100%;
  height: 1px;
  background-color: #00a2ff;
}
.medicalMain .info .botinfo {
  /* border-bottom: 1px solid #00a2ff; */
  height: 190px;
  cursor: pointer;
}
.medicalMain .info .botinfo .left,
.medicalMain .info .botinfo .right {
  float: left;
  margin-bottom: 20px;
}
.medicalMain .info .botinfo .left {
  width: 20%;
  text-align: center;
}
.medicalMain .info .botinfo .left img {
  width: 150px;
}
.medicalMain .info .botinfo .right {
  width: 80%;
  /* text-align: center; */
}
.medicalMain .info .botinfo .right h3 {
  margin: 0 0 8px 0;
  padding: 0;
  color: #00a2ff;
}
.medicalMain .info .botinfo .right p {
  margin: 8px 0 0 0;
  padding: 0;
}
.medicalMain .info .botinfo .right p span:nth-child(1) {
  color: gray;
}
.medicalMain .info .botinfo .right p span:nth-child(1),
.medicalMain .info .botinfo .right p span:nth-child(2) {
  font-size: 14px;
}
</style>
