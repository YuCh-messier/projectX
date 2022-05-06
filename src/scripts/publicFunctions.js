// 检测登录状态
function checkAccount(){
    return {statu:true,userInfo:{headImg:'',name:'张蠡奥'}}
    return {statu:false,userInfo:null}
}
var host='http://localhost/pages'
export {checkAccount}
export {host}