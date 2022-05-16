import $, { get } from 'jquery'

//前端host
var host='http://124.223.155.169/'
//后端host
var serverHost='http://124.223.155.169:3003/'

//初始化标准信息
var userKey=checkCookie()
var standardInfo={statu:false}
if(userKey[0]){
    let cursT=checkLocalStorage()
    if(cursT[0]){
        standardInfo=Object.assign(cursT[1],{...userKey[1],statu:true})
    }
    else{
        setStandardInfo(()=>{standardInfo=Object.assign(cursT[1],{...userKey[1],statu:true})})
    }
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
function checkCookie(){
    return (
        [hasCookieOrNot('telephone')[0] && hasCookieOrNot('userToken')[0],
    {
        telephone:hasCookieOrNot('telephone')[1],
        userToken:hasCookieOrNot('userToken')[1]
    }])
}

//设置本地localstorage
function setStandardInfo(hAV=()=>{}){
    if(checkCookie()[0]){
        getDatasP((e)=>{
            localStorage.setItem('headImg',e.headImg)
            localStorage.setItem('name',e.name)
            localStorage.setItem('school',e.school)
            localStorage.setItem('department',e.department)
            localStorage.setItem('backImg',e.backImg)
            hAV()
        },'user/setStandardInfo')
        return true
    }
    return false
}

// 检测登录状态
function checkAccount(hAV){
    if(checkCookie()[0]){//cookie
        getDatasP(hAV,'check/checkUser')
    }
    else{hAV({statu:false})}
}

//检测特殊权限
function checkSpecialAccount(hAV,affairKey){
    getDatasP(hAV,'check/checkSpecialAccount',{affairKey:affairKey})
}

//基本的请求数据
function getDatas(hAV,route,dataO={}){
    $.ajax({
        url: serverHost+route,
        type: "get",
        data:dataO,
        crossDomain:true,
        xhrFields: {
            withCredentials: true //允许跨域带Cookie
        },
        success:(data,statu)=>{
            if(statu=='success'){
                hAV(data)
            }
            else{
                alert('出错了')
            }
        }
        });
}
//post版本
function getDatasP(hAV,route,dataO={}){
    $.ajax({
        url: serverHost+route,
        type: "post",
        data:dataO,
        crossDomain:true,
        xhrFields: {
            withCredentials: true //允许跨域带Cookie
        },
        success:(data,statu)=>{
            if(statu=='success'){
                hAV(data)
            }
            else{
                alert('出错了')
            }
        }
        });
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
    return [false,'nono']
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
function setCookie(name,value)
{
	var Days = 30;
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
export {getDatasP}
export {getQueryVariable}
export {checkSpecialAccount}
export {standardInfo}
export {setStandardInfo}