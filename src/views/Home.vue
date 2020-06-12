<template>
  <div class="home">
    <CommonHeader />
    <!-- <div class="banner" :style="{ background: 'url(' + banner_img + ')' }"> -->
    <div class="banner">
      <div class="banner_img">
        <img src="@/assets/images/home_banner.jpg" alt srcset />
      </div>
      <div class="first_button_div">
        <Dropdown class="drop_down">
          <Button :size="buttonSize" type="default" ghost>
            免费(延迟) 接口
            <Icon type="ios-arrow-down"></Icon>
          </Button>
          <DropdownMenu slot="list" class="drop_down_menu">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown class="drop_down">
          <Button :size="buttonSize" type="default" ghost>
            JSON
            <Icon type="ios-arrow-down"></Icon>
          </Button>
          <DropdownMenu slot="list" class="drop_down_menu">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div class="second_button_div">
        <Dropdown class="drop_down">
          <Button :size="buttonSize" type="default" ghost>
            加拿大西部28
            <Icon type="ios-arrow-down"></Icon>
          </Button>
          <DropdownMenu slot="list" class="drop_down_menu">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button class="fast_look" :size="buttonSize">快速查看</Button>
      </div>
    </div>

    <div class="service_content">
      <div class="service_left">
        <h3>乐博API 为您提供专业的彩票数据服务</h3>
        <div class="desc">
          <p>乐博API 自成立以来，一直从事彩票数据及各类彩票</p>
          <p>产品的研发，为彩票网站和彩民提供相关服务。</p>
          <p>集合热门彩票种类的开奖号码数据指标、</p>
          <p>走势图表及选号缩水等彩票应用工具，满足彩民更多的需求。</p>
          <p>极时、权威、简洁调用参数、 海量数据储存、</p>
          <p>多平台调用支持</p>
        </div>
        <div class="button_div">
          <Button :size="buttonSize" type="primary">获取接口</Button>
        </div>
      </div>
      <div class="service_right">
        <img src="@/assets/images/home_icon.jpg" alt srcset />
      </div>
    </div>

    <div class="our-data">
      <h2>我们的数据</h2>
      <div class="our_data_content">
        <div class="our_data_detail">
          <img src="@/assets/images/data_1.jpg" alt srcset />
          <h3>专业彩票开奖数据</h3>
          <p>专业面向彩票行业网站和开发爱好者的彩票开奖服务</p>
          <p>api数据开发接口。与国内多个彩票中心合作的数据来源</p>
          <p>开奖信息更新及时,全面覆盖所有彩种的开奖信息。</p>
        </div>

        <div class="our_data_detail">
          <img src="@/assets/images/data_2.jpg" alt srcset />
          <h3>丰富的彩票指标数据</h3>
          <p>AC值/极距/和值/合值/质合数/奇偶和…近千项</p>
          <p>指标数据，尽收囊中，不再需要在客户端计算云端0.1秒</p>
          <p>专业面向彩票行业网站和开发爱好者的彩票开奖服务</p>
        </div>

        <div class="our_data_detail">
          <img src="@/assets/images/data_3.jpg" alt srcset />
          <h3>美观易看的走势图表</h3>
          <p>提供丰富的号码走势分析，包括：带折线的号码走势图</p>
          <p>跟踪号码变化的K线图、统计号码次数的直方图</p>
          <p>以及专用于计算号码遗漏值的遗漏分析图表。</p>
        </div>

        <div class="our_data_detail">
          <img src="@/assets/images/data_4.jpg" alt srcset />
          <h3>功能强大的彩票应用工具</h3>
          <p>超强在线缩水，支持在线百亿次计算，可直接调用界面</p>
          <p>无须重新设计。 更多工具……增色您的网站/软件/APP</p>
          <p>让内容真正为王，获取流量更容易！</p>
        </div>
      </div>
    </div>

    <div class="fast_access">
      <h3>接口访问快速通道</h3>
      <div class="fast_access_content">
        <Button class="fast_access_button" :size="buttonSize" type="primary">延迟面板</Button>
        <Button class="fast_access_button" :size="buttonSize" type="primary">掩码面板</Button>
        <Button class="fast_access_button" :size="buttonSize" type="primary">会员面板</Button>
      </div>
    </div>

    <div class="our-api">
      <h3>我们的接口</h3>
      <div class="our-api-content">
        <div class="our-api-item">
          <img src="@/assets/images/free.svg" />
          <div class="item_desc">
            <h3>免费(延迟)接口</h3>
            <h4>[适用 :开发环境/测试环境/仿真环境]</h4>
            <div class="line"></div>
            <p>无需注册、无需授权</p>
            <p>完全免费的接口访问</p>
            <p>延迟2分钟-10分钟提供最新号码</p>
            <p>可获取最新1-20期的开奖号码</p>
            <p>傻瓜式自助接口网址生成功能</p>
            <p>由8核16G的单台服务器提供支撑</p>
            <p>技术故障响应时间不大于12小时(SLA)</p>
          </div>
        </div>
        <div class="our-api-item">
          <img src="@/assets/images/api_platform.svg" />
          <div class="item_desc">
            <h3>测试(掩码)接口</h3>
            <h4>[适用 :开发环境/集成测试环境]</h4>
            <div class="line"></div>
            <p>无需注册、无需授权</p>
            <p>完全免费的接口访问</p>
            <p>无延迟提供最新号码</p>
            <p>可获取最新1-20期开奖号码（第1位带掩码）</p>
            <p>可获取指定日期的历史开奖号码</p>
            <p>所有开奖号码的第1位被掩码覆盖</p>
            <p>傻瓜式自助接口网址生成功能</p>
            <p>由8核16G的单台服务器提供支撑</p>
            <p>技术故障响应时间不大于12小时(SLA)</p>
          </div>
        </div>
        <div class="our-api-item">
          <img src="@/assets/images/vip_user.svg" />
          <div class="item_desc">
            <h3>会员(稳定)接口</h3>
            <h4>[适用 :UAT环境/仿真环境/生产环境]</h4>
            <div class="line"></div>
            <p>需注册并购买后开通</p>
            <p>可创建多个TOKEN账号</p>
            <p>无延迟提供最新号码</p>
            <p>可获取最新1-20期开奖号码</p>
            <p>可获取指定日期的历史开奖号码</p>
            <p>傻瓜式自助网址接口生成功能</p>
            <p>提供“接口网址生成”独立控制面板</p>
            <p>接口到期前可通过发送提醒邮件和短信通知</p>
            <p>主接口由16台8核16G的集群服务器支撑</p>
            <p>备用接口由4台8核16G的集群服务器支撑</p>
            <p>技术故障响应时间不大于1小时(SLA)</p>
          </div>
        </div>
      </div>
    </div>
    <div class="advertise">
      <img src="@/assets/images/data_5.jpg" />
    </div>

    <CommonFooter />
  </div>
