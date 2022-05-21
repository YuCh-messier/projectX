import axios from 'axios'
import $ from 'jquery'

//前端host
var host='http://127.0.0.1:3000/'
//后端host
var serverHost='http://127.0.0.1:3001/'

//初始化标准信息
var userKey=checkAccount()
let cursT=checkLocalStorage()
var standardInfo={statu:false}
if(userKey[0] && cursT[0]){
    standardInfo=Object.assign(cursT[1],{...userKey[1],statu:true})
}

//检测是否有基本信息localstorage
function checkLocalStorage(){
    var informs=['headImg','backImg','name','school','department']
    var res={}
    var statu=true
    for(let i in informs){
        i=informs[i]
        var curSto=hasStorageOrNot(i)
        res[i]=curSto[1]
        if(!hasStorageOrNot(i)[0]){
            statu=false
        }
    }
    return [statu,res]
}  

//检测是后有登录信息cookie
function checkAccount(){
    return (
        [hasCookieOrNot('telephone')[0] && hasCookieOrNot('userToken')[0],
    {
        telephone:hasCookieOrNot('telephone')[1],
        userToken:hasCookieOrNot('userToken')[1]
    }
    ])
}

//设置本地localstorage
function setStandardInfo(){
    if(checkAccount()[0]){
        getDatas('user/setStandardInfo','post').then(e=>{
            localStorage.setItem('headImg',e.data.headImg)
            localStorage.setItem('name',e.data.name)
            localStorage.setItem('school',e.data.school)
            localStorage.setItem('department',e.data.department)
            localStorage.setItem('backImg',e.data.backImg)
        })
    }
}


//检测特殊权限
function checkSpecialAccount(hAV,affairKey){
    getDatasP(hAV,'check/checkSpecialAccount',{affairKey:affairKey})
}

//基本的请求数据
function getDatas(route,method,dataO={},host=serverHost){
    var header={}
    if(hasCookieOrNot('userToken')[0]){
        header={"Authorization":hasCookieOrNot('userToken')[1]}
    }
    var Ttele=''
    if(hasCookieOrNot('telephone')[0]){
        Ttele=hasCookieOrNot('telephone')[1]
    }
    return axios({
        url:host+route,
        method:method,
        params:{telephone:Ttele,...dataO},
        data:{telephone:Ttele,...dataO},
        headers:header
    })
}

//查询cookie
function hasCookieOrNot(targer){
    var cookies=document.cookie.split(';')
    for(let i=0;i<cookies.length;i++){
        var cookie=cookies[i].split('=')
        cookie[0]=$.trim(cookie[0])
        if(cookie[0]==targer){
            return [true,cookie[1]]
        }
    }
    return [false,null]
}

//检测是否有localstorage
function hasStorageOrNot(target){
    if(localStorage.getItem(target)){
        return [true,localStorage.getItem(target)]
    }
    else{
        return [false,null]
    }
}

//对象转数组
function objectToArray(ato){
    res=[]
    keys=Object.keys(ato)
    values=Object.values(ato)
    for(i=0;i<ato[keys[0]].length;i++){
        res_son={}
        for(ii=0;ii<keys.length;ii++){
            res_son[keys[ii]]=ato[keys[ii]][i]
        }
        res.push(res_son)
    }
    return res
}


//设置cookie
function setCookie(name,value,day=7)
{
	var Days = day;
	var exp = new Date(); 
	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	document.cookie = name + "="+ value.toString() + ";expires=" + exp.toGMTString();
}

//获取get参数
function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
    }
    return(-1);
}


export {checkAccount}
export {host}
export {serverHost}
export {getDatas}
export {getQueryVariable}
export {checkSpecialAccount}
export {standardInfo}
export {setStandardInfo}
export {setCookie}