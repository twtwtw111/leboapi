<template>
  <Breadcrumb :style="{ margin: '16px 0' }">
    <BreadcrumbItem v-for="(item, index) in list" :key="index">{{
      item.name
    }}</BreadcrumbItem>
  </Breadcrumb>
</template>
<script>
export default {
  data() {
    return {
      list: [] // 容器
    };
  },
  watch: {
    $route() {
      // 监听路由变化
      this.list = [];
      this.list = this.$route.matched;
    }
  },
  mounted() {
    // 刷新时
    this.list = this.$route.matched;
  }
};
</script>
