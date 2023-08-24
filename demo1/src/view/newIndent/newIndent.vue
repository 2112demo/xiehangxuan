<template>
  <div class="newIndent">
    <div class="title">
      <i class="el-icon-s-order"></i>
      <span>/项目任务</span>
      <span>/批量新建订单</span>
    </div>
    <div class="content">
      <ul class="step">
        <li class="active">
          <span class="step-span">01</span>
          <div>
            <p>项目信息</p>
            <p>项目名称、类型、预算等</p>
          </div>
        </li>
        <li>
          <i class="el-icon-more"></i>
        </li>
        <li>
          <span class="step-span">02</span>
          <div>
            <p>人员导入</p>
            <p>批量导入人员数据</p>
          </div>
        </li>
        <li>
          <i class="el-icon-more"></i>
        </li>
        <li>
          <span class="step-span">03</span>
          <div>
            <p>数据校验</p>
            <p>检查数据是否有误</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newIndent'
}
</script>

<style>
.newIndent{
  padding: 0 24px;
  height: 100%;
}
.newIndent .title {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #616870;
  padding: 12px 0 30px 0px;
}

.newIndent .title i {
  color: #2c41b0;
  font-size: 25px;
}

.newIndent .content {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .2)
}

.newIndent .content .step{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px 0;
}
.newIndent .content .step li{
  display: flex;
  color: #97999b;
  align-items: center;
}
.newIndent .content .step li.active{
  color: #dd2519;
}
.newIndent .content .step li i{
  font-size: 50px;
}
.newIndent .content .step li p{
  width: 100%;
  height: 100%;
}
.newIndent .content .step .step-span{
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  margin-right: 12px;
}
</style>
