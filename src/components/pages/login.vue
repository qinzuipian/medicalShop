<template>
    <div class="login-wrap">
        <!-- 登录界面 -->
        <div class="ms-login" v-show="loginShow === 1">
            <div class="ms-title">后台管理系统</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.userName" placeholder="请输入用户名">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')">
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn" v-show="loginLoading == 1">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <div class="login-btn" v-show="loginLoading == 2">
                   <el-button type="primary" :loading="true">登录中</el-button>
                </div>
                <!-- <p class="login-tips">Tips : 用户名和密码随便填。</p> -->
            </el-form>

            <div class="Loginflex">
              <span @click="passClick">忘记密码？</span>
              <span @click="register">免费注册</span>
            </div>
        </div>
        <!-- 忘记密码 -->
        <div class="ms-login" v-show="loginShow === 2">
            <div class="ms-title">后台管理系统</div>
            <el-form :model="passwordForm" :rules="passRule" ref="passwordForm" label-width="0px" class="ms-content">
                <el-form-item prop="oldPass">
                    <el-input type="password" placeholder="请输入原始密码" v-model="passwordForm.oldPass">
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="newPass">
                    <el-input type="password" placeholder="请输入新密码" v-model="passwordForm.newPass">
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                 <el-form-item prop="repeatpass">
                    <el-input type="password" placeholder="请再次输入密码" v-model="passwordForm.repeatpass">
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="passSubmit('passwordForm')">确认</el-button>
                </div>
               
                <!-- <p class="login-tips">Tips : 用户名和密码随便填。</p> -->
            </el-form>
        </div>
        <!-- 免费注册 -->
        <div class="ms-login" v-show="loginShow === 3">
            <div class="ms-title">后台管理系统</div>
            <el-form :model="registerForm" :rules="regisRule" ref="registerForm" label-width="0px" class="ms-content">
                <el-form-item prop="phone">
                    <el-input v-model="registerForm.phone" placeholder="请输入手机号">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="verifyCode">
                    <el-input type="password" placeholder="请输入密码" v-model="registerForm.verifyCode">
                        <el-button slot="prepend"  icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                 <el-form-item prop="passCode">
                    <el-input type="password" placeholder="请再次输入密码" v-model="registerForm.passCode">
                        <el-button slot="prepend"  icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="registerSubmit('registerForm')">注册</el-button>
                </div>
 
                <!-- <p class="login-tips">Tips : 用户名和密码随便填。</p> -->
            </el-form>

            <div class="Loginflex">
              <span @click="loginClick">已有帐号，快去登录——></span>
            </div>
        </div>
      

        <div class="loginfont">
          西安卫康数据系统有限公司 
          <!-- <br> -->
          &nbsp;&nbsp;
          技术支持电话：18192163896
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    // 注册页面验证
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerForm.passCode !== "") {
          this.$refs.registerForm.validateField("passCode");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.verifyCode) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    // 修改密码页面验证
    var newPassvalidate = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.passwordForm.newPass !== "") {
          this.$refs.passwordForm.validateField("newPass");
        }
        callback();
      }
    };
    var repeatValidate = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.passwordForm.newPass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      //  登录界面data
      ruleForm: {
        userName: localStorage.getItem("user"),
        password: ""
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },

      // 注册页面data
      registerForm: {
        phone: "",
        verifyCode: "",
        passCode: ""
      },

      regisRule: {
        phone: [{ required: true, message: "请输入账号", trigger: "blur" }],
        verifyCode: [{ validator: validatePass, trigger: "blur" }],
        passCode: [{ validator: validatePass2, trigger: "blur" }]
      },

      // 修改密码data
      passwordForm: {
        oldPass: "",
        newPass: "",
        repeatpass: ""
      },

      passRule: {
        oldPass: [
          { required: true, message: "请输入原始密码", trigger: "blur" }
        ],
        newPass: [{ validator: newPassvalidate, trigger: "blur" }],
        repeatpass: [{ validator: repeatValidate, trigger: "blur" }]
      },
      loginLoading: 1,
      loginShow: 1
    };
  },
  methods: {
    submitForm(formName) {
      // this.$router.push({ path: "/home" });
      this.$refs[formName].validate(valid => {
        if (valid) {
          localStorage.setItem("user", this.ruleForm.userName);
          this.loginLoading = 2;
          axios({
            method: "post",
            url: axios.PARK_API + "jkda/ehrpiruser/login",
            data: {
              mobile: this.ruleForm.userName,
              password: this.ruleForm.password
            },
            headers: {
              "Content-Type": "application/json;charset=UTF-8"
            }
          })
            .then(res => {
              if (res.data.code == 0) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("navList", res.data.roleList);
                localStorage.setItem("mainUser", this.userName);
                // todo  路由有一个问题，这里跳转到app    app默认路由是住院审核   如果用户没有住院审核的页面权限   那么会产生冲突  会404页面
                // this.$router.push("/HospitalizationExamine");
                this.$router.push({ path: "/home" });
              } else {
                this.loginLoading = 1;
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
    loginBlur() {
      axios({
        method: "post",
        url: axios.PARK_API + "/sys-mgr/info",
        data: {
          userName: this.ruleForm.userName
        }
      })
        .then(res => {
          if (res.data.code == 0 && res.data.data) {
            //   console.log(res.data)
            //    this.$message("用户名：" + res.data.data.d10111);
            // localStorage.setItem("userName", res.data.data.d10111);
            localStorage.setItem("regionId", res.data.data.regionId);
            localStorage.setItem("userTime", res.data.data.parmCode);
          } else if (res.data.code == 0 && !res.data.data) {
            this.$message("没有此用户");
          } else {
            this.$message.error(res.data.msg);
          }
        })
        .catch(error => {
          // this.$message.error('请检查网络');
        });
    },
    // 登录显示
    loginClick() {
      this.loginShow = 1;
    },
    // 修改密码
    passClick() {
      this.loginShow = 2;
    },
    // 免费注册
    register() {
      this.loginShow = 3;
    },
    // 注册提交
    registerSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios({
            method: "post",
            url: axios.PARK_API + "jkda/ehrpiruser/verifyMobileCode",
            params: {
              mobile: this.registerForm.phone,
              verifyCode: 1
            }
            // headers: {
            //   "Content-Type": "application/json;charset=UTF-8"
            // }
          })
            .then(res => {
              if (res.data.code == 0) {
                console.log(res);
              } else {
              }
            })
            .catch(error => {
              // this.$message.error('请检查网络');
            });

          axios({
            method: "post",
            url: axios.PARK_API + "jkda/ehrpiruser/saveUser",
            params: {
              mobile: this.registerForm.phone,
              password: this.registerForm.verifyCode
            },
            headers: {
              "Content-Type": "application/json;charset=UTF-8"
            }
          })
            .then(res => {
              if (res.data.code == 0) {
                console.log(1);
              } else {
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
    // 修改密码提交
    passSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 640px;
  /* background-image: url(../../assets/login-bg.jpg); */
  background-image: url(./../../assets/login.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  right: 6%;
  top: 56%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
  padding: 10px;
}
.ms-login .Loginflex {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 16px;
  color: #00f;
}
.ms-login .Loginflex span {
  cursor: pointer;
}
/*   .ms-content{
        padding: 30px 30px;
    } */
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
  /* background-color: #5ab33d; */
  background-color: orange;
  border: 0;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
.loginfont {
  /* width: 18%; */
  /* height: 60px; */
  line-height: 30px;
  border-radius: 4px;
  /* line-height: 60px; */
  text-align: left;
  /* background:rgba(0,0,0, .5); */
  position: absolute;
  bottom: 2px;
  right: 10px;
  color: #000;
  font-size: 14px;
}
</style>