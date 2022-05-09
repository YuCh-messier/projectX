import $ from 'jquery'

//前端host
var host='http://localhost:3000/'
//后端host
var serverHost='http://localhost:3001/'

var userKey={
    telepone:'13272732651',
    token:'ADCOIHAN'
}

// 检测登录状态
function checkAccount(hAV){
    if(true){//cookie
        $.post(serverHost+'check/checkUser',
        userKey,
        (data,statu)=>{
            if(statu=='success'){
                hAV(data)
            }
            else{
                alert('出错了')
            }
        })
    }
    else{hAV({statu:false})}
}

//检测特殊权限
function checkSpecialAccount(hAV,affairKey){
    $.post(serverHost+'check/checkSpecialAccount',
    {...userKey,affairKey:affairKey},
    (data,statu)=>{
        if(statu=='success'){
            hAV(data)
        }
        else{
            alert('出错了')
        }
    })
}

//基本的请求数据
function getDatas(hAV,route,dataO={}){
    $.get(
        serverHost+route,
        dataO,
        (data,statu)=>{
            if(statu=='success'){
                hAV(data)
            }
            else{
                alert('出错了')
            }
        }
    )
}
//post版本
function getDatasP(hAV,route,dataO={}){
    $.post(
        serverHost+route,
        dataO,
        (data,statu)=>{
            if(statu=='success'){
                hAV(data)
            }
            else{
                alert('出错了')
            }
        }
    )
}

//查询cookie
function hasCookieOrNot(targer){
    cookies=document.cookie.split(';')
    for(i=0;i<cookies.length;i++){
        var cookie=cookies[i].split('=')
        cookie[0]=$.trim(cookie[0])
        if(cookie[0]==targer){
            return [true,cookie[1]]
        }
    }
    return [false,'nono']
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
export {userKey}
export {checkSpecialAccount}