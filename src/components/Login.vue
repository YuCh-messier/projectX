<template>
    <div class="mx-auto container p-6">
        <div class="text-xl w-fit mx-auto mb-6">用户登录</div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="80px" class="mx-auto w-fit" v-if="whichPart==0">
            <el-form-item label="电话号码" prop="telephone" >
                <el-input v-model="loginForm.telephone"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" >
                <el-input v-model="loginForm.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <button class="buttonStandardDark mr-4" @click.prevent="submitForm('loginForm')">登录</button>
                <el-button @click="whichPart=1">忘记密码</el-button>
            </el-form-item>
        </el-form>
        <el-form :model="loginForm2" :rules="rules" ref="loginForm2" label-width="80px" class="mx-auto w-fit" v-if="whichPart==1">
            <el-form-item label="电话号码" prop="telephone" >
                <el-input v-model="loginForm2.telephone"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="code" class="flex">
                <el-input v-model="loginForm2.code" maxlength="5" class="w-1/3"></el-input>
                <button v-if="ifsend" class="buttonStandardDark ml-4" @click.prevent="getCaptcha">获取验证码</button>
                <button v-else class="buttonStandardLight ml-4" @click.prevent="getCaptcha" disabled>请{{interval}}s后重试</button>
            </el-form-item>
            <el-form-item label="新密码" prop="password" >
                <el-input v-model="loginForm2.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <button class="buttonStandardDark mr-4" @click.prevent="submitForm2('loginForm2')">确认</button>
                <el-button @click="resetForm('loginForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

	import qs from 'qs'
    import axios from 'axios'
	import { host,serverHost,getDatasP,setStandardInfo } from '../scripts/publicFunctions';
	import $ from 'jquery'

	export default {
		name: "Login",
		data() {
			return {
				whichPart:0,
                ifsend:true,
				interval:60,
				iftrue:false,
				telephoneToken:'',
                interval:60,
				loginForm: {
					password: '',
                    telephone:'',
				},
				loginForm2: {
					password: '',
                    telephone:'',
					code:''
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
						getDatasP((e)=>{console.log(e);setStandardInfo();window.location=host+'pages/recruits.html'},'user/login')
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			submitForm2(formName) {
				if(!this.iftrue){
					return
				}
				this.$refs[formName].validate((valid) => {
					if (valid) {

						$.ajax({
							url: 'http://it120club.space/check/checkTelephone',
							type: "post",
							data:{telephoneToken:this.telephoneToken,telephone:this.loginForm2.telephone,code:this.loginForm2.code},
							crossDomain:true,
							xhrFields: {
								withCredentials: true //允许跨域带Cookie
							},
							success:(data,statu)=>{
								if(statu=='success'){
									if(data.statu){
										getDatasP((e)=>{
											alert('重置成功')
											window.location=host+'pages/login.html'
										},'user/resetPwd',this.loginForm2)
									}
									else{
										alert('验证码有误')
									}
								}
								else{
									alert('出错了')
								}
							}
						});

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
				if(this.loginForm2.telephone!=''){
                this.ifsend=false
                var timerun=setInterval(()=>{
                    this.interval-=1;
                    if(this.interval==0){
                        this.interval=60
                        this.ifsend=true
                        clearInterval(timerun)
                    }
                },1000)
                
				$.ajax({
					url: 'http://it120club.space/check/sendTelephone',
					type: "post",
					data:{telephone:this.loginForm2.telephone},
					crossDomain:true,
					xhrFields: {
						withCredentials: true //允许跨域带Cookie
					},
					success:(data,statu)=>{
						if(statu=='success'){
							this.iftrue=true
							this.telephoneToken=data.telephoneToken
						}
						else{
							alert('出错了')
						}
					}
				});
			}
			}
		}
	}
</script>

<style scoped>

</style>