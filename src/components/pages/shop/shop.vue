<template>
    <div class="shopMain">
        <ul>
          
              <li v-for="(item,index) in shoplistData" :key="index" @click="Limedical(item)">
                <!-- <router-link :to="{path:'/medicalShop',query: item}"> -->
                  <div>
                      <img :src="item.commodityPicture" alt="">
                      <p>￥{{item.commodityPrice}}</p>
                      <p>【{{item.name}} | {{item.hospitalName}}】</p>
                  </div>
                 <!-- </router-link>  -->
              </li>
         
        </ul>
    </div>
</template>



<script>
import axios from "axios";
export default {
  data() {
    return {
      shoplistData: []
    };
  },
  methods: {
    shopList() {
      axios({
        method: "post",
        url: axios.PARK_API + "drug/drug/commoditylist/queryDrugList",
        data: {},
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      })
        .then(res => {
          if (res.data.code == 0) {
            this.shoplistData = res.data.data;
            console.log(this.shoplistData);
            for (var i = 0; i < this.shoplistData.length; i++) {
              this.shoplistData[i].commodityPicture = this.shoplistData[
                i
              ].commodityPicture.split(";")[0];
            }
          } else {
          }
        })
        .catch(error => {
          // this.$message.error('请检查网络');
        });
    },
    Limedical(item) {
      this.$router.push({
        path: "/medicalShop",
        query: item
      });
    }
  },
  created() {
    this.shopList();
  }
};
</script>


<style scoped>
.shopMain ul {
  list-style: none;
}
.shopMain ul li {
  width: 25%;
  float: left;
  text-align: center;
  cursor: pointer;
}
.shopMain ul li img {
  width: 80%;
  height: 220px;
  /* width: 200px; */
}
.shopMain ul li p {
  margin: 0;
  padding: 0;
}
.shopMain ul li p:nth-child(2) {
  width: 80%;
  height: 30px;
  line-height: 30px;
  background-color: orangered;
  color: #fff;
  font-size: 18px;
  margin-left: 10%;
}
.shopMain ul li p:nth-child(3) {
  font-size: 14px;
  color: gray;
  text-align: left;
  width: 80%;
  /* background: rgba(0, 0, 0, 0.3); */
  margin-left: 10%;
  margin-bottom: 10px;
}
</style>
