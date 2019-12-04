<template>
  <div class="signup">
    <div id="head"></div>
    <div class="main signup-register">
      <img class="main-register-banner-text" src="/static/img/register/banner_txt.27b00f5f.png" alt="凹凸租车"/>
    </div>
    <div class="registered signup-register-main">
      <h3 class="registered_title">
        欢迎登录
        <span style="color: red">凹凸</span>
        APP
      </h3>
      <el-tabs type="border-card">
        <el-tab-pane label="手机密码登录">
          <div class="registered_box">
            <input type="text" placeholder="请输入手机号"></input>
          </div>
          <div class="registered_box">
            <input type="password"  placeholder="请输入密码"/>
          </div>
          <el-button class="registered_botton">登录</el-button>
        </el-tab-pane>
        <el-tab-pane label="手机验证码登录">
          <div class="registered_box">
            <input type="text" placeholder="请输入手机号"></input>
          </div>
          <div class="registered_box">
            <input type="text"  placeholder="请输入短信验证码" maxlength="6"/>
            <span @click="onSubmit">获取验证码</span>
          </div>
          <el-button class="registered_botton" @click="onSubmit">登录</el-button>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="gutter-root">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img src="static/img/register/umbrella.png">
            <h3>高达255万保额</h3>
            <h3>保障无忧用车</h3>
            <p>全方位保障</p>
            <p>用车更安心</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img style="height: 65px; width: 140px;" src="static/img/register/point-three.a782973d.png">
            <h3>免租车押金</h3>
            <h3>更低门槛</h3>
            <p>芝麻信用分达到650以上</p>
            <p>就可以免租车押金</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img  src="static/img/register/phone.png">
            <h3>手机在线下单</h3>
            <h3>流程一目了然</h3>
            <p>押金支付，用车流程，违章理赔</p>
            <p>APP里全搞定</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img src="static/img/register/car.png">
            <h3>管家送车上门</h3>
            <h3>服务更贴心</h3>
            <p>车管家带您无忧交接车</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="width: 25px;margin-left:650px;border-radius: 5px;border-collapse:collapse; border: 2px solid limegreen;"> </div>
    <h2 class="sign-sub-title">支持全国58个主流城市 各种车型任您选择</h2>
    <h3 class="sign-sub-des">上海、北京、广州、深圳、南京、杭州、苏州、成都、重庆…</h3>
    <ul class="signup-carlist">
      <li class="signup-carlist-item">
        <img src="static/img/register/car1.3b9bc963.jpg">
        <h4>高尔夫 R</h4>
        <span>5.0分</span>
      </li>
      <li class="signup-carlist-item">
        <img src="static/img/register/car2.dd042d39.jpg">
        <h4>宝马 Z4</h4>
        <span>5.0分</span>
      </li>
      <li class="signup-carlist-item">
        <img src="static/img/register/car3.ca0216c8.jpg">
        <h4>特斯拉Model S</h4>
        <span>5.0分</span>
      </li>
      <li class="signup-carlist-item">
        <img src="static/img/register/car4.7b0694ab.jpg">
        <h4>福特 野马</h4>
        <span>5.0分</span>
      </li>
      <li class="signup-carlist-item">
        <img src="static/img/register/car5.2eb99e19.jpg">
        <h4>宝马 5系</h4>
        <span>5.0分</span>
      </li>
      <li class="signup-carlist-item">
        <img src="static/img/register/car6.b1508805.jpg">
        <h4>奥迪 A7</h4>
        <span>5.0分</span>
      </li>
      <li class="signup-carlist-item">
        <img src="static/img/register/car7.6030eb56.jpg">
        <h4>雪佛兰 科迈罗</h4>
        <span>5.0分</span>
      </li>
      <li class="signup-carlist-item">
        <img src="static/img/register/car8.55b03b41.jpg">
        <h4>MINI ONE</h4>
        <span>5.0分</span>
      </li>
      <li class="signup-carlist-item">
        <img src="static/img/register/car9.d4efc378.jpg">
        <h4>保时捷 911</h4>
        <span>5.0分</span>
      </li>
    </ul>
    <p class="signup-sub signup-sub-active">
      每台车的车主有各自的定价方案，平台还有各种优惠券可供您使用，具体价格可参见APP
    </p>
    <div class="view-more">
      <div class="view-more-box">
          <span class="view-more-box-name">
            查看更多车辆 >>
          </span>
        <div class="view-more-hover">
          <img src="static/img/register/wechat.93bd7b70.png" alt="下载APP">
          <p>请下载
            <span style="color: #00ba82">凹凸租车</span>
            APP
          </p>
        </div>
      </div>
    </div>
    <div style="width: 25px;margin-left:650px;border-radius: 5px;border-collapse:collapse; border: 2px solid limegreen;"> </div>
    <h2 class="sign-sub-title">长租、短租、时租… 各种租车方式应有尽有</h2>
    <h3 class="sign-sub-des">长租更划算、短租更快捷、时租更随意</h3>
    <ul class="clearfix signup-rentway">
      <li class="signup-rentway-item signup-rentway-item-shortrent">
        <h3>短租</h3>
        <span>8小时起租</span>
        <p>适合家庭、朋友出游时使用，或临时工作代步或商务接客用车。别克GL8、丰田SUV、敞篷跑车……各车型随你选。</p>
      </li>
      <li class="signup-rentway-item signup-rentway-item-longrent">
        <h3>长租</h3>
        <span>一个月起租</span>
        <p>适合商务用车，或个人日常代步用车，费用更划算。车型配有经济型、舒适型、SUV、MPV、豪华型、尊贵型等车型，满足您的多层次用车体验。</p>
      </li>
      <li class="signup-rentway-item signup-rentway-item-hourrent">
        <h3>时租</h3>
        <span>不限时间</span>
        <p>适合市内临时用车需求，比如上下班使用。找车方便，停车灵活，费用低廉，随取随还。现为凹凸租车旗下独立APP“凹凸共享车”。</p>
      </li>
    </ul>
    <el-row :gutter="20">
      <el-col :span="9">
        <div class="signup-view">
          <h2 class="signup-appview-title">凹凸租车</h2>
          <h3 class="signup-appview-title">跟着好奇心出发</h3>
          <p class="sign-appview-sub">短租、长租、时租、自助找车、快捷租车……</p>
          <p class="sign-appview-sub">万款车型，随您选择</p>
          <div class="view-more-box">
            <span class="view-more-box-name" style="color: limegreen;cursor: pointer;border: 3px solid ;border-radius: 5px">下载APP</span>
            <div class="view-more-hover" >
              <img src="static/img/register/wechat.93bd7b70.png" alt="下载APP">
              <p>请下载<span style="color: #00ba82">凹凸租车</span>APP</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="signup-appview-app"></div>
      </el-col>
    </el-row>

  </div>
