<template>
    <div class="doctor">
        <div class="docTop">
            <div class="img">
                <img src="./../../../assets/doc.png" alt="">
            </div>
            <div class="imgfont">
                <span>张晓云</span>
                <span>主任医师</span>
                <p>★★★★★
                    <span>(1000条评价)</span>
                </p>
                <p>
                    <span class="el-icon-thumb"></span>
                    <span>擅长</span>
                    <span>高危妊娠、早产、多胎妊娠.</span>
                </p>
                <p>
                    <span class="el-icon-user"></span>
                    <span>简介</span>
                    <span>主任医师、1993年毕业于上海医科大学医学系，福建省医学会妇产科分会青年委员，厦门医学会妇产科分会围产医学分会委员。多年来一直从事妇产科临床与 教学工作。2004年进修于上海国际和平妇婴保健院和江苏省人民医院生殖中心，2009年进修于新西兰惠灵顿医院产科，对妇产科常见病多发病诊治有较丰富 的临床经验，擅长高危妊娠和妊娠合并症诊治和研究。责任心强，作风严谨，为妇产科事业不懈努力。</span>
                </p>
               
            </div>
            <div class="warning">
                <div class="head">互联网医院就诊须知</div>
                <div class="warnfont">
                    <p>  1、互联网医院当前开通了糖尿病、肿瘤内科、儿童内科、心血管内科四个科室的服务，后继将陆续开通更多病种和专科。</p>
                    <p>  2、患者可以在互联网医院上进行就医咨询，医生可根据需要为患者开具检查，检验项目（需关联就诊卡）。</p>
                    <p>  3、互联网医院服务包含：即时问诊、电话咨询、图文咨询、健康指导等。</p>
                    <p>  4、若您在咨询过程中有任何疑问请拨打客服电话400-0592-180。</p>
                </div>
            </div>
        </div>
        <div class="clinic">
            <h2>
                <span class="el-icon-school"></span>
                <span>互联网门诊</span>
            </h2>
            <div class="content">
                <span>科室：</span>
                <span>产科门诊</span>
                <ul class="contentList">
                    <li>
                        <span class="el-icon-phone"></span>
                        <span>电话咨询</span>
                        <span>暂未开通</span>
                    </li>
                     <li>
                        <span class="el-icon-s-comment"></span>
                        <span>即时问诊</span>
                        <span>暂未开通</span>
                    </li>
                     <li @click="picClick" class="thirdLi">
                        <span class="el-icon-picture"></span>
                        <span>图文咨询</span>
                        <span>0.00元/次</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="assess">
            <h2>
                <span class="el-icon-s-comment"></span>
                <span>患者评价</span>
                <ul>
                    <li>
                        <div class="left">
                            <img src="./../../../assets/huanzhe.png" alt="">
                            <p>182****2369</p>
                        </div>
                        <div class="middle">
                            <p>
                                <span>满意度：</span>
                                <span>★★★★★</span>
                            </p>
                            <p>医生态度很好，很耐心，谢谢！</p>
                        </div>
                        <div class="right">
                            <p>2019-12-02 12:25:36</p>
                            <p>
                                <span>类型：</span>
                                <span>图文咨询</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            <img src="./../../../assets/huanzhe.png" alt="">
                            <p>182****2369</p>
                        </div>
                        <div class="middle">
                            <p>
                                <span>满意度：</span>
                                <span>★★★★★</span>
                            </p>
                            <p>医生态度很好，很耐心，谢谢！</p>
                        </div>
                        <div class="right">
                            <p>2019-12-02 12:25:36</p>
                            <p>
                                <span>类型：</span>
                                <span>图文咨询</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            <img src="./../../../assets/huanzhe.png" alt="">
                            <p>182****2369</p>
                        </div>
                        <div class="middle">
                            <p>
                                <span>满意度：</span>
                                <span>★★★★★</span>
                            </p>
                            <p>医生态度很好，很耐心，谢谢！</p>
                        </div>
                        <div class="right">
                            <p>2019-12-02 12:25:36</p>
                            <p>
                                <span>类型：</span>
                                <span>图文咨询</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </h2>
        </div>
    </div>
</template>



