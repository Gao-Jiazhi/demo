<template>
  <!-- <dv-full-screen-container> -->
  <div class="login-container">
    <dv-border-box-8 style="border-color: red">
      <!-- <div style="width:500px;height:800px"></div> -->
      <div class="title-container">
        <h1 class="title"> M 登 录 页 面</h1>
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
        <el-form-item label="用户名" prop="age">
          <el-input class="inputSize" v-model="ruleForm.age"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            class="inputSize"
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </dv-border-box-8>
  </div>
  <!-- </dv-full-screen-container> -->
</template>
<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      // setTimeout(() => {
      //   if (!Number.isInteger(value)) {
      //     callback(new Error('请输入数字值'));
      //   } else {
      //     if (value < 18) {
      //       callback(new Error('必须年满18岁'));
      //     } else {
      //       callback();
      //     }
      //   }
      // }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    // var validatePass2 = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请再次输入密码'));
    //   } else if (value !== this.ruleForm.pass) {
    //     callback(new Error('两次输入密码不一致!'));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      ruleForm: {
        pass: "",
        age: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        // checkPass: [
        //   { validator: validatePass2, trigger: 'blur' }
        // ],
        age: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="less">
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
  position: absolute;
  left: 1100px;
  top: 290px;

  .title {
    font-size: 32px;
    color: #fff;
    margin: 0px auto 40px auto;
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
</style>