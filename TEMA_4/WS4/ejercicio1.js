function validarNombre()
{
  var nombre = document.forms["formulario"]["nombre"];
  if (/^[a-zA-Z\s]+$/.test(nombre.value))
  {
    nombre.style.backgroundColor = "#6da441";
    nombre.style.color = "#FFF";
  }
  else{
    nombre.style.backgroundColor = "#a44541";
    nombre.style.color = "#FFF";
  }
}

function validarApellido()
{
  var apellido = document.forms["formulario"]["apellido"];
  if (/^[a-zA-Z\s]+$/.test(apellido.value))
  {
    apellido.style.backgroundColor = "#6da441";
    apellido.style.color = "#FFF";
  }
  else{
    apellido.style.backgroundColor = "#a44541";
    apellido.style.color = "#FFF";
  }
}

function validarDNI()
{
  var dni = document.forms["formulario"]["dni"];
  if (/^\d{8}[a-zA-Z]+$/.test(dni.value))
  {
    dni.style.backgroundColor = "#6da441";
    dni.style.color = "#FFF";
  }
  else{
    dni.style.backgroundColor = "#a44541";
    dni.style.color = "#FFF";
  }
}

function validarTelefono()
{
  var telefono = document.forms["formulario"]["telefono"];
  if (/^\d{9}$/.test(telefono.value))
  {
    telefono.style.backgroundColor = "#6da441";
    telefono.style.color = "#FFF";
  }
  else{
    telefono.style.backgroundColor = "#a44541";
    telefono.style.color = "#FFF";
  }
}

function validarEmail()
{
  var email = document.forms["formulario"]["email"];
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email.value))
  {
    email.style.backgroundColor = "#6da441";
    email.style.color = "#FFF";
  }
  else{
    email.style.backgroundColor = "#a44541";
    email.style.color = "#FFF";
  }
}

function validarUsuario()
{
  var usuario = document.forms["formulario"]["usuario"];
  if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test(usuario.value))
  {
    usuario.style.backgroundColor = "#6da441";
    usuario.style.color = "#FFF";
  }
  else{
    usuario.style.backgroundColor = "#a44541";
    usuario.style.color = "#FFF";
  }
}
