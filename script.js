function generatePassword(){
    var num = document.getElementById('txtnumber').value;
    var passwd = document.getElementById('passwd');
    var msg = document.getElementById('msg');
    
    
    let containerPassword =    document.querySelector("#container-password");

    let charset =       'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$@%';
    let novaSenha = '';


  let pass = '';
  for(let i = 0, n = charset.length; i < num.value; ++i){
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
   
   containerPassword.classList.remove("hide");
   passwd.innerHTML = pass;
   passwd.style.color ='green';
   passwd.style.fontSize='18pt'  
   novaSenha = pass;
}

