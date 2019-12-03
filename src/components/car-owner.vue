<template>
  <div>
    <!--背景图片-->
    <div class="bjt">
      <div>
        <img class="zs1" src="https://www.atzuche.com/static/media/owner_text01.15be5b89.png" width="300px"
             height="90px">
        <img class="zs2" src="https://www.atzuche.com/static/media/owner_text02.67df3827.png" width="300px"
             height="90px">
      </div>
      <div id="logn">
        <!--用户查询车辆的信息-->
        <div class="bt">
          <p class="nr">让您的爱车为您赚钱吧！</p>
          <img class="sx" @click="onsume"
               src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwQDAwQEBAQFBQQFBwsHBwYGBw4KCggLEA4RERAOEA8SFBoWEhMYEw8QFh8XGBsbHR0dERYgIh8cIhocHRz/2wBDAQUFBQcGBw0HBw0cEhASHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/wgARCAAWABgDAREAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABwYFCP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAOvzIEkJRnAgYCALI//EACgQAAIBAwMDAwUBAAAAAAAAAAEDAgQFBgAREgcUIUFicggQEyQxVf/aAAgBAQABPwDPM6rrJcbZjeN29Vzy27RmxCXzMEUyYkCT3yHkQBIGw8yPgaOO9XaVfeqzew1lZ/mvspVSy9obFhYPlq3uqXUVNKtWpNfJUJPSphnCEyPIBIBI33AOw31itLmU+u2V3O64wims06CnpEXLvucfxwkyQCxw3kZme8onjw+2O40u5fUdlN7pLvdmqtNBTU7/ANkFXcMM5FHHbbhFfA7ektZHaZ3uz1duXcq63TqIiMauhmIOSd/BiSDo4T1MfDsX9TUCh/kqlFjXCslH5cysH3CGsMw61YNZha7StgXzk9z3T5uqWyO8msmfM5y9Sdf/xAAUEQEAAAAAAAAAAAAAAAAAAAAw/9oACAECAQE/AB//xAAUEQEAAAAAAAAAAAAAAAAAAAAw/9oACAEDAQE/AB//2Q==">
        </div>
        <!--根据品牌选择车型，根据车型选择型号，选择出车年月份-->
        <el-select class="xzk" v-model="prov" style="width:167px;margin-right: 25px;">
          <el-option v-for="option in arr" :value="option.name">
            {{ option.name }}
          </el-option>
        </el-select>
        <el-select class="xzk" v-model="city" style="width:167px;margin-right: 25px;">
          <el-option v-for="option in cityArr" :value="option.name">
            {{ option.name }}
          </el-option>
        </el-select>
        <el-select class="xzk" v-model="district" style="width:167px;margin-right: 25px;">
          <el-option v-for="option in districtArr" :value="option.name">
          {{ option.name }}
        </el-option>
        </el-select>
        <el-select class="xzk" v-model="year" style="width:167px;margin-right: 25px;">
          <el-option v-for="option in year" :value="option.name">
            {{ option.name }}
          </el-option>
        </el-select>
        <br>
        <!--获得信息更改价格-->
        <div class="sy"> 预计收入<span class="je">{{number}}</span></div>
        <div class="ts">在未获知车辆详细配置前，预计收益仅供参考</div>
      </div>
    </div>
    <div>
      <!--成为车主-->
      <h3>成为车主</h3>
      <div class="xian"></div>
      <div class="tb">
        <div class="t1">
          <div class="nr">出租我们的闲置车辆</div>
          <div class="nr1">让我们每月轻松赚3000+</div>
          <div class="em1">SHARING FOR BETTER</div>
        </div>
        <div class="t2">
          <img class="t2t" src="https://www.atzuche.com/static/media/owner02.3d770358.jpg">
        </div>
        <div class="t2">
          <img class="t2t" src="https://www.atzuche.com/static/media/owner03.29ad19bc.jpg">
        </div>
        <div class="t2">
          <img class="t2t" src="https://www.atzuche.com/static/media/owner04.40705290.jpg">
        </div>
        <div class="t3">
          <img class="t3t"
               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDhDRTZGNkFDMDBDMTFFOTk4RUFDMDhFQjFENTZDMzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDhDRTZGNkJDMDBDMTFFOTk4RUFDMDhFQjFENTZDMzYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEOENFNkY2OEMwMEMxMUU5OThFQUMwOEVCMUQ1NkMzNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEOENFNkY2OUMwMEMxMUU5OThFQUMwOEVCMUQ1NkMzNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr0Z92wAAAMAUExURW1t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"
               width="120px" height="120px">
          <div class="xz"><span>下载APP上传爱车</span></div>
        </div>
        <div class="t2">
          <img class="t2t" src="https://www.atzuche.com/static/media/owner05.335a919e.jpg">
        </div>
      </div>
    </div>
    <div>
      <!--模块三，车主保障-->
      <h3>车主保障</h3>
      <div class="xian"></div>
      <div>
        <div class="b2">
          <div>
            <img class="xtb"
                 src="data:image/jpeg;base64,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">
            <div class="dts">提供全方位保障</div>
            <div class="xts">保障包含车损保障及盗抢保障150万</div>
            <div class="xts"> 第三者责任保障100万和座位保障5万</div>
            <div class="xts">租客保障均独立购买，不影响车辆原有商业险</div>
          </div>
        </div>
        <div class="b1">
          <img class="xtb"
               src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwQDAwQEBAQFBQQFBwsHBwYGBw4KCggLEA4RERAOEA8SFBoWEhMYEw8QFh8XGBsbHR0dERYgIh8cIhocHRz/2wBDAQUFBQcGBw0HBw0cEhASHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/wgARCAA+AD4DAREAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAAAwAEBgcIBQEC/8QAGwEAAQUBAQAAAAAAAAAAAAAAAAIDBAUGAQf/2gAMAwEAAhADEAAAAN/BFZ8fIXqmRYPNah821Fq5+zQIEGa9/nKK2tEXnZxSztmeTbFAgQZS9Ly1fX1cdCn0ZzavkW0ICBBU2kqqH3FEZPbGzljfOKvic6451B4GYPRcw0dRO6KwzV6JmurFe1t5brCBXd9Xx6xjSmrlR2awThO6Ww4U6O2dSxkNffDoxXu1CfEvkenxbIzti7Q5yJjDR1A1Eoq5RkhULkMOR//EADsQAAEDAgQDBAYGCwAAAAAAAAECAwQABQYREjEHIWEyQVGRIHGBgqGxCBMUIrLSEBUjM0NSU3KSwuH/2gAIAQEAAT8ArHeM4eBcPyLrMGvSQ2yyDkp1w7JFYn4rYvxXKddfu0mLGJ+7FhrU02nyOaveJqzY6xVYnw7Bv1wQrPPSt5S0H1pVmD7RXCHioMfRHok5CGL3FSFLSjsPo/nT8j6P0mLit+7WO2DsMsLkK95WkfgNJjUI3SuE81Vlx/ZHk9h54RljxDn3PmQfR43Sl3LH8ptSNIhMtMJ8SMtf+5oROlIidKtSl2u5Q5zSEqXGeQ8lJ2JSoEA+VNrK2kqKdJIBKT3ehxlwWm625N5hxdc6MQHlI3W1kfPKkxOlIidK4TYMRd7sufMja4EMZo19lTuYI8hUu4RIDYXKlMx0nZTqwgfE1FlMS2Q7HebeaOy21AjzHoYhjRl3+5qiAfZTJcKNPZy1H4VEtrkx9lhlGp11QQlPiSchWP8AGSuFGGYOHrKULvchBWp4jkyCTmvLvJOYFTjPvUtcu4yn5UlfMuPrK1H2msOS7xh2cmVZ5kmNIH9InJY8CnZQ6EVw3xyMa2MyHUIauMchuS0Ns+5Q6GsT4/YsMhcOOx9pmJ7WZ0oR6zV4xler42tl18Mx1ci0wNII8CdzQjVgCGheKoRWOzrUB1CTWNbVEvfF2Q1eH1sQCtttS9tCQ2PLM/OsW8F5NqnsmyNOzIMlYSkbrbPU+HWrPZLTwlsSpb4RJvklOXVZ30p8EjvNcJFPIxVdn9GQlMKdWhvkkHWk8h7TV/bLt+uilbmS5+I0liksVY5X6qusWZlyaVmoDfSeR+BriThYT3m79DH1rLqEh7Rz22X6suVYWxrLscBUOSyqU0gfsTnkU9CfD5VdHZV7nLmTF63FbDuQO4Adwrh7hs2iM9MfTpfkgBKTyIR/3erpgaFcpT8lL7zLzpzVsUk07w2dH7qehX9zZT8jS+H1xRtIi/5K/LScCXFX8aIPfV+WsPWO62dCmnZcdyHuprSVeVTMFWeYsrDKmVK3+pOQ8qt+ErVblh1DKnXE8wp1WrL9H//EADMRAAAFAgIFDAEFAAAAAAAAAAABAgMEBRESExQhMVFhBhUgIkFxgZGhscHw0RAyM1Lx/9oACAECAQE/ABTKc5UJBMNeJ7iEKhQIaMKWyM956z+9wk0qFITgdaT5fIr1EOmqJxvW2fpw6PItoktOv7zt5f6MYxiutpkQHU7iv5a+jyZbS1ASr+xmfx8DGMYkJS82ppXaVhbX0OTtSyXNHcV1T2d4zBmCu1FTLWU2rrK9g22tf7UmYUlSDwqK3QhrXo6MzbYg4+ltJqVsIUqnFWZK5cn+Muzfw/IZyY6ctpJEXATWo8tvC+kjIVemc3yMO1J7D+BBpapCcxarJEemxo54klc+IxirOK0VQpr7kekkqOm6tfuIHKNDrZ6T1VF6iRJfrUjLTqbL7fvFcJJxmy3GRcdhiIeFhHcQxjGJTecypveKLOy06M5qMtgnU1t9zMQq28R0Ijt5bYq05LiiRfUXuI9SdaQSbEZAqwXagJqzR9h/fEc5s7j9PyJspl3rkRkfgG6lIQVr37w9PfdKxnYuH6f/xAArEQABAwIEBQMFAQAAAAAAAAACAAMEARIFERMhFCAjMTIiUXEQM0FSsWH/2gAIAQMBAT8AUuUMVvUJPz33i9RZfCblvtlcLlVh0/ihtLypy42dxi0slasOPTkjy4oV0kv8WSyTXpIS9lTkxKLqDqCO9FarVh0bUO8u1ERCPkqVEvHkfoOoVvbNCFxWqXK4FoWWvJHc4Vxb1TBuMlc0WShzNdvMu9E/LFsrR3qnJTritUQOqKkti5N6nZSMMJsulvSqbbCC3cW5KBdV46/Kd+4Xyslkma6ZiSnMXdUUxKJsbS3TlScK4lEj1ELq96p2KBVz/KrDr+y4Uvf+rhS9/wCqOBjTLPZFHZu7Jthoa7U+n//Z">
          <div class="dts">严格的认证制度</div>
          <div class="xts">在交易前累计扣分不超过11分</div>
          <div class="xts">车主对租客具有完备的评价体系，且时时更新</div>
        </div>
        <div class="b1">
          <img class="xtb"
               src="data:image/jpeg;base64,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">
          <div class="dts">全方位定位系统，租车全程尽在掌控</div>
          <div class="xts">为所有车辆安装凹凸租车智能车联网全方位终端</div>
          <div class="xts">精准定位车辆，随时掌控车辆信息</div>
          <div class="xts">行程全掌握，爱车共享无忧</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import area from './area.js'
  export default {
    data() {
      return {
        arr: area.arrAll,
        prov: '请选择品牌',
        city: '请选择车型',
        district: '请选择型号',
        year:'选择出场年月份',
        cityArr: [],
        districtArr: [],
        number:'0/元'
      }
    },
    methods: {
      onsume: function () {
        this.prov='请选择品牌';
        this.city='请选择车型';
        this.district= '请选择型号';
        this.year='选择出场年月份';
      },
      updateCity: function() {
        for (var i in this.arr) {
          var obj = this.arr[i];
          if (obj.name) {
            if (obj.name == this.prov) {
              this.cityArr = obj.sub;
              break;
            }
          }
        }
        this.city = this.cityArr[1].name;
      },
      updateDistrict: function() {
        for (var i in this.cityArr) {
          var obj = this.cityArr[i];
          if (obj.name == this.city) {
            this.districtArr = obj.sub;
            break;
          }
        }
        if (this.districtArr && this.districtArr.length > 0 && this.districtArr[1].name) {
          this.district = this.districtArr[1].name;
        } else {
          this.district = '';
        }
      }
    },
    beforeMount() {
      this.updateCity();
      this.updateDistrict();

    },
    watch: {
      prov: function() {
        this.updateCity();
        this.updateDistrict();
      },
      city: function() {
        this.updateDistrict();
      }
    }

  }