<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.query);
  },
  methods: {
    // 医生详情
    docDetil() {
      axios({
        method: "post",
        url: axios.PARK_API + "jkda/basdoctor/list",
        data: {
          doctorNo: this.$route.query.docId,
          token: "123"
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
    // 患者评论列表
    suggestList() {
      axios({
        method: "post",
        url: axios.PARK_API + "jkda/basservicetask/queryScoreList",
        data: {
          teamCode: "",
          personId: "",
          visible: 1,
          token: ""
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
    picClick() {
      // query代表传入下一个页面的参数
      this.$router.push({
        path: "/picDetail",
        query: {
          doc:123
        }
      });
    }
  },
  created() {
    this.docDetil();
    // 患者评论列表
    this.suggestList();
    // console.log(this.$route.query);
  }
};
</script>


<style scoped>
.doctor {
}
.docTop {
  width: 800px;
  height: 260px;
  margin: 10px 10px 10px 60px;
  background-color: #fafafa;
  position: relative;
}
.docTop .img {
  width: 20%;
  float: left;
  line-height: 50px;
}
.docTop .imgfont {
  width: 76%;
  float: left;
  text-align: left;
  padding: 10px;
}
.docTop .img img {
  width: 100px;
  margin-top: 20px;
}
.docTop .imgfont span:nth-child(1) {
  font-size: 20px;
  font-weight: 700;
  margin-right: 10px;
}
.docTop .imgfont p:nth-child(3) {
  color: orange;
  font-weight: 700;
  font-size: 20px;
  margin: 10px;
}
.docTop .imgfont p:nth-child(3) span:nth-child(1) {
  color: #00a2ff;
  font-size: 14px;
  font-weight: normal;
}
.docTop .imgfont p:nth-child(4) span:nth-child(1),
.docTop .imgfont p:nth-child(5) span:nth-child(1) {
  margin: 0;
}
.docTop .imgfont p:nth-child(4) span:nth-child(1),
.docTop .imgfont p:nth-child(4) span:nth-child(2),
.docTop .imgfont p:nth-child(5) span:nth-child(1),
.docTop .imgfont p:nth-child(5) span:nth-child(2) {
  color: #00a2ff;
}
.docTop .imgfont p:nth-child(4) span:nth-child(3),
.docTop .imgfont p:nth-child(5) span:nth-child(3) {
  font-size: 12px;
}
.docTop .warning {
  width: 260px;
  /* height: 300px; */
  /* background-color: #000; */
  position: absolute;
  top: 0;
  right: -36%;
  border: 1px solid #f1f1f1;
}
.docTop .warning .head {
  height: 40px;
  line-height: 40px;
  color: #fff;
  background-color: #00a2ff;
}
.docTop .warning .warnfont {
  padding: 10px;
}
.docTop .warning .warnfont p {
  font-size: 12px;
  text-align: left;
}
.clinic {
  height: 180px;
}
.clinic,
.assess {
  margin-left: 60px;
  width: 80%;
}
.clinic h2,
.assess h2 {
  text-align: left;
}
.clinic h2 .el-icon-school,
.assess h2 .el-icon-s-comment {
  color: #00a2ff;
}
.clinic .content {
  text-align: left;
  border-top: 1px solid #f1f1f1;
}
.clinic .content span:nth-child(2) {
  font-size: 12px;
  color: #00a2ff;
  border: 1px solid #00a2ff;
}
.clinic .content .contentList {
  list-style: none;
}
.clinic .content .contentList .thirdLi {
  background-color: #00a2ff;
}
.clinic .content .contentList li {
  width: 28%;
  float: left;
  margin-right: 20px;
  background-color: #cccccc;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
}
.clinic .content .contentList li span {
  margin-right: 10px;
}
.clinic .content .contentList li .el-icon-phone,
.clinic .content .contentList li .el-icon-s-comment,
.clinic .content .contentList li .el-icon-picture {
  font-size: 60px;
  color: olivedrab;
}
.clinic .content .contentList li span:nth-child(2) {
  border: 0;
  color: #fff;
  font-size: 26px;
}
.clinic .content .contentList li span:nth-child(3) {
  color: #fff;
  font-size: 20px;
}
.assess ul {
  list-style: none;
}
.assess ul li {
  height: 120px;
}
.assess ul li .left,
.assess ul li .middle,
.assess ul li .right {
  float: left;
  width: 30%;
}
.assess ul li .left img {
  width: 60px;
}
.assess ul li .left p {
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}
.assess ul li .middle p {
  font-size: 14px;
  font-weight: normal;
}
.assess ul li .right p {
  padding: 0;
  margin: 6px;
  text-align: right;
  font-size: 12px;
  font-weight: normal;
}
.assess ul li .middle p:nth-child(1) span:nth-child(2) {
  color: orange;
  font-size: 18px;
}
</style>

