<template>
  <el-row class="app">
    <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
      <div class="content-lef">
        <div class="title">
          <i class="el-icon-s-data"></i>
          灵活用工服务平台
        </div>
        <el-menu default-active="2" class="el-menu-vertical-demo" router>
          <p class="text-p">常用服务</p>
          <el-menu-item index="/">
            <i class="el-icon-monitor"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <p class="text-p">业务管理</p>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span>项目任务</span>
            </template>
            <el-menu-item index="/newIndent">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-finance"></i>
              <span>资金发票</span>
            </template>
            <el-menu-item index="/newIndent">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-office-building"></i>
              <span>企业管理</span>
            </template>
            <el-menu-item index="/newIndent">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
          </el-submenu>
          <p class="text-p">服务中心</p>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span>身份&安全</span>
            </template>
            <el-menu-item index="/newIndent">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="content-lefSmall">
        <div class="title">
          <i class="el-icon-s-data"></i>
        </div>
      </div>
    </el-col>
    <el-col :xs="21" :sm="21" :md="21" :lg="21" :xl="21" id="rig">
      <div class="title-rig">
        <div>
          <i class="el-icon-s-operation list-i"></i>
          <i class="el-icon-full-screen"></i>
        </div>
        <div>
          <p class="firm-p">山雨欲来风满楼</p>
          <i class="el-icon-setting"></i>
        </div>
      </div>
      <router-view />
    </el-col>
  </el-row>
</template>

<script>
export default {

}
</script>

<style>
#rig {
  background-color: #f5f5f5;
}

.app,.app>.el-col {
  height: 100vh;
}
.el-menu {
  width: 100%;
  border: none;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.content-lef,.content-lefSmall {
  height: 100%;
  background-color: #fff;
}
.content-lefSmall{
  display: none;
}
@media screen and (max-width: 1200px){
  .content-lef{
    display: none;
  }
  .content-lefSmall{
    display: block;
  }
}

.el-menu-item {
  min-width: 0 !important;
}

.title {
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 18px;
  font-weight: bold;
  background-color: #d0121b;
  color: #fff;
}
.title-rig {
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  background-color: #2c4198;
  color: #fff;
  justify-content: space-between;

}
.title-rig div {
  display: flex;
  align-items: center;
  margin: 0 20px;
  justify-content: space-evenly;
}

.firm-p,
.list-i {
  margin-right: 20px;
}</style>
