<template>
  <div>
    <div class="bjt">
      <img class="t1" src="https://www.atzuche.com/static/media/banner_txt.27b00f5f.png">
    </div>
    <div class="bd">
      <el-menu  class="el-menu-demo" mode="horizontal" >
        <el-menu-item index="1">全部订单</el-menu-item>
      </el-menu>
      <!--表单-->

      <el-table
        :data="tableData"
        stripe
        style="width: 100%"

      >
        <el-table-column
          prop="caname"
          label="车名"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="cacard"
          label="车牌号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="xia"
          label="下单时间"
          width="200">
        </el-table-column><el-table-column
        prop="qu"
        label="取车时间"
        width="200">
      </el-table-column><el-table-column
        prop="yong"
        label="使用时长"
        width="200">
      </el-table-column><el-table-column
        prop="money"
        label="实际需交金额"
        width="210">
      </el-table-column><el-table-column
        label="操作"
        width="420">
        <template slot-scope="scope" >
          <el-button type="primary" @click="deleteById(scope.row)" round >退订</el-button>
        </template>
      </el-table-column>
      </el-table>
    </div>
    <div class="aa">

    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        tableData: [],

      }
    },
    methods:{
      findAll:function (res) {
      var uid=1;
        axios.get("api/item/itemall/"+uid).then(res=>{
          this.tableData=res.data
        })
      },
      deleteById:function (scop) {
        axios.get("api/item/Itemdelete/"+scop.oid).then(res=>{
          if(res.data==("success")){
            this.$notify({
              message: '删除成功',
              type: 'success'
            });
            this.findAll();
          }else{
            this.$notify({
              message: '删除失败',
              type: 'warning'
            });
          }
        })
      }
    },
    mounted(){
      this.findAll()
    }
  }
</script>

<style scoped>
  .bjt{
    background-image: url("https://www.atzuche.com/static/media/signup-back.a22bc70d.jpg");
    width: 1905px;
    margin-left: -10px;
    height: 450px;
  }
  .t1{
    margin-right: 500px;
    margin-top: 200px;
  }

  .bd{
    width: 1500px;
    margin-left: 200px;
  }
  /*.aa{
    background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575354984614&di=b70db9c654b54593c89ea48cab5353ab&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Fback_pic%2F04%2F24%2F63%2F5558369edcf214a.jpg%2521%2Ffwfh%2F804x482%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue%2Fwatermark%2Ftext%2FOTDorr7orqE%3D%2Ffont%2Fsimkai%2Falign%2Fsoutheast%2Fopacity%2F20%2Fsize%2F50");
    width: 1922px;
    margin-left: -10px;
    height: 500px;
    float: left;
  }*/

</style>
