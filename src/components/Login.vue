<template>
    <div class="mx-auto container p-6">
        <div class="text-xl w-fit mx-auto mb-6">用户登录</div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="80px" class="mx-auto w-fit">
            <el-form-item label="电话号码" prop="telephone" >
                <el-input v-model="loginForm.telephone"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" >
                <el-input v-model="loginForm.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <button class="buttonStandardDark mr-4" @click.prevent="submitForm('loginForm')">登录</button>
                <el-button @click="resetForm('loginForm')">忘记密码</el-button>
            </el-form-item>
        </el-form>
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="80px" class="mx-auto w-fit">
            <el-form-item label="电话号码" prop="telephone" >
                <el-input v-model="loginForm.telephone"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="code" class="flex">
                <el-input v-model="loginForm.code" maxlength="5" class="w-1/3"></el-input>
                <button v-if="ifsend" class="buttonStandardDark ml-4" @click.prevent="getCaptcha">获取验证码</button>
                <button v-else class="buttonStandardLight ml-4" @click.prevent="getCaptcha" disabled>请{{interval}}s后重试</button>
            </el-form-item>
            <el-form-item>
                <button class="buttonStandardDark mx-auto" @click.prevent="submitForm('loginForm')">确认</button>
            </el-form-item>
        </el-form>
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="mx-auto w-fit">
            <el-form-item label="输入新密码" prop="telephone" >
                <el-input v-model="loginForm.telephone"></el-input>
            </el-form-item>
            <el-form-item label="重复新密码" prop="password" >
                <el-input v-model="loginForm.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <button class="buttonStandardDark mr-4" @click.prevent="submitForm('loginForm')">确认</button>
                <el-button @click="resetForm('loginForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

	import qs from 'qs'
    import axios from 'axios'

	export default {
		name: "Login",
		data() {
			return {
                ifsend:true,
                interval:60,
				loginForm: {
					username: '',
					password: '',
                    telephone:'',
					code: '',
				},
				rules: {
					username: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
					telephone: [
						{ required: true, message: '请输入电话号码', trigger: 'blur' }
					],
					code: [
						{ required: true, message: '请输入验证码', trigger: 'blur' },
						{ min: 5, max: 5, message: '长度为 5 个字符', trigger: 'blur' }
					],
				},
				captchaImg: null
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						// axios.post('/login?'+ qs.stringify(this.loginForm)).then(res => {
						// 	console.log(res)
						// 	const jwt = res.headers['authorization']
						// 	this.$store.commit('SET_TOKEN', jwt)
						// 	this.$router.push("/index")
						// })
                        console.log(this.loginForm)
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			getCaptcha() {
                this.ifsend=false
                var timerun=setInterval(()=>{
                    this.interval-=1;
                    if(this.interval==0){
                        this.interval=60
                        this.ifsend=true
                        clearInterval(timerun)
                    }
                },1000)
                
				// axios.get('/captcha').then(res => {
				// 	console.log("/captcha")
				// 	console.log(res)
				// 	this.loginForm.token = res.data.data.token
				// 	this.captchaImg = res.data.data.captchaImg
				// 	this.loginForm.code = ''
				// })
			}
		}
	}
</script>

<style scoped>

</style>