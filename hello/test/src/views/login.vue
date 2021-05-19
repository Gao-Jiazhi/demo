<template>
  <!-- <dv-full-screen-container> -->
  <div class="login-container">
    <dv-border-box-8 style="border-color: red">
      <!-- <div style="width:500px;height:800px"></div> -->
      <div class="title-container">
        <h1 class="title">M 登 录 页 面</h1>
      </div>
      <!-- <dv-decoration-3 style="width:250px;height:30px;" /> -->
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input
            class="inputSize"
            v-model="ruleForm.userName"
            @focus="handleFocus"
            @blur="handleBlur"
          ></el-input>
          <div
            class="all"
            v-show="allFlag"
            style="
              position: absolute;
              left: 2px;
              top: 40px;
              width: 469px;
              height: 200px;
              padding-top: 0;
            "
          >
            <ul
              style="
                width: 100%;
                height: 200px;
                padding-bottom: 30px;
                padding-top: 5px;
              "
            >
              <li
                v-for="item in allUserName"
                :key="item"
                @click="handleChoose($event)"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            class="inputSize"
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <router-link to="/regist">
            <span>注册</span>
          </router-link>
        </el-form-item>
      </el-form>
    </dv-border-box-8>
  </div>
  <!-- </dv-full-screen-container> -->
</template>
<script>
export default {
  data() {
    var checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        // if (this.ruleForm.checkPass !== "") {
        //   this.$refs.ruleForm.validateField("checkPass");
        // }
        callback();
      }
    };
    return {
      ruleForm: {
        password: "",
        userName: "",
      },
      allUserName:[],
      allFlag: false,
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        userName: [{ validator: checkUserName, trigger: "blur" }],
      },
    };
  },
  created(){
    console.log(this.$store.state.allUserName)
    this.allUserName = this.$store.state.allUserName.map(item=>item.name)
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!");
          let params = {
            userName: this.ruleForm.userName,
            password: this.ruleForm.password
          }
          console.log(params)
          var flag = this.$store.state.allUserName.findIndex(item=>(item.name == params.userName && item.pass == params.password) )
          if(flag !== -1){
            console.log('路由跳转了')
              this.$router.push({ path: '/helloWorld', query: params })
          } else{
            this.$message.error('用户名或密码错误');
          }
          console.log(flag)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleFocus() {
      this.allFlag = true;
    },
    handleBlur() {
      setTimeout(() => (this.allFlag = false), 500);
    },
    handleChoose(e) {
      this.ruleForm.userName = e.target.innerText;
      console.log(e);
    },
  },
};
</script>
<style lang="less" scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.el-form-item__label {
  font-size: 24px;
}

.dv-border-box-8 .border-box-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.demo-ruleForm {
  margin: auto;
  width: 720px;
  height: 480px;
  text-align: center;
  line-height: 480px;
  box-shadow: -3px 0 3px -1px green, 0 -3px 3px -1px blueviolet,
    0 3px 3px -1px red, 3px 0 3px -1px yellow;
  padding: 120px 80px 100px 30px;
  box-sizing: border-box;
  // position: relative;
}
.title-container {
margin: auto;
margin-top: 150px;
  .title {
    font-size: 32px;
    color: #fff;
    margin: 0px auto -67px auto;
    text-align: center;
    font-weight: bold;
  }
}
.demo-ruleForm :nth-child(2) {
  margin-bottom: 50px;
}
.el-button {
  width: 100px;
  height: 50px;
  font-size: 28px;
}
.el-button:nth-of-type(1) {
  background-color: skyblue;
  margin-right: 150px;
  margin-left: -30px;
  border: none;
}
.el-button:nth-of-type(2) {
  background-color: tan;
  border: none;
}
.inputSize {
  font-size: 20px;
}
.el-input__inner {
  background-color: transparent;
  border: 1px solid transparent;
  border-bottom-color: thistle;
}
.all{
    background-color: #0b0d1f;
    z-index: 999;
    padding: 20px;
    color: #343434;
    ul{
    list-style: none;
    padding: 0;
    z-index: 999;
    overflow: auto;
    // overflow-y: scroll;
    li{
      color: #fff;
      font-size: 24px;
    z-index: 999;
    }
    li:nth-of-type(2){
      margin-bottom: 0;
    }
    li{
      &:hover{
        background-color: #666;
        cursor: pointer;
        z-index: 999;
      }
    }
    }
  }
</style>
