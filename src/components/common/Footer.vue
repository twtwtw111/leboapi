<template>
  <div class="footer">
    <div class="footer_info">
      <div class="l_info">
        <p>ICP备案号：粤ICP备16037428号</p>
        <p>Copyright：2013-2016 乐博API 在线有限公司 版权所有</p>
      </div>
      <div class="m_info"></div>
      <div class="r_info">
        <img src="@/assets/images/footer_logo.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    //     //动态设置内容高度 让footer始终居底   header+footer的高度是100
    //     this.Height = document.documentElement.clientHeight - 100;
    // 　　//监听浏览器窗口变化
    //     window.onresize = ()=> {this.Height = document.documentElement.clientHeight -100}
  }
};
</script>

<style lang="less" scoped>
.footer {
  height: 100px;
  background-color: #3e3e40;
  // // position: absolute;
  // // bottom: 0;
  // width: 100%;
  // height: 100px;
  // position: fixed;
  // bottom: 0;

  .footer_info {
    width: 500px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .l_info {
      text-align: right;
      height: 50%;
      p {
        font-size: 12px;
        color: #a4a1a2;
      }
      p:first-child {
        margin-top: 40px;
      }
    }
    .m_info {
      height: 32px;
      width: 1px;
      background-color: #9f9c9d;
      margin-top: 40px;
    }
    .r_info {
      img {
        width: 80%;
        margin-top: 40px;
      }
    }
  }
}
</style>