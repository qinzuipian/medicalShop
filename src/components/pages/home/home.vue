<template>
    <div class="block">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item><img src="./../../../assets/img1.jpg" alt=""></el-carousel-item>
          <el-carousel-item><img src="./../../../assets/img2.jpg" alt=""></el-carousel-item>
          <el-carousel-item><img src="./../../../assets/img3.jpg" alt=""></el-carousel-item>
          <el-carousel-item><img src="./../../../assets/img4.jpg" alt=""></el-carousel-item>
        </el-carousel>

        <el-tabs type="border-card">
          <el-tab-pane label="在线咨询">
              <el-steps :active="1" simple>
                <el-step title="选择服务类别" icon="el-icon-menu"></el-step>
                <el-step title="选择就诊人" icon="el-icon-s-custom"></el-step>
                <el-step title="准时就诊" icon="el-icon-date"></el-step>
                <el-step title="就诊完成后评价" icon="el-icon-star-on"></el-step>
              </el-steps>
              <div class="line"></div>
              <div class="server">
                  <div class="type">
                    <ul>
                      <li>服务类别：</li>
                      <li>电话咨询</li>
                      <li>及时问诊</li>
                      <li>图文咨询</li>
                    </ul>
                    <ul class="select">
                      <li>您已选择：</li>
                      <li>图文咨询</li>
                    </ul>
                  
                  </div>
                  <div class="doctor">
                    <h2><span class="el-icon-s-operation"></span>
                      医生列表
                    </h2>

                    <el-row>
                      <el-col :span="8">
                        <div class="grid-content">
                          <div class="doc">
                            <img src="./../../../assets/doc.png" alt="">
                            <p>
                              <span>张晓云</span>
                              <span>主任医师</span>
                            </p>
                             <p>
                              <span>产科门诊</span>
                              <span>★★★★★</span>
                            </p>
                            <p>
                              擅长：早产，内科
                            </p>
                           <ul>
                             <li>
                               <span class="el-icon-phone">电话咨询</span>
                             </li>
                             <li>
                               <span class="el-icon-s-comment">即时问诊</span>
                             </li>
                             <li>
                               <router-link :to="{path:'/docDetail',query: {docId: id}}">
                                  <span class="el-icon-picture">图文咨询</span>
                               </router-link>                              
                             </li>
                           </ul>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="8">
                        <div class="grid-content">
                          <div class="doc">
                              <img src="./../../../assets/doc.png" alt="">
                              <p>
                                <span>张晓云</span>
                                <span>主任医师</span>
                              </p>
                              <p>
                                <span>产科门诊</span>
                                <span>★★★★★</span>
                              </p>
                              <p>
                                擅长：早产，内科
                              </p>
                              <ul>
                              <li>
                                <span class="el-icon-phone">电话咨询</span>
                              </li>
                              <li>
                                <span class="el-icon-s-comment">即时问诊</span>
                              </li>
                              <li>
                                <span class="el-icon-picture">图文咨询</span>
                              </li>
                              </ul>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="8">
                        <div class="grid-content">
                          <div class="doc">
                                <img src="./../../../assets/doc.png" alt="">
                                <p>
                                  <span>张晓云</span>
                                  <span>主任医师</span>
                                </p>
                                <p>
                                  <span>产科门诊</span>
                                  <span>★★★★★</span>
                                </p>
                                <p>
                                  擅长：早产，内科
                                </p>
                              <ul>
                                <li>
                                  <span class="el-icon-phone">电话咨询</span>
                                </li>
                                <li>
                                  <span class="el-icon-s-comment">即时问诊</span>
                                </li>
                                <li>
                                  <span class="el-icon-picture">图文咨询</span>
                                </li>
                              </ul>
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
              </div>

          </el-tab-pane>
          <el-tab-pane label="预约挂号">
                <el-steps :active="1" simple>
                <el-step title="选择科室" icon="el-icon-menu"></el-step>
                <el-step title="选择就诊时间" icon="el-icon-date"></el-step>
                <el-step title="选择就诊人" icon="el-icon-s-custom"></el-step>
                <el-step title="准时就诊" icon="el-icon-star-on"></el-step>
              </el-steps>
              <div class="line"></div>
              <div class="server">
                  <div class="type">
                    <ul>
                      <li>科室类别：</li>
                      <li @click="docAppoint">医生预约</li>
                      <li @click="vacAppoint">接种疫苗预约</li>
                    </ul>
                    <ul class="select">
                      <li>您已选择：</li>
                      <li v-text="selectText"></li>
                    </ul>
                  
                  </div>
                  <div class="doctor">
                      <div v-show="this.docShow === 1">
                            <h2><span class="el-icon-s-operation"></span>
                              医生列表
                            </h2>
                            <p>
                              <span class="demonstration">选择预约时间</span>
                              <el-date-picker
                                v-model="docDate"
                                type="date"
                                placeholder="选择日期">
                              </el-date-picker>
                              <!-- <el-button type="primary">确认</el-button> -->

                            </p>
                            <p>
                              <span class="demonstration">选择就诊人</span>
                              <el-input type="text" style="width:220px"></el-input>
                              <el-button type="primary" size="medium" @click="selectPeople">选择</el-button>
                            </p>
                            <p>
                              <span class="demonstration">选择服务项目</span>
                              <el-input type="text" style="width:220px"></el-input>
                              <el-button type="primary" size="medium" @click="selectProject">选择</el-button>
                            </p>
                            <el-row>
                                <el-col :span="8">
                                  <div class="grid-content">
                                    <div class="doc">
                                      <img src="./../../../assets/doc.png" alt="">
                                      <p>
                                        <span>张晓云</span>
                                        <span>主任医师</span>
                                      </p>
                                      <p>
                                        <span>产科门诊</span>
                                        <span>★★★★★</span>
                                      </p>
                                      <p>
                                        擅长：早产，内科
                                      </p>
                                      <P class="docApp" @click="docProject">
                                         <span class="el-icon-edit-outline">预约项目</span>
                                      </P>
                                    </div>
                                  </div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="grid-content">
                                        <div class="doc">
                                            <img src="./../../../assets/doc.png" alt="">
                                            <p>
                                              <span>张晓云</span>
                                              <span>主任医师</span>
                                            </p>
                                            <p>
                                              <span>产科门诊</span>
                                              <span>★★★★★</span>
                                            </p>
                                            <p>
                                              擅长：早产，内科
                                            </p>
                                            <P class="docApp">
                                              <span class="el-icon-edit-outline">预约项目</span>
                                            </P>
                                        </div>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                      <div class="grid-content">
                                            <div class="doc">
                                                  <img src="./../../../assets/doc.png" alt="">
                                                  <p>
                                                    <span>张晓云</span>
                                                    <span>主任医师</span>
                                                  </p>
                                                  <p>
                                                    <span>产科门诊</span>
                                                    <span>★★★★★</span>
                                                  </p>
                                                  <p>
                                                    擅长：早产，内科
                                                  </p>
                                                  <P class="docApp">
                                                    <span class="el-icon-edit-outline">预约项目</span>
                                                  </P>
                                            </div>
                                      </div>
                                </el-col>
                            </el-row>
                      </div>

                      <div v-show="this.docShow === 2">
                            <h2><span class="el-icon-s-operation"></span>
                              接种疫苗列表
                            </h2>
                            <p>
                              <span class="demonstration">选择接种时间</span>
                              <el-date-picker
                                v-model="docDate"
                                type="date"
                                placeholder="选择日期">
                              </el-date-picker>
                              <el-button type="primary">确认</el-button>

                            </p>
                            <p>
                              <span class="demonstration">选择接种人</span>
                              <el-input type="text" style="width:220px"></el-input>
                              <el-button type="primary" @click="vacPeople">选择</el-button>

                            </p>
                            <el-row>
                                <el-col :span="8">
                                  <div class="grid-content">
                                    <div class="doc">
                                      <img src="./../../../assets/vaccine.png" alt="">
                                      <p>
                                        <span>疫苗名称：</span>
                                        <span>百白破疫苗</span>
                                      </p>
                                      <p class="vacline"></p>                                    
                                      <p style="margin-top:10px;">
                                        注意事项：局部反应可表现为红肿、疼痛和硬结，一般不需特殊处理，大多数儿童经适当休息即可恢复正常。较重的局部反应可用干净的毛巾热敷。
                                      </p>
                                      <P class="vacApp"  @click="vaccineApp">
                                         <span class="el-icon-edit-outline">预约接种</span>
                                      </P>
                                    </div>
                                  </div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="grid-content">
                                      <div class="doc">
                                        <img src="./../../../assets/vaccine.png" alt="">
                                        <p>
                                          <span>疫苗名称：</span>
                                          <span>百白破疫苗</span>
                                        </p>
                                        <p class="vacline"></p>                                    
                                        <p style="margin-top:10px;">
                                          注意事项：局部反应可表现为红肿、疼痛和硬结，一般不需特殊处理，大多数儿童经适当休息即可恢复正常。较重的局部反应可用干净的毛巾热敷。
                                        </p>
                                        <P class="vacApp">
                                          <span class="el-icon-edit-outline">预约接种</span>
                                        </P>
                                      </div>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                  <div class="grid-content">
                                    <div class="doc">
                                      <img src="./../../../assets/vaccine.png" alt="">
                                      <p>
                                        <span>疫苗名称：</span>
                                        <span>百白破疫苗</span>
                                      </p>
                                      <p class="vacline"></p>                                    
                                      <p style="margin-top:10px;">
                                        注意事项：局部反应可表现为红肿、疼痛和硬结，一般不需特殊处理，大多数儿童经适当休息即可恢复正常。较重的局部反应可用干净的毛巾热敷。
                                      </p>
                                      <P class="vacApp">
                                         <span class="el-icon-edit-outline">预约接种</span>
                                      </P>
                                    </div>
                                  </div>
                                </el-col>
                            </el-row>
                      </div>
                  </div>
              </div>
          </el-tab-pane>
        </el-tabs> 
        
        
        <el-dialog title="选择就诊人" v-if='peopleVisible' :visible.sync="peopleVisible" width="60%" top="10px">
              <patient></patient>
        </el-dialog>

        <el-dialog title="选择服务项目" v-if='projectVisible' :visible.sync="projectVisible" width="60%" top="10px">
              <project></project>
        </el-dialog>


    </div>
  
</template>

<script>
import patient from "../../component/patient";
import project from "../../component/project";
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      docDate: "",
      id: "123",
      selectText: "医生预约",
      docShow: 1,
      peopleVisible: false,
      projectVisible: false
    };
  },
  methods: {
    // 医生列表查询
    doctorList() {
      //从后台获取到对象数组
      axios({
        method: "post",
        url: axios.PARK_API + "jkda/basteam/list",
        data: {
          teamCode: "",
          personId: "",
          token: ""
        },
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      })
        .then(res => {
          if (res.data.code == 0) {
            this.id = "123";
          } else {
          }
        })
        .catch(error => {
          // this.$message.error('请检查网络');
        });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    docAppoint() {
      this.selectText = "医生预约";
      this.docShow = 1;
    },
    vacAppoint() {
      this.selectText = "接种疫苗预约";
      this.docShow = 2;
    },
    selectPeople() {
      this.peopleVisible = true;
    },
    selectProject() {
      this.projectVisible = true;
    },
    vacPeople() {
      this.peopleVisible = true;
    },
    // 医生预约的预约项目
    docProject() {
      // this.$message.success('预约成功');
    },
    // 病种预约项目
    vaccineApp() {
      // this.$message.success("预约成功");
    }
  },
  created() {
    this.doctorList();
  },
  components: {
    patient,
    project
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
}
.el-tabs--border-card {
  width: 80%;
  margin: 20px auto;
}
.block .line {
  width: 100%;
  height: 2px;
  background-color: #00a2ff;
  margin-top: 10px;
}
.server .type ul {
  list-style: none;
  height: 40px;
}
.server .type ul li {
  float: left;
  width: 25%;
}
.server .type ul li:nth-child(1) {
  height: 30px;
  line-height: 30px;
  background: rgba(0, 0, 0, 0.3);
}
.server .type ul li:nth-child(2),
.server .type ul li:nth-child(3),
.server .type ul li:nth-child(4) {
  cursor: pointer;
  font-size: 14px;
}

.server .type .select li:nth-child(2) {
  color: #00a2ff;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.doctor .doc {
  width: 76%;
  height: 240px;
  /* background: #000; */
  border-radius: 4px;
  border: 1px solid #e1e1e1;
  padding: 10px;
  position: relative;
}
.doctor .demonstration {
  font-size: 14px;
}
.doctor .el-icon-s-operation {
  color: #00a2ff;
}
.doctor h2 {
  text-align: left;
}
.doctor .doc:hover {
  border: 1px solid #00a2ff;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transform: translate3d(0, -2px, 0);
}
.doctor .doc img {
  width: 80px;
}
.doctor .doc p {
  padding: 0;
  margin: 0;
  font-size: 14px;
}
.doctor .doc p:nth-child(3) span:nth-child(1) {
  font-size: 14px;
  color: gray;
}
.doctor .doc p:nth-child(3) span:nth-child(2) {
  font-size: 20px;
  color: #ff0;
}
.doctor .doc p:nth-child(3) {
  border-bottom: 1px dashed gray;
}
.doctor .doc .vacline {
  border-bottom: 1px dashed gray;
  margin-top: 10px;
  cursor: pointer;
}

.doctor .doc p:nth-child(4) {
  margin-top: 20px;
  color: gray;
}

.doctor .doc .vacApp,
.doctor .doc .docApp {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #f1f1f1;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
}
.doctor .doc .vacApp .el-icon-edit-outline,
.doctor .doc .docApp .el-icon-edit-outline {
  color: dodgerblue;
}
.doctor .doc ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  position: absolute;
  bottom: 0;
}
.doctor .doc ul li {
  float: left;
  width: 30%;
  height: 40px;
  line-height: 40px;
  background-color: #fafafa;
  margin-right: 4px;
  font-size: 14px;
  color: gray;
  border-right: 1px solid gray;
}
.doctor .doc ul li:nth-child(3) {
  border-right: 0;
  color: dodgerblue;
}

.doctor .doc ul li:hover {
  cursor: pointer;
}
.doctor p {
  text-align: left;
}
</style>
