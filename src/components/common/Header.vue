<template>
  <div class="header">
    <div class="header-content">
      <div class="logo">
        <router-link :to="{name:'Home'}">
          <img src="@/assets/images/logo.png" alt srcset />
        </router-link>
      </div>

      <div class="menu">
        <div>网站首页</div>
        <div>开奖接口</div>
        <div>开奖号码</div>
        <div>接口说明</div>
      </div>
      <div class="reg_login">
        <div class="login">
          <router-link :to="{name:'Home'}">注册</router-link>
        </div>
        <div class="regist">
          <router-link :to="{name:'Login'}">登录</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped>
.header {
  background-color: #1748af;
  height: 74px;

  .header-content {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    .logo {
      // width: 60%;
      position: relative;
      text-align: center;
      img {
        position: absolute;
        top: 17px;
        left: 20px;
      }
    }
    .menu {
      // width: 40%;
      width: 600px;
      margin-left: 600px;
      display: flex;
      //justify-content: space-between;
      line-height: 74px;
      text-align: center;
      div {
        width: 24%;
        color: white;
        font-size: 16px;
        font-weight: 600;
        // border: 1px solid red;
        padding: 0 10px;
        letter-spacing: 2px;
      }
      // div:first-child {
      //   background-color: #282b58;
      // }
    }
    .reg_login {
      width: 24%;
      display: flex;
      line-height: 74px;
      div {
        padding-left: 10px;
        font-weight: 600;
        font-size: 16;
        letter-spacing: 1px;
        a {
          color: #ffc40e;
        }
      }
    }
  }
}
</style>
