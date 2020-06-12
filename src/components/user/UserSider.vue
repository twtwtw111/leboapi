<template>
  <Menu theme="light" width="auto" :active-name="this.$route.name">
    <MenuItem name="个人信息" to="/user/index"
      ><Icon type="md-home"> </Icon> 个人信息</MenuItem
    >
    <Submenu name="我的账户">
      <template slot="title">
        <Icon type="md-person"></Icon>
        我的账户
      </template>
      <MenuItem name="账户充值" to="/user/account/recharge">账户充值</MenuItem>
      <MenuItem name="2-2">接口账户管理</MenuItem>
      <MenuItem name="2-3">充值消费明细</MenuItem>
    </Submenu>
    <Submenu name="3">
      <template slot="title">
        <Icon type="ios-square"></Icon>
        彩票接口
      </template>
      <MenuItem name="3-1">购买与续费</MenuItem>
      <MenuItem name="3-2">彩种变更</MenuItem>
      <MenuItem name="3-3">访问与白名单</MenuItem>
      <MenuItem name="3-4">接口生成</MenuItem>
    </Submenu>
    <Submenu name="4">
      <template slot="title">
        <Icon type="md-settings"></Icon>
        系统管理
      </template>
      <MenuItem name="4-1">操作日志</MenuItem>
      <MenuItem name="4-2">密码修改</MenuItem>
    </Submenu>
    <Submenu name="5">
      <template slot="title">
        <Icon type="md-bookmark"></Icon>
        联系我们
      </template>
      <MenuItem name="4-1">提交工单</MenuItem>
      <MenuItem name="4-2">充值客户</MenuItem>
    </Submenu>
    <MenuItem name="5-1" to="logout"
      ><Icon type="md-redo"> </Icon> 退出</MenuItem
    >
  </Menu>
</template>
