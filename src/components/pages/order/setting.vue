<template>
    <div class="setting">
        <el-tabs type="border-card">
            <el-tab-pane>
                <span slot="label"><i class="el-icon-user-solid"></i> 基本资料</span>
                <div class="person">
                    <img src="./../../../assets/pic.png" alt="">
                    <p>
                        <span>登录名：</span>
                        <span>{{user}}</span>
                    </p>
                   <!--  <p>
                        <span>姓名：</span>
                        <el-input v-model="name" style="width:260px" placeholder="请输入内容"></el-input>
                    </p> -->
                     <p>
                       <span class="txt">上传身份证照片：</span>
                        <el-upload
                          action=""
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
                    </p>
                    <p>
                        <span>身份证号：</span>
                        <el-input v-model="idcard" style="width:260px" placeholder="请输入内容"></el-input>
                    </p>
                   
                    <p>
                        <el-button type="primary" @click="idCardSave">保存</el-button>
                    </p>
                </div>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"> <i class="el-icon-key"></i>修改密码</span>
                 <div class="pass">
                 <div class="passForm">
                    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="原密码" prop="pass">
                            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="新密码" prop="age">
                            <el-input type="password" v-model="ruleForm2.age"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="checkPass">
                            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                        </el-form-item>
                        
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                            <el-button @click="resetForm('ruleForm2')">重置</el-button>
                        </el-form-item>
                        </el-form>
                    </div>
                </div> 
            </el-tab-pane>
        </el-tabs>

         <el-dialog title="确认信息" v-if='idcardVisible' :visible.sync="idcardVisible" width="36%" top="10px">
              <idcard :idcardData="idcardData" v-on:hidden="hidden"></idcard>
        </el-dialog>
    </div>
</template>


<script>
import idcard from "./../../component/idcard";
import axios from "axios";
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value == this.ruleForm2.pass) {
        callback(new Error("两次输入密码一致!"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.age) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      name: "",
      idcard: "",
      user: localStorage.getItem("user"),
      ruleForm2: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      },
      idcardVisible: false,
      idcardData: [],
      dialogImageUrl: "",
      dialogVisible: false,
      imglistUrl: ""
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios({
            method: "post",
            url: axios.PARK_API + "jkda/sys/user/password",
            data: {
              password: this.ruleForm2.pass,
              newPassword: this.ruleForm2.age,
              token: localStorage.getItem("token")
            },
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
            }
          })
            .then(res => {
              if (res.data.code == 0) {
                this.$message.success("密码修改成功");
                this.$router.push({ path: "/home" });
              } else {
                this.$message.error(res.data.msg);
              }
            })
            .catch(error => {
              // this.$message.error('请检查网络');
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

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
        // _this.imglistUrl = dataURL;
        _this.idCardSure(dataURL);
        // console.log(_this.imglistUrl)
      };
    },
    Fileprogress(event, file, fileList) {
      console.log(event, file, fileList);
    },

    // 身份证信息确认
    idCardSure(dataURL) {
      axios({
        method: "post",
        url: axios.PARK_API + "jkda/jkda/baiduFace/identificationIdCard",
        data: {
          image: dataURL
        },
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      })
        .then(res => {
          console.log(res);
          if (res.data.code == 0) {
            this.idcardData = res.data.data.words_result;
            this.idcard = res.data.data.words_result.公民身份号码.words;
            localStorage.setItem("idCardpath", res.data.data.filePath);
            localStorage.setItem("personId", res.data.data.personId);
            /*   this.idcardVisible = true;
            this.idcardData = res.data.page.list[0]; */
          } else {
          }
        })
        .catch(error => {
          // this.$message.error('请检查网络');
        });
    },

    idCardSave() {
      this.idcardVisible = true;
    },
    hidden() {
      this.idcardVisible = false;
    }
  },
  components: {
    idcard
  }
};
</script>


<style scoped>
.setting {
  padding: 10px;
}
.setting .person img {
  width: 80px;
}
.setting .person p span {
  font-size: 14px;
}

.pass {
  padding: 10px;
  text-align: center;
}

.pass .passForm {
  width: 40%;
  margin: 30px auto 0 auto;
}
</style>


