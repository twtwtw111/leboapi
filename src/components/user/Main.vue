<template>
  <div class="layout">
    <Layout>
      <Header :style="{ background: '#fff' }">
        <UserHeader />
      </Header>
      <Layout :style="{ padding: '0 50px', minHeight: Height + 'px' }">
        <UserBreadcrumb />

        <Content
          :style="{ padding: '24px 0', minHeight: '280px', background: '#fff' }"
        >
          <Layout>
            <Sider :hide-trigger="false" :style="{ background: '#fff' }">
              <UserSider />
            </Sider>
            <Content
              :style="{
                padding: '24px',
                minHeight: '280px',
                background: '#fff'
              }"
            >
              <router-view></router-view>
            </Content>
          </Layout>
        </Content>
      </Layout>
      <UserFooter />
    </Layout>
  </div>
</template>
<script>
import UserSider from "../../components/user/UserSider";
import UserFooter from "../../components/user/UserFooter";
import UserBreadcrumb from "../../components/user/UserBreadcrumb";
import UserHeader from "../../components/user/UserHeader";
export default {
  data() {
    return {
      Height: 0
    };
  },
  components: {
    UserSider,
    UserFooter,
    UserBreadcrumb,
    UserHeader
  },
  mounted() {
    //动态设置内容高度 让footer始终居底   header+footer的高度是100
    this.Height = document.documentElement.clientHeight - 134; //监听浏览器窗口变化
    window.onresize = () => {
      this.Height = document.documentElement.clientHeight - 134;
    };
  }
};
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
</style>
