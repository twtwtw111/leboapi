<template>
  <div class="UserHeader">
    <Menu mode="horizontal" theme="light">
      <div class="layout-logo">
        <img src="@/assets/images/logo.png" alt="" srcset="" />
      </div>
      <div class="layout-nav">
        <MenuItem name="1">
          <Icon type="ios-navigate"></Icon>
          账号
        </MenuItem>
        <MenuItem name="2">
          <Icon type="ios-keypad"></Icon>
          充值
        </MenuItem>
        <MenuItem name="3">
          <Icon type="ios-analytics"></Icon>
          购买
        </MenuItem>
        <MenuItem name="4">
          <Icon type="ios-paper"></Icon>
          记录
        </MenuItem>
        <MenuItem name="5">
          <Icon type="ios-paper"></Icon>
          生成
        </MenuItem>
      </div>
    </Menu>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.layout-logo {
  width: 200px;
  height: 50px;
  background: #1748af;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 5px;
  left: 1px;
}
.layout-nav {
  width: 480px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