</script>
<style>
  /*背景图设置*/
  .bjt {
    background-image: url("https://www.atzuche.com/static/media/banner.c5e07275.jpg");
    height: 500px;
    padding-top: 100px;
  }

  .zs1 {
    margin-left: -1400px;
    margin-top: 60px;
  }

  .zs2 {
    float: left;
    margin-top: 200px;
    margin-left: 500px;
  }

  #logn {
    width: 300px;
    height: 350px;
    background: azure;
    margin-left: 1100px;
    margin-top: -180px;
  }

  /*提示信息*/
  .bt {
    font-size: 20px;
    background-color: azure;
    margin-bottom: 10px;
  }

  .nr {
    font-size: 16px;
    margin-left: -110px;
    padding-bottom: 10px;
  }

  .sx {
    float: right;
    margin-top: -35px;
    margin-right: 20px;
  }

  /*选择框*/
  .xzk{
    height: 50px;
  }

  /*预计收入的css样式*/
  .sy {
    margin-left: 100px;
    margin-top: 20px;
    font-size: 12px;
  }

  .sy .je {
    color: red;
    font-size: 23px;

  }

  /*提示信息*/
  .ts {
    color: darkgrey;
    font-size: 12px;
  }

  /*成为车主*/
  .tb {
    width: 1025px;
    height: 490px;
    background-color: darkgrey;
    margin: auto;
  }

  /*第一个图片*/
  .tb .t1 {
    width: 290px;
    height: 189px;
    background-color: dodgerblue;
    padding-top: 20px;
    float: left;
  }

  .tb .t1 .nr {
    font-size: 20px;
    color: azure;
    margin: auto;
    margin-top: 50px;
    margin-left: -35px;
  }

  .tb .t1 .nr1 {
    font-size: 20px;
    color: azure;
    margin: auto;
    margin-bottom: 20px;
  }

  .tb .t1 .em1 {
    font-size: 12px;
    color: darkgrey;
    margin-left: -80px;
  }

  .t2 {
    float: left;
  }

  .t3 {
    width: 285px;
    height: 275px;
    background-color: darkgrey;
    float: left;
  }

  .t3t {
    margin-top: 50px;
  }

  .xz {
    width: 100px;
    height: 20px;
    margin: auto;
    font-size: 15px;
    color: white;
  }

  .xian {
    width: 45px;
    border: 1px solid deepskyblue;
    margin: auto;
    margin-bottom: 12px;
  }

  .b2 {
    width: 300px;
    height: 350px;
    /*background: deepskyblue;*/
    float: left;
    margin-left: 430px;
  }

  .b1 {
    width: 350px;
    height: 350px;
    /*background: deepskyblue;*/
    float: left;
    margin-left: 15px;
  }

  .xtb {
    margin-top: 80px;
  }

  .dts {
    font-size: 20px;
    margin-bottom: 30px;
  }

  .xts {
    font-size: 14px;
    color: darkgrey;
  }
</style>