</template>

<script>
import CommonHeader from "@/components/common/Header";
import CommonFooter from "@/components/common/Footer";
export default {
  name: "Home",
  data() {
    return {
      banner_img: require("../assets/images/home_banner.jpg"),
      buttonSize: "large"
    };
  },
  components: {
    CommonHeader,
    CommonFooter
  },
  beforeCreate() {
    // this.$nextTick(function() {
    //   console.log(this.screenWidth);
    // });
  },
  created() {
    // console.log(this.$options.data);
    // this.$api.article.articleList().then(res => {
    //   console.log(res);
    // });
  }
};
</script>
<style lang="less" scoped>
.home {
  background-color: #f1f6fa;
  min-width: 1400px;
}
.banner {
  // height: 400px;
  min-width: 1400px;
  margin: 0 auto;
  // background: url(../assets/images/home_banner.jpg);

  // background-size: 100% 100%;
  // background-repeat: no-repeat;
  .banner_img {
    width: 100%;
    img {
      width: 100%;
    }
  }
  position: relative;
  .first_button_div {
    position: absolute;
    top: 60%;
    left: 20%;

    .drop_down:first-child {
      margin-right: 20px;
      button {
        width: 170px;
      }
      .drop_down_menu {
        width: 168px;
      }
    }
  }
  .second_button_div {
    position: absolute;
    top: 73%;
    left: 20%;

    .drop_down {
      margin-right: 20px;
      button {
        width: 170px;
      }
      .drop_down_menu {
        width: 168px;
      }
    }
    .fast_look {
      color: #1748af;
    }
  }
}
.service_content {
  height: 400px; // justify-content: space-between;
  min-width: 1200px;
  position: relative;
  .service_left {
    width: 60%;
    margin: 50px;
    background: white;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 50px;
    -webkit-transform: skew(-15deg);
    -moz-transform: skew(-15deg);
    -o-transform: skew(-15deg);
    transform: skew(-15deg);
    position: absolute;
    height: 300px;
    left: -12%;
    h3 {
      text-align: center;
      padding-left: 200px;
      margin: 4% 0 2% 0;
      -webkit-transform: skew(15deg);
      -moz-transform: skew(15deg);
      -o-transform: skew(15deg);
      transform: skew(15deg);
    }
    .desc {
      // text-align: center;
      padding-left: 49%;
      -webkit-transform: skew(15deg);
      -moz-transform: skew(15deg);
      -o-transform: skew(15deg);
      transform: skew(15deg);
      color: #6d6d6d;
    }
    .button_div {
      padding-left: 51%;

      -webkit-transform: skew(15deg);
      -moz-transform: skew(15deg);
      -o-transform: skew(15deg);
      transform: skew(15deg);
      margin: 1% 0;
    }
  }
  .service_right {
    position: absolute;
    margin: 50px;
    left: 55%;
    top: -7%;

    img {
      width: 250px;
      margin-top: 75px;
      line-height: 300px;
    }
  }
}
.our-data {
  background-color: white;
  height: 550px;
  // width: 1200px;
  // margin: 0 auto;
  h2 {
    text-align: center;
    padding-top: 2%;
  }
  .our_data_content {
    width: 1200px;
    margin: 0 auto;
    display: -webkit-flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    // padding-top: 0%;
    .our_data_detail {
      width: 50%;
      text-align: center;
      margin: 2% 0;
      color: #6d6d6d;
      h3 {
        margin-bottom: 3%;
      }
    }
  }
}
.fast_access {
  height: 200px;
  text-align: center;
  h3 {
    margin-top: 2%;
  }
  .fast_access_content {
    width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    .fast_access_button {
      margin-top: 5%;
      width: 30%;
      button {
        padding: 0 5%;
      }
    }
  }
}

.our-api {
  background-color: #2c98e3;
  height: 660px;
  h3 {
    text-align: center;
    color: white;
    letter-spacing: 1px;
    padding: 2% 0;
  }
  .our-api-content {
    display: flex;
    justify-content: space-between;
    width: 1100px;
    margin: 0 auto;

    .our-api-item {
      width: 32%;
      margin-left: 2%;
      border-radius: 3px;

      p {
        color: #6d6d6d;
      }
      img {
        display: block;
        margin: 0 auto;
        width: 60px;
        // color: white;
      }
      .item_desc {
        background-color: white;
        height: 380px;
        border-radius: 3px;
        margin-top: 10%;
        h3 {
          margin-top: 3%;
        }
        h3,
        h4 {
          color: #2c98e3;
          text-align: center;
        }
        p {
          font-size: 14px;
          padding: 0% 10%;
        }
        .line {
          height: 1px;
          width: 80%;
          margin: 5% auto;
          background-color: #c6c6c6;
        }
      }
    }
  }
}
.advertise {
  background: white;
  img {
    width: 1100px;

    display: block;
    margin: 0 auto;
  }
}
</style>
