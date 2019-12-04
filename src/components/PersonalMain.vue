<template>
  <div>
    <el-container :style="height">
      <el-header>
        <div id="top">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content bg-purple">账户余额</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">添加银行卡</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">我的车子</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">我的订单</div>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
        <div>
          <el-button type="text" @click="dialogFormVisible = true">修改信息</el-button>

          <el-dialog title="个人信息" :visible.sync="dialogFormVisible">
            <el-form :model="form" :rules="rules" ref="ruleForm" class="demo-ruleForm">
              <el-form-item label="昵称" :label-width="formLabelWidth" prop="username">
                <el-input v-model="form.username" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="真实姓名" :label-width="formLabelWidth" prop="rename">
                <el-input v-model="form.rename" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="身份证号" :label-width="formLabelWidth" prop="usercard">
                <el-input v-model="form.usercard" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="登录密码" :label-width="formLabelWidth" prop="pass">
                <el-input v-model="form.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="支付密码" :label-width="formLabelWidth" prop="password">
                <el-input v-model="form.password" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="头像" :label-width="formLabelWidth" prop="uph">
                <el-input v-model="form.uph" autocomplete="off"></el-input>
              </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
        </div>
          <div>立即租车</div>
          <div>成为车主</div>
          <div>订单信息</div>
          <div>我的车子</div>
        </el-aside>
        <el-main>
          <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
            <el-form-item
              label="银行卡号"
              prop="bankcard"
              :rules="[
      { required: true, message: '卡号不能为空'},
      { type: 'number', message: '卡号必须为12-18位数字值'}
    ]">
              <el-input type="bankcard" v-model.number="numberValidateForm.bankcard" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
              <el-button @click="resetForm('numberValidateForm')">重置</el-button>
            </el-form-item>
          </el-form>
          <el-table
            :data="tableData"
            height="800"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "PersonalMain",
    data(){
      return{
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        height: {
          height: window.innerHeight - 136 + 'px'
        },
        numberValidateForm: {
          bankcard: ''
        },
        dialogFormVisible: false,
        form: {
          username: '',
          rename:'',
          usercard: '',
          pass: '',
          password: '',
          bankcard: '',
          uph: ''
        },
        formLabelWidth: '100px',
        rules:{
          username: [
            { required: true, message: '请输入昵称', trigger: 'blur' },
            { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
          ],
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted(){

    }
  }
</script>

<style scoped>

  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-row {
    margin-bottom: 20px;
      }
  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>
