<template>
    <div class="login_container">
        <div class="login_title">
            基于视听网络的声源定位系统
        </div>

        <div class="login_box">
            <!-- 头像区域 -->
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>
            <!-- 登录表单区域 -->
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
                </el-form-item>

                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" type="password"></el-input>
                </el-form-item>

                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">注册</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            loginForm: {
                username: 'admin',
                password: '123456'
            },

            loginFormRules: {
                //验证用户名是否合法
                username: [
                    {required: true, message:'请输入用户名', trigger: 'blur'},
                    {min: 3, max: 10, message:'长度在3到10个字符', trigger: 'blur'}
                ],
                //验证密码是否合法
                password: [
                {required: true, message:'请输入密码', trigger: 'blur'},
                {min: 6, max: 15, message:'长度在6到15个字符', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        resetLoginForm(){
            // console.log(this);
            this.$refs.loginFormRef.resetFields();
        },

        login(){
            this.$refs.loginFormRef.validate(async valid => {
                if(!valid) return;
                const result = await this.$http.post('login', this.loginForm);
                if(result.data.meta.status !== 200) return this.$message.error('登录失败');
                this.$message.success('登录成功');
                // 1.将登录成功后的有效token，保存在客户端的sessionStorage中
                // 1.1 项目中很多其他aip接口，必须在登陆后才能访问
                // 1.2 token应该在当前网站打开期间生效
                window.sessionStorage.setItem('token', result.data.data.token)
                // 2. 通过编程式导航跳转到后台主页，路由地址为 /home
                this.$router.push('/home')

            })
        }
    }
}
</script>


<!-- 样式配置 -->
<style lang="less" scoped>
.login_container{
    background-color: #008b8b;
    height: 100%;
}
.login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avatar_box{
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;

        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color:  #eee;
        }
    }
}

.login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
.btns{
    // display: flex;
    // justify-content: flex-end;
    display: block;
    text-align: center;
    // margin: auto;
    // bottom: 100%;
}

.login_title{
    background-color: #e0ffff;
    height: 10%;
    text-align: center;
    line-height: 100px;
    font-size: 40px;
    letter-spacing: 20px;
    font-weight: 600;
    border-radius: 3px;
}
</style>