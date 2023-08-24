<template>
  <div class="index-box">
    <p class="index-title">
      <i class="el-icon-monitor"></i> /
      <span>首页</span>
    </p>
    <el-row class="index-list">
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
        <div class="grid-content ">
          <p class="index-p">最近项目</p>
          <el-divider></el-divider>
          <div class="card-box" @mouseover="showScrollbar" @mouseout="hideScrollbar"
            :style="{ overflow: show ? 'auto' : 'hidden' }">
            <div class="block">
              <el-timeline>
                <el-timeline-item timestamp="2018/4/12" placement="top" color="#6777ef" size="large">
                  <el-card shadow="always">
                    <p>
                      <span>项目</span>
                      <span>外卖骑手项目</span>
                    </p>
                    <p>
                      <span>进度</span>
                      <span>待报审</span>
                    </p>
                    <p>
                      <span>订单量</span>
                      <span>2</span>
                    </p>
                    <p>
                      <span>订单额</span>
                      <span>0.20元</span>
                    </p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/3" placement="top" color="#6777ef" size="large">
                  <el-card shadow="always">
                    <p>
                      <span>项目</span>
                      <span>外卖骑手项目</span>
                    </p>
                    <p>
                      <span>进度</span>
                      <span>待报审</span>
                    </p>
                    <p>
                      <span>订单量</span>
                      <span>2</span>
                    </p>
                    <p>
                      <span>订单额</span>
                      <span>0.20元</span>
                    </p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/2" placement="top" color="#3dc9b3" size="large">
                  <el-card shadow="always">
                    <p>
                      <span>项目</span>
                      <span>外卖骑手项目</span>
                    </p>
                    <p>
                      <span>进度</span>
                      <span>待报审</span>
                    </p>
                    <p>
                      <span>订单量</span>
                      <span>2</span>
                    </p>
                    <p>
                      <span>订单额</span>
                      <span>0.20元</span>
                    </p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/2" placement="top" color="#3dc9b3" size="large">
                  <el-card shadow="always">
                    <p>
                      <span>项目</span>
                      <span>外卖骑手项目</span>
                    </p>
                    <p>
                      <span>进度</span>
                      <span>待报审</span>
                    </p>
                    <p>
                      <span>订单量</span>
                      <span>2</span>
                    </p>
                    <p>
                      <span>订单额</span>
                      <span>0.20元</span>
                    </p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/2" placement="top" color="#3dc9b3" size="large">
                  <el-card shadow="always">
                    <p>
                      <span>项目</span>
                      <span>外卖骑手项目</span>
                    </p>
                    <p>
                      <span>进度</span>
                      <span>待报审</span>
                    </p>
                    <p>
                      <span>订单量</span>
                      <span>2</span>
                    </p>
                    <p>
                      <span>订单额</span>
                      <span>0.20元</span>
                    </p>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
        <div class="grid-content ">
          <p class="index-p">资金动态</p>
          <el-divider></el-divider>
          <div class="price-box"  @mouseover="showPrice" @mouseout="hidePrice"
            :style="{ overflow: show1 ? 'auto' : 'hidden' }">
            <div>
              <p>
                <i class="el-icon-arrow-right"></i>
                <span>平台结算</span>
              </p>
              <p>0.02</p>
            </div>
            <div>
              <p>
                <i class="el-icon-arrow-right"></i>
                <span>平台结算</span>
              </p>
              <p>0.02</p>
            </div>
            <div>
              <p>
                <i class="el-icon-arrow-right"></i>
                <span>平台结算</span>
              </p>
              <p>0.02</p>
            </div>
            <div>
              <p>
                <i class="el-icon-arrow-right"></i>
                <span>平台结算</span>
              </p>
              <p>0.02</p>
            </div>
            <div>
              <p>
                <i class="el-icon-arrow-right"></i>
                <span>平台结算</span>
              </p>
              <p>0.02</p>
            </div>
            <div>
              <p>
                <i class="el-icon-arrow-right"></i>
                <span>平台结算</span>
              </p>
              <p>0.02</p>
            </div>
            <div>
              <p>
                <i class="el-icon-arrow-right"></i>
                <span>平台结算</span>
              </p>
              <p>0.02</p>
            </div>
            <div>
              <p>
                <i class="el-icon-arrow-right"></i>
                <span>平台结算</span>
              </p>
              <p>0.02</p>
            </div>
            <div>
              <p>
                <i class="el-icon-arrow-right"></i>
                <span>平台结算</span>
              </p>
              <p>0.02</p>
            </div>
            <div>
              <p>
                <i class="el-icon-arrow-right"></i>
                <span>平台结算</span>
              </p>
              <p>0.02</p>
            </div>
            <div>
              <p>
                <i class="el-icon-arrow-right"></i>
                <span>平台结算</span>
              </p>
              <p>0.02</p>
            </div>
            <div>
              <p>
                <i class="el-icon-arrow-right"></i>
                <span>平台结算</span>
              </p>
              <p>0.02</p>
            </div>
            <div>
              <p>
                <i class="el-icon-arrow-right"></i>
                <span>平台结算</span>
              </p>
              <p>0.02</p>
            </div>
            <div>
              <p>
                <i class="el-icon-arrow-right"></i>
                <span>平台结算</span>
              </p>
              <p>0.02</p>
            </div>
            <div>
              <p>
                <i class="el-icon-arrow-right"></i>
                <span>平台结算</span>
              </p>
              <p>0.02</p>
            </div>
            <div>
              <p>
                <i class="el-icon-arrow-right"></i>
                <span>平台结算</span>
              </p>
              <p>0.02</p>
            </div>
            <div>
              <p>
                <i class="el-icon-arrow-right"></i>
                <span>平台结算</span>
              </p>
              <p>0.02</p>
            </div>
            <div>
              <p>
                <i class="el-icon-arrow-right"></i>
                <span>平台结算</span>
              </p>
              <p>0.02</p>
            </div>
            <div>
              <p>
                <i class="el-icon-arrow-right"></i>
                <span>平台结算</span>
              </p>
              <p>0.02</p>
            </div>
            <div>
              <p>
                <i class="el-icon-arrow-right"></i>
                <span>平台结算</span>
              </p>
              <p>0.02</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
        <ul>
          <li class="pay-li">
            <p class="pay-logo"><i class="el-icon-s-order"></i></p>
            <div>
              <p class="pay-p">批量打款</p>
              <p class="pay-text">批量订单快速到账</p>
            </div>
          </li>
          <li class="pay-li">
            <p class="pay-logo"><i class="el-icon-s-order"></i></p>
            <div>
              <p class="pay-p">批量打款</p>
              <p class="pay-text">批量订单快速到账</p>
            </div>
          </li>
          <li class="items">
            <p class="index-p">最近项目</p>
            <el-divider></el-divider>
            <div class="btn-box">
                <p>
                  <el-button>
                    <router-link to="/newIndent">默认按钮</router-link>
                  </el-button>
                  <el-button>
                    <router-link to="/newIndent">默认按钮</router-link>
                  </el-button>
                  <el-button>
                    <router-link to="/newIndent">默认按钮</router-link>
                  </el-button>
                </p>
                <p>
                  <el-button>
                    <router-link to="/newIndent">默认按钮</router-link>
                  </el-button>
                  <el-button>
                    <router-link to="/newIndent">默认按钮</router-link>
                  </el-button>
                  <el-button>
                    <router-link to="/newIndent">默认按钮</router-link>
                  </el-button>
                </p>
                <p>
                  <el-button>
                    <router-link to="/newIndent">默认按钮</router-link>
                  </el-button>
                  <el-button>
                    <router-link to="/newIndent">默认按钮</router-link>
                  </el-button>
                  <el-button>
                    <router-link to="/newIndent">默认按钮</router-link>
                  </el-button>
                </p>
            </div>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      show: false,
      show1: false
    }
  },
  methods: {
    showScrollbar () {
      this.show = true
    },
    hideScrollbar () {
      this.show = false
    },
    showPrice () {
      this.show1 = true
    },
    hidePrice () {
      this.show1 = false
    }
  }
}
</script>

