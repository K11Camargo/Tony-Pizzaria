'use strict'
function logar(){

    var login = document.getElementById('login');
    var senha = document.getElementById('senha');

    if(login == "admin" && senha == "admin"){
        alert('Sucesso');
        location.href = "home.html";
    }else{
        alert('Usuario ou senha incorretos');
    }

}