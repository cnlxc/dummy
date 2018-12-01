var myHeading = document.querySelector('h2');
myHeading.textContent  = "myLife";

var imgElement = document.querySelector('img');
imgElement.onclick = function(){
    path = imgElement.getAttribute('src')
    if( path == 'images/woman.jpg'){
        imgElement.setAttribute('src','images/backup.jpg');
    }else{
        imgElement.setAttribute('src','images/woman.jpg');
    }
}

var myButton = document.querySelector('button');
function setUserName(){
    var myName = prompt('please enter your name');
    localStorage.setItem('name','myName');
    myHeading.innerHTML = 'life of '+myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    myHeading.INNERHTML = 'life of ' +myName;
}
myButton.onclick = function() {
    setUserName();
}