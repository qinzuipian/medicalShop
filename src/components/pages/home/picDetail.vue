<template>
    <div class="picDetail">
        <div class="head">图文咨询</div>
        <div class="table-lists">
            <ul>
                <li>门诊类型：</li>
                <li>图文咨询</li>
            </ul>
            <ul>
                <li>坐诊医生：</li>
                <li>吴芹</li>
            </ul>
            <ul>
                <li>问诊费：</li>
                <li>
                    <span class="fee-original">￥0.00元</span>
                </li>
            </ul>
            <ul>
                <li>时间：</li>
                <li>
                  <el-date-picker
                    v-model="uploadDate"
                    type="date"
                    placeholder="选择日期时间">
                  </el-date-picker>
                </li>
            </ul>
            <ul>
                <li style="vertical-align: top"><span class="org">*</span> 病情描述：</li>
                <li style="position:relative; padding:20px;">
                    <el-input
                    type="textarea"
                    style="width:80%;"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="disease">
                    </el-input>
                </li>
            </ul>
            <ul>
                <li>添加图片：</li>
                <li style="padding:10px;">
                    <span class="txt">上传影像、化验单（病症部位、检查/检验报告、其他病情资料）</span>
                    <el-upload
                      action=""
                      multiple
                      list-type="picture-card"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove"
                      :on-change="Filechange"
                      :on-progress="Fileprogress"
                      :auto-upload=false>
                      <i class="el-icon-plus"></i>
                      </el-upload>
                      <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                      </el-dialog>
                </li>
            </ul>
            <ul class="last">
                <div class="tips">
                    <label class="org">温馨提示： </label>
                    
                    <div>
                        <p> 1、图文咨询信息提交后必须在10分钟内完成支付，超时系统将会自动取消。</p>
                        <p> 2、医生开始问诊后不能进行退单。</p>
                        <p> 3、如医生未开始问诊，可取消服务。</p>
                        <p> 4、24小时内医生未问诊，服务自动取消，相关费用将原路退回。</p>
                        <p> 5、本平台提供的线上咨询服务，如即时问诊、电话咨询、图文咨询业务，发票由平台运营方智业互联（厦门）健康科技有限公司负责开具；若有涉及到医院线下的检查、检验及治疗项目的发票由厦门大学附属第一医院负责开具。</p>
                        <p> 6、如有其他疑问可联系客服电话：400-0592-180。</p>
                    </div>
                    
                </div>
                <div class="submit">
                    <el-button type="primary" @click="picSubmit">提 交</el-button>
                </div>
            </ul>
        </div>
    </div>
</template>



<script>
import axios from "axios";
export default {
  data() {
    return {
      disease: "",
      dialogImageUrl: "",
      dialogVisible: false,
      uploadDate: "",
      imglistUrl: []
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      console.log(file);
      this.dialogVisible = true;
    },
    Filechange(file, fileList) {
      console.log(file, fileList);
      this.getBase64(file.url);
    },

    getBase64(fileSrc) {
      console.log(fileSrc);
      //转成base64
      var Img = new Image();
      Img.src = fileSrc; // 传过来的图片路径在这里用。
      //				/* console.log(Img.src)*/
      /* Img.width = "280";
      Img.height = "240"; */
      var _this = this;
      Img.onload = function() {
        var canvas = document.createElement("canvas");
        canvas.width = Img.width;
        canvas.height = Img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(Img, 0, 0, Img.width, Img.height);
        var ext = Img.src.substring(Img.src.lastIndexOf(".") + 1).toLowerCase();
        var dataURL = canvas.toDataURL("image/" + ext);
        //截掉前缀
        // var database64 = dataURL.substring(dataURL.indexOf(',') + 1);
        // console.log(database64)
        _this.imglistUrl.push(dataURL);
        // console.log(_this.imglistUrl)
      };
    },
    Fileprogress(event, file, fileList) {
      console.log(event, file, fileList);
    },
    picSubmit() {
      console.log(JSON.stringify(this.imglistUrl));
      axios({
        method: "post",
        url: axios.PARK_API + "jkda/medicalupload/upload",
        data: {
          personId: "",
          token: "",
          doctorCode: "",
          messageInfo: this.disease,
          file: "",
          type: 2
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
    console.log(this.$route.query);
  }
};
</script>


<style scoped>
.picDetail {
  padding: 10px;
}
.picDetail .head {
  height: 30px;
  line-height: 30px;
  color: #00a2ff;
  text-align: left;
  font-weight: 700;
  font-size: 14px;
  padding: 10px;
  border-top: 1px solid #00a2ff;
  background-color: #d9f1ff;
}

.picDetail .table-lists {
  border: 1px solid #e1e1e1;
  margin-top: 15px;
  margin-bottom: 38px;
  margin-left: 38px;
  width: 80%;
  font-size: 14px;
}

.picDetail .table-lists ul {
  display: table;
  border-bottom: 1px dashed #e6e2e1;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
}
.picDetail .table-lists ul li:first-child {
  background: #f6f6f6;
  width: 104px;
  padding: 15px 5px 15px 0;
  color: #000;
  text-align: right;
  font-size: 14px;
}
.picDetail .table-lists ul li {
  min-height: 32px;
  display: table-cell;
}

.picDetail .table-lists ul.last {
  border-bottom: 0;
}

.picDetail .table-lists ul .tips {
  background: #f6f6f6;
  padding: 15px;
  margin: 18px;
  position: relative;
  margin: 0;
}
.picDetail .table-lists ul .submit {
  margin: 30px 0 30px 28px;
  display: table;
  width: 100%;
}
.picDetail .table-lists ul .tips label {
  position: absolute;
  left: 0px;
  top: 15px;
  width: 84px;
  text-align: right;
  line-height: 22px;
  font-size: 12px;
}
.picDetail .table-lists .org {
  color: #ff6600;
}
.table-lists ul .tips div {
  padding-left: 84px;
  color: #999;
  line-height: 22px;
  font-size: 12px;
  text-align: left;
  margin: 0;
}
.table-lists ul .tips div p {
  padding: 0;
  margin: 0;
}
</style>
