
let myImage=document.querySelector('img');




myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images/micr.svg'){
        myImage.setAttribute('src','images/firefox-icon.png');
    }else{
        myImage.setAttribute('src','images/micr.svg')
    }
}

let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1')

function setUserName(){
    let myName=prompt('请输入你的名字')
    if(!myName||myName ===null){
        setUserName()
    }else{

    
    localStorage.setItem('name',myName)
    myHeading.textContent='Mozilla so cool! '+myName
    }
  
}
if(!localStorage.getItem('name')){
    setUserName()
}else{
    let storedName=localStorage.getItem('name')
    myHeading.textContent='Mozilla so cool '+ storedName
}
myButton.onclick=function(){
    setUserName();
}