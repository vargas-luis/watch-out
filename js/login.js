function cleanScreen(){
    document.getElementById('relojes').style.display = "none";
    document.getElementById('cronografos').style.display = "none";
    document.getElementById('correas').style.display = "none";
    document.getElementById('login__field').style.display = "contents";    
    
    document.getElementById('login__correo').value="";
    document.getElementById('login__pass').value="";
    
    document.getElementById('login__correo').focus();
    
}

function showScreen(){
    document.getElementById('relojes').style.display = "contents";
    document.getElementById('cronografos').style.display = "contents";
    document.getElementById('correas').style.display = "contents";
    document.getElementById('login__field').style.display = "none";  
}

function login(){
    var usuario = "alura@mail.com";
    var passwor = "alura321";

    var inicioIngresado;
    var passworIngresado;

    inicioIngresado = document.getElementById('login__correo').value;
    passworIngresado= document.getElementById('login__pass').value;
        
    if( inicioIngresado == usuario && passworIngresado == passwor ) {
        alert("Bienvenido al sistema " + inicioIngresado);
    } else {
        alert("Inicio de sesión inválido.");
    }

    showScreen();
}

function cancelar(){
    // console.log(document.querySelector('[data-correo]').value);
    showScreen();
}