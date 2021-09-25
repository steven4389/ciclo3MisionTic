function validateForm(e){
    //e.preventDefault();
    console.log('entro');
    let user = document.forms["loginForm"]["user"].value;
    
    if(user === ""){
        alert('debes ingresar el usuario')
    }
    let pass = document.forms["loginForm"]["pass"].value;
    if(pass === ""){
        alert('debes ingresar la contraseña')
    }
    let objetoForm = {usuario: user, clave: pass}

    alert("usuario y contraseña enviados correctamente")
    //peticion hacia al back
    //http:/www.myapp.com/api/login objetoForm
}
