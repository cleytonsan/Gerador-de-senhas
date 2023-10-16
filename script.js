function generatePassword(){
    var num = document.getElementById('txtnumber');
    var passwd = document.getElementById('passwd');
    var msg = document.getElementById('msg');
    var numero = Number(num.value);
    
    let containerPassword =    document.querySelector("#container-password");

    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$@%';
    let novaSenha = '';
    
    
  let pass = '';
  for(let i = 0, n = charset.length; i < num.value; ++i){
   	 pass += charset.charAt(Math.floor(Math.random() * n));
  }  
  
    if(numero < 5){
      msg.innerHTML ="";
      passwd.innerHTML = "<strong>[ERRO] O menino de caracteres é 5!</strong>";
      passwd.style.color= "red";
      
    } else if(numero > 25){
      msg.innerHTML ="";
      passwd.innerHTML = "<strong>[ERRO] O maximo de caracteres é 25!</strong>";
      passwd.style.color= "red";
      
    }
    else {
        containerPassword.classList.remove("hide");
        msg.innerHTML='<p>Sua senha gerada foi:</p>'
        passwd.innerHTML = pass;
        passwd.style.color ='green';
        passwd.style.fontSize='18pt'  
        novaSenha = pass;
    }
   
   
}