</template>
<style>
  .signup-appview-app {
    margin-top: 550px;
    margin-right: 150px;
    position: absolute;
    width: 911px;
    top: -65px;
    right: -190px;
    height: 620px;
    background: url(/static/img/register/app.d5b1baa7.png) 0 0 no-repeat;
    background-size: cover;
  }
  .sign-appview-sub {
    font-size: 14px;
    line-height: 24px;
    color: #999;
  }
  .signup-rentway{
    margin-left: 50px;
  }
  .signup-rentway-item-shortrent{
    background-image: url(/static/img/register/rentway1.b5621f1a.png);
  }
  .signup-rentway-item-longrent{
    background-image: url(/static/img/register/rentway2.e61c20e7.png);
  }
  .signup-rentway-item-hourrent{
    background-image: url(/static/img/register/rentway3.15796cae.png);
  }
  .signup-rentway-item {
    width: 328px;
    float: left;
    height: 200px;
    margin-right: 20px;
    background-repeat: no-repeat;
    background-size: 100%;
    color: #fff;
    padding: 310px 26px 0;
  }
  .signup-rentway-item h3 {
    font-size: 24px;
    line-height: 1;
    margin-bottom: 16px;
    color: #fff;
  }
  .signup-rentway-item span {
    font-size: 14px;
    line-height: 1;
  }
  .signup-rentway-item p {
    margin-top: 25px;
    font-size: 12px;
    line-height: 21px;
  }
  #head {
    background-color: #000;
    background-image: url("/static/img/register/lunbotu1.jpg");
    background-position: top center;
    background-repeat: repeat-x;
    text-align: center;
    height: 480px;
  }
  .main{
    width: 1024px;
  }
  .signup-register{
    position: relative;
    height: 77px;
  }
  .main-register-banner-text{
    position: absolute;
    top:-190px;
    left: 80px;
    width: 481px;
    height: 137px;
  }
  .signup-register-main{
    position: absolute;
    top: 100px;
    right: 50px;
  }
  .registered{
    width: 342px;
    height: 308px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 25px 60px 0;
    padding: 38px 36px;
  }
  .registered_title {
    font-size: 18px;
    color: #00bc93;
    margin-bottom: 30px;
    line-height: 1;
  }
  .registered_box{
    height: 50px;
    background-color:#f5f5f5 ;
    border-radius: 2px;
    overflow: hidden;
    margin-bottom: 14px;
    position: relative;
  }
  .registered_box input{
    width: 100%;
    height: 100%;
    background-color:#f5f5f5 ;
    font-size: 14px;
    padding-left: 15px;
    padding-right: 10px;
    border: 1px solid #f5f5f5;
  }
  .registered_box span{
    position: absolute;
    top: 15px;
    right: 10px;
    font-size: 14px;
    color: aquamarine;
    cursor: pointer;
  }
  .registered_botton{
    width: 100%;
    height: 44px;
    margin-top: 12px;
    background-color:#00bc93;
    font-weight: 600;
    cursor: pointer;
  }
  .gutter-root{
    width: 1048px;
    margin: auto;
  }
  .bg-purple h3 {
    color: #333;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
  }
  .bg-purple p {
    color: #999;
    font-size: 12px;
    line-height: 21px;
  }
  .grid-content {
    border-radius: 4px;
    width: 214px;
    height: 300px;
    margin-right:45px;
  }
  .signup-carlist{
    width: 1048px;
    margin: auto;
    list-style: none;
  }
  .signup-carlist-item{
    width: 328px;
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 50px;
    float: left;
  }
  .signup-carlist-item h4 {
    font-size: 16px;
    color: #666;
    float: left;
    margin-left: 6px;
  }
  .signup-carlist-item span {
    font-size: 16px;
    color: #fa624a;
    float: right;
    margin-top: 17px;
    margin-right: 10px;
  }
  .sign-sub-title{
    font-size: 24px;
    font-weight: 600;
    line-height: 1;
    margin: 100px 0 23px;
    text-align: center;
  }
  .sign-sub-des{
    font-size: 14px;
    line-height: 1;
    color: #999;
    margin-bottom: 60px;
    text-align: center;
  }
  .signup-sub-active {
    width: 1048px;
    text-align: center;
    color: #666;
    font-size: 14px;
    padding-bottom: 20px;
  }
  .signup-sub {
    margin: 0 auto;
    text-align: center;
  }
  .view-more{
    height: 60px;
    box-shadow: 0 15px 50px 0 rgba(0,100,115,.15);
    border-radius: 4px;
    line-height: 60px;
    font-size: 14px;
    color: #37af83;
    text-align: center;
    margin-bottom: 120px;
  }
  .view-more-box {
    /*position: relative;*/
    display: inline-block;
  }
  .view-more-hover{
    top: 80px;
    left: 50%;
    width: 180px;
    height: 130px;
    padding: 30px;
    z-index: 1;
  }
  .view-more-hover img {
    position: absolute;
    display: none;
    width: 160px;
    height: 160px;
  }
  .view-more-box:hover img{
    display: block;
  }
  .view-more-box:hover img{
    display: block;
  }
  .view-more-hover p {
    position: absolute;
    display: none;
    color: #333;
    font-size: 14px;
    line-height: 18px;
    margin-left: 10px;
    margin-top: -10px;
  }
  .view-more-box:hover p{
    display: block;
  }
</style>
<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        user:{}
      }
    },
    methods:{
      onSubmit:function () {
        alert("请输入有效的手机号");
      }
    }

  }
</script>