<style>
.btn-box{
  display: flex;
  flex-wrap: wrap;
}
a{
  text-decoration: none;
}
.btn-box p{
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
}
.btn-box p button{
  margin-right: 20px;
}
.index-title {
  font-size: 13px;
  color: #616870;
  padding: 12px 0 30px 0px;
}
.index-title i {
  color: #2c41b0;
  font-size: 25px;
}

.index-box {
  padding: 0 20px;
}

.index-box .el-col {
  height: 100%;
}

.index-box .grid-content ,.pay-li,.items{
  margin: 5px;
  height: 775px;
  max-width: 535px;
  background-color: #fff;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.2);
}
.pay-li{
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 30px;
  margin-bottom: 24px;
}
.pay-p{
  font-size: 25px;
  font-weight: bold;
}
.pay-text{
  margin-top: 20px;
  font-size: 16px;
  color: #3a54e2;
}
.pay-logo{
  font-size: 70px;
  color: #2c41b0;
}
.items{
  height: 427px;
}
.block {
  padding: 0 10px;
}

.index-p {
  padding: 18px 0 0 30px;
  font-size: 20px;
  font-weight: bold;
  line-height: 20px;
}

.card-box,.price-box {
  height: 80%;
  overflow: auto;
  padding-bottom: 40px;
  background-color: #fff;
}
.price-box {
  padding: 0 20px 40px;
}
.price-box div{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-top: 1px solid #eee;
  font-size: 12px;
  line-height: 40px;
}
.price-box div p{
  margin:0 20px;
}
.card-box::-webkit-scrollbar,.price-box::-webkit-scrollbar {
  width: 4px;
  background-color: #f1f1f1;
}

.card-box::-webkit-scrollbar-thumb,.price-box::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

.card-box::-webkit-scrollbar-thumb:vertical ,.price-box::-webkit-scrollbar-thumb:vertical{
  height: calc(100% / (100% / 200px));
}

.card-box::-webkit-scrollbar-thumb:horizontal,.price-box::-webkit-scrollbar-thumb:horizontal {
  width: calc(100% / (100% / 300px));
}

.card-box::-webkit-scrollbar-thumb:hover,.price-box::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
</style>
