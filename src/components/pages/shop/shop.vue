<template>
    <div class="shopMain">
        <ul>
          <router-link to="/medicalShop">
              <li>
                <img src="./../../../assets/shop1.jpg" alt="">
                <p>￥56</p>
                <p>【尼群地平片|本品主要成份及其化学名称为：2,6-二甲基-4-(3-硝基苯基)-1，4-二氢-3，5-吡啶二甲酸甲乙酯。】</p>
              </li>
          </router-link> 
          <li>
            <img src="./../../../assets/shop1.jpg" alt="">
            <p>￥56</p>
            <p>【尼群地平片|本品主要成份及其化学名称为：2,6-二甲基-4-(3-硝基苯基)-1，4-二氢-3，5-吡啶二甲酸甲乙酯。】</p>
          </li>
          <li>
            <img src="./../../../assets/shop1.jpg" alt="">
            <p>￥56</p>
            <p>【尼群地平片|本品主要成份及其化学名称为：2,6-二甲基-4-(3-硝基苯基)-1，4-二氢-3，5-吡啶二甲酸甲乙酯。】</p>
          </li>
          <li>
            <img src="./../../../assets/shop1.jpg" alt="">
            <p>￥56</p>
            <p>【尼群地平片|本品主要成份及其化学名称为：2,6-二甲基-4-(3-硝基苯基)-1，4-二氢-3，5-吡啶二甲酸甲乙酯。】</p>
          </li>
          <li>
            <img src="./../../../assets/shop1.jpg" alt="">
            <p>￥56</p>
            <p>【尼群地平片|本品主要成份及其化学名称为：2,6-二甲基-4-(3-硝基苯基)-1，4-二氢-3，5-吡啶二甲酸甲乙酯。】</p>
          </li>
          <li>
            <img src="./../../../assets/shop1.jpg" alt="">
            <p>￥56</p>
            <p>【尼群地平片|本品主要成份及其化学名称为：2,6-二甲基-4-(3-硝基苯基)-1，4-二氢-3，5-吡啶二甲酸甲乙酯。】</p>
          </li>
          <li>
            <img src="./../../../assets/shop1.jpg" alt="">
            <p>￥56</p>
            <p>【尼群地平片|本品主要成份及其化学名称为：2,6-二甲基-4-(3-硝基苯基)-1，4-二氢-3，5-吡啶二甲酸甲乙酯。】</p>
          </li>
          <li>
            <img src="./../../../assets/shop1.jpg" alt="">
            <p>￥56</p>
            <p>【尼群地平片|本品主要成份及其化学名称为：2,6-二甲基-4-(3-硝基苯基)-1，4-二氢-3，5-吡啶二甲酸甲乙酯。】</p>
          </li>
          <li>
            <img src="./../../../assets/shop1.jpg" alt="">
            <p>￥56</p>
            <p>【尼群地平片|本品主要成份及其化学名称为：2,6-二甲基-4-(3-硝基苯基)-1，4-二氢-3，5-吡啶二甲酸甲乙酯。】</p>
          </li>
          <li>
            <img src="./../../../assets/shop1.jpg" alt="">
            <p>￥56</p>
            <p>【尼群地平片|本品主要成份及其化学名称为：2,6-二甲基-4-(3-硝基苯基)-1，4-二氢-3，5-吡啶二甲酸甲乙酯。】</p>
          </li>
        </ul>
    </div>
</template>



<script>
export default {
  data() {
    return {};
  },
  methods: {
    liClick() {
      this.$router.push({ path: "/shop/medicalShop" });
    }
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
