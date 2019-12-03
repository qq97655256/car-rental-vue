<template>
  <div>
    <div  style="display:block;">
      <h1 id="loginName">你好，{{loginName}}</h1>
    </div>
    <div  >
      <ul>
        <li>账户余额</li>
        <li>银行卡</li>
        <li>我的车子</li>
      </ul>
    </div>
    <div>
      <el-button type="text" @click="dialogFormVisible = true">修改信息</el-button>

      <el-dialog title="个人信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <a href="">租车</a>
    </div>
    <div>
      <a href="">成为车主</a>
    </div>
    <div>
      <a href="">订单详情</a>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "PersonalCenter",
    data() {
      return {
        loginName:"123456",
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      }
    },
    methods: {},
    mounted() {

    }
  }
</script>


<style scoped>

</style>
