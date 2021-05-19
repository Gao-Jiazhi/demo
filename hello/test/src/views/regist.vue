<template>
  <div class="login-container">
    <dv-border-box-8 style="border-color: red">
      <!-- <div style="width:500px;height:800px"></div> -->
      <div class="title-container">
        <h1 class="title">M 注 册 页 面</h1>
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
            >注册</el-button>
        </el-form-item>
      </el-form>
    </dv-border-box-8>
  </div>
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
      allFlag: false,
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        userName: [{ validator: checkUserName, trigger: "blur" }],
      },
    };
  },
  created(){
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = {
            name: this.ruleForm.userName,
            pass: this.ruleForm.password
          }
       this.$store.state.allUserName.push(params)
       this.$router.push({ path: '/', query: params })
        } else {
          console.log("error regist!!");
          return false;
        }
      });
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
