<template>
  <div class="login">
    <CommonHeader />
    <div v-bind:style="{ minHeight: Height + 'px' }">
      <div class="login_box">
        <h2>用户登录</h2>
        <h3>欢迎登录乐博API</h3>
        <Form
          :label-width="80"
          :model="loginForm"
          ref="loginFormRef"
          :rules="ruleLoginForm"
          class="login_form"
        >
          <FormItem prop="username">
            <Input type="text" v-model="loginForm.username" placeholder="账号">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input
              type="password"
              v-model="loginForm.password"
              placeholder="密码"
            >
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('loginFormRef')"
              >Submit</Button
            >
            <Button
              @click="handleReset('loginFormRef')"
              style="margin-left: 8px"
              >Reset</Button
            >
          </FormItem>
        </Form>
      </div>
    </div>
    <CommonFooter />
  </div>
</template>
<script>
import CommonHeader from "@/components/common/Header";
import CommonFooter from "@/components/common/Footer";
export default {
  components: {
    CommonHeader,
    CommonFooter
  },
  data() {
    return {
      Height: 0,
      loginForm: {
        username: "",
        password: ""
      },
      ruleLoginForm: {
        username: [
          {
            required: true,
            message: "账号不能为空",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  mounted() {
    //动态设置内容高度 让footer始终居底   header+footer的高度是100
    this.Height = document.documentElement.clientHeight - 174; //监听浏览器窗口变化
    window.onresize = () => {
      this.Height = document.documentElement.clientHeight - 174;
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$message.info("登录成功");
          this.$router.push("/user/index");
        } else {
          this.$message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  h2 {
    padding-top: 10px;
    margin-top: 10px;
  }
  h3 {
    padding-top: 10px;
  }
  .login_form {
    position: absolute;
    bottom: 10%;
    width: 80%;
    padding: 0 20px;
    box-sizing: border-box;
  }
}
</style>
