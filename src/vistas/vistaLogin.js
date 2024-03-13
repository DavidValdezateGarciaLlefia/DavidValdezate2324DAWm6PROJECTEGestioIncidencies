import { objetosBD } from "../../bd/bd"
import { botonCerrarSesion } from "../componentes/cerrar"
import { header } from "../componentes/header"
import { panel } from "../componentes/panel"
import { vistaHome } from "./vistaHome"


export const vistaLogin = {
  template: //html
  `
  
  <h1>Logeate</h1>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div id="loginIncorrecto" class="danger"></div>
        <form novalidate action="procesaa.php" method="get" class="form border p-3 shadow w-25 ">
            <label for="email" class="label-control">Usuario:</label>
            <input required id="email" name="email" type="email" placeholder="tuemail@ejemplo.com" class="form-control">
            <div class="invalid-feedback small">Esta mal</div>
            <div class="valid-feedback">Esta bien</div>
            <label for="pass" class="label-control">Contraseña:</label>
            <input required minlength="4" id="pass"  name="pass" type="password" class="form-control">
            <div class="invalid-feedback">La contraseña debe tener mínimo 3 carácteres</div>
            <p>Selecciona tu rol:</p>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Administrador">
            <label class="form-check-label" for="flexRadioDefault1">
              Administrador
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Profesor">
            <label class="form-check-label" for="flexRadioDefault2">
              Profesor
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="Alumno">
            <label class="form-check-label" for="flexRadioDefault3">
              Alumno
            </label>
          </div>
            <button class="btn btn-success mt-3 w-100">Enviar</button>
        </form>

    </div>
  `,
  script: () => {
    header.script()
    const formulario = document.querySelector('form')
    formulario.addEventListener('submit', (event) => {
        if (!formulario.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          console.log('El formulario no es válido');
          formulario.classList.add('was-validated');
        } else {
          event.preventDefault();
          

          if (formulario.checkValidity()) {
           
            const email = document.querySelector('#email').value;
const pass = document.querySelector('#pass').value;

const usuarioString = localStorage.getItem('usuarios');
const usuariosArray = JSON.parse(usuarioString);

function verificarCredenciales() {
  for (let i = 0; i < usuariosArray.length; i++) {
    const usuarioObjeto = usuariosArray[i];
    const emailLocal = usuarioObjeto.email;
    const passLocal = usuarioObjeto.pass;

    
    if (email === emailLocal && pass === passLocal) {
      return true; 
    }
  }

  return false; 
}

if (verificarCredenciales()) {
    alert('Login realizado correctamente!');
    console.log(objetosBD.objetosBD)
    let radios = document.getElementsByName('flexRadioDefault');
    for (let radio of radios) {
      if (radio.checked) {
        panel.tipoUsuario = radio.value;
        break; 
      }
    }
    console.log('holaaa ', panel.tipoUsuario)
   

    document.querySelector('#cerrarSesionDiv').innerHTML = ` <span id="headerUserEmail"></span> <button class="btn btn-secondary ml-4 ms-2" id="logout">CERRAR SESION</button>`
    const headerUserEmail = document.querySelector('#headerUserEmail');
    headerUserEmail.innerText = email;
    const botonPanel = document.querySelector('#panel');
    botonPanel.style.display = 'inline';
    document.querySelector('main').innerHTML = vistaHome.template
    panel.insertTabla()
    panel.rolesUsuario()
    panel.tablaBotones()
    const botonCerrar = document.querySelector('#cerrarBoton')
    botonCerrar.style.display = 'inline'
    document.querySelector('#cerrarSesionDiv').innerHTML = vistaLogin.template
    botonCerrarSesion.script()
    vistaHome.script()
    console.log('hola')
    
    
    
    panel.cerrarSesion()


    
    
  } else {
    document.querySelector('#loginIncorrecto').innerHTML = 'Credenciales incorrectas, inténtalo de nuevo'
  }


      
    }
    
    
          }
        
      });
      
}

  
}