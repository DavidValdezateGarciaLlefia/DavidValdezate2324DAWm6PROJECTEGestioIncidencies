(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();let a={objetosBD:[{codigo:"123456",fecha:"01/04/2023",fechaResuelto:"01/12/2023",aula:"T1",grupo:"DAW2",ordenador:"PC1",descripcion:"Error de pantalla",alumno:"Ejemplo Ejemplin",estado:"resuelto"},{codigo:"234245",fecha:"06/06/2033",fechaResuelto:"21/11/2025",aula:"T1",grupo:"DAW2",ordenador:"PC1",descripcion:"Pantallazo azul",alumno:"Michael Myers",estado:"resuelto"},{codigo:"435367",fecha:"12/07/2012",fechaResuelto:"11/02/2054",aula:"T3",grupo:"DAW2",ordenador:"PC13",descripcion:"Pc explota lol",alumno:"Freddy Krueger",estado:"resuelto"},{codigo:"765436",fecha:"01/06/2026",aula:"T111",grupo:"DAW1",ordenador:"PC65",descripcion:"El pc ha dejado de existir",alumno:"Pendiente Pendientin",estado:"pendiente"},{codigo:"165467",fecha:"01/04/2026",aula:"T7",grupo:"DAW1",ordenador:"PC4",descripcion:"Camara del pc no funciona",alumno:"The singularity",estado:"pendiente"}],comentariosBD:[]};const S={template:`
    <button class="btn btn-secondary ms-2" id="cerrarBoton">CERRAR SESION</button>
    `,script:()=>{document.querySelector("#cerrarBoton")&&document.querySelector("#cerrarBoton").addEventListener("click",()=>{document.querySelector("main").innerHTML="",document.querySelector("#cerrarBoton").style.display="none"})}},d={template:`
  <div class="d-flex">
    <h1>Comentarios</h1><button class="btn btn-link ms-auto" id="volver"> < Volver</button>
  </div>
  <div id="input">
   
  </div>
  <div id="comentarios" class="mt-4">
    
  </div>
  `,inputComentarios:()=>{let n=`
      <h2 class="my-4">Código ticket: <span>${s.codigo}</span></h2>
      <form id="formComentario" class="form card p-3 shadow">
        <div class="">
          <label for="comentario" class="form-label">Comentario: </label>
          <textarea id="comentarioInput" class="form-control" cols="3"></textarea>
          <label for="fecha" class="form-label me-2 mt-3">Fecha: </label>
          <div class="d-flex align-items-center">
            <input id="fechaInput" type="datetime-local" class="form-control w-25">
            <button type="button" id="inputComentario" class="btn btn-success ms-auto">Añadir comentario</button>
          </div>
        </div>
      </form>
    `;document.querySelector("#input").innerHTML=n,document.querySelector("#inputComentario").addEventListener("click",d.añadirComentario)},añadirComentario:()=>{const n=document.querySelector("#comentarioInput"),i=document.querySelector("#fechaInput");let t={codigo:s.codigo,comentario:n.value,fecha:i.value.split("T")[0]};a.comentariosBD.push(t),d.insertaComentarios(),n.value="",i.value=""},insertaComentarios:()=>{let n="";a.comentariosBD.filter(t=>t.codigo===s.codigo).forEach(t=>{const o=a.objetosBD.find(e=>e.codigo===t.codigo);o&&(n+=`<div class="card p-3">
                <h5 class="text-end"><span class="autor">${o.alumno}</span><span class="fecha ms-4">${t.fecha}</span></h5>
                <p class="comentarioTexto">${t.comentario}</p>
            </div>`)}),document.querySelector("#comentarios").innerHTML=n}},c={template:`
  
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
  `,script:()=>{p.script();const n=document.querySelector("form");n.addEventListener("submit",i=>{if(!n.checkValidity())i.preventDefault(),i.stopPropagation(),console.log("El formulario no es válido"),n.classList.add("was-validated");else if(i.preventDefault(),n.checkValidity()){let m=function(){for(let u=0;u<l.length;u++){const b=l[u],f=b.email,h=b.pass;if(o===f&&e===h)return!0}return!1};var t=m;const o=document.querySelector("#email").value,e=document.querySelector("#pass").value,r=localStorage.getItem("usuarios"),l=JSON.parse(r);if(m()){alert("Login realizado correctamente!"),console.log(a.objetosBD);let u=document.getElementsByName("flexRadioDefault");for(let y of u)if(y.checked){s.tipoUsuario=y.value;break}console.log("holaaa ",s.tipoUsuario),document.querySelector("#cerrarSesionDiv").innerHTML=' <span id="headerUserEmail"></span> <button class="btn btn-secondary ml-4 ms-2" id="logout">CERRAR SESION</button>';const b=document.querySelector("#headerUserEmail");b.innerText=o;const f=document.querySelector("#panel");f.style.display="inline",document.querySelector("main").innerHTML=v.template,s.insertTabla(),s.rolesUsuario(),s.tablaBotones();const h=document.querySelector("#cerrarBoton");h.style.display="inline",document.querySelector("#cerrarSesionDiv").innerHTML=c.template,S.script(),v.script(),console.log("hola"),s.cerrarSesion()}else document.querySelector("#loginIncorrecto").innerHTML="Credenciales incorrectas, inténtalo de nuevo"}})}},s={insertTabla:()=>{let n="",i="";const t=document.querySelector("#tablaPendiente"),o=document.querySelector("#tablaResuelto");if(t.innerHTML="",o.innerHTML="",!t||!o){console.log("Elementos de tabla no encontrados, posiblemente debido a un cambio en el DOM.");return}for(let e=0;e<a.objetosBD.length;e++)a.objetosBD[e].estado=="pendiente"?n+=`
    <tr>
          <td>${a.objetosBD[e].codigo}</td>
          <td>${a.objetosBD[e].fecha}</td>
          <td>${a.objetosBD[e].aula}</td>
          <td>${a.objetosBD[e].grupo}</td>
          <td>${a.objetosBD[e].ordenador}</td>
          <td>${a.objetosBD[e].descripcion}</td>
          <td>${a.objetosBD[e].alumno}</td>
          <th>${a.objetosBD[e].estado}</th>
          <td><button data-value="${a.objetosBD[e].codigo}" class="btn btn-success resolver" title="Resolver ticket">Resolver</button></td>
          <td><button data-value="${a.objetosBD[e].codigo}" class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          </button>
          </td>
          <td><button data-value="${a.objetosBD[e].codigo}" class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button data-value="${a.objetosBD[e].codigo}" class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>
          <td><button data-value="${a.objetosBD[e].codigo}" class="btn btn-success botonEditar" title="Boton Editar">Editar</button></td>
        </tr>
    `:i+=`
      <tr>
          <td>${a.objetosBD[e].codigo}</td>
          <td>${a.objetosBD[e].fecha}</td>
          <td>${a.objetosBD[e].fechaResuelto}</td>
          <td>${a.objetosBD[e].aula}</td>
          <td>${a.objetosBD[e].grupo}</td>
          <td>${a.objetosBD[e].ordenador}</td>
          <td>${a.objetosBD[e].descripcion}</td>
          <td>${a.objetosBD[e].alumno}</td>
          <td>${a.objetosBD[e].estado}</td>
          <td><button data-value="${a.objetosBD[e].codigo}"  class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button data-value="${a.objetosBD[e].codigo}"  class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>
          <td><button data-value="${a.objetosBD[e].codigo}" class="btn btn-success botonEditar" title="Boton Editar">Editar</button></td>
        </tr>
      `;t.innerHTML=n,o.innerHTML=i},codigo:null,tablaBotones:()=>{document.querySelector("body").addEventListener("click",n=>{if(n.target.classList.contains("resolver")){console.log("click a resolver");const o=n.target.closest(".resolver").dataset.value;console.log(o),a.objetosBD.filter(e=>{e.codigo==o&&(e.estado="resuelto")}),s.insertTabla()}if(n.target.classList.contains("btn-warning")){console.log("click a boton de añadir");const o=n.target.closest(".btn-warning").dataset.value;console.log(o),s.codigo=o,document.querySelector("main").innerHTML=d.template,d.inputComentarios()}if(n.target.classList.contains("btn-info")){console.log("click a ver comentario"),document.querySelector("main").innerHTML=d.template;const o=n.target.closest(".btn-info").dataset.value;s.codigo=o,d.insertaComentarios()}const i=document.querySelector("#exampleModal");if(n.target.classList.contains("botonEditar")){console.log("click a editar");const o=n.target.closest(".botonEditar").dataset.value;document.querySelector("#modalInput").innerHTML="",i.classList.add("show"),i.style.display="block",a.objetosBD.forEach(e=>{const r=a.objetosBD.find(l=>l.codigo===o);r&&(document.querySelector("#modalCodigo").innerHTML=r.codigo,document.querySelector("#modalAutor").innerHTML=r.alumno)}),document.querySelector("#cerrar").addEventListener("click",()=>{i.classList.remove("show"),i.style.display="none",document.querySelector("#modalInput").innerHTML=""}),document.querySelector("#cancelar").addEventListener("click",()=>{i.classList.remove("show"),i.style.display="none",document.querySelector("#modalInput").innerHTML=""}),document.querySelector("#guardar").addEventListener("click",()=>{const e=document.querySelector("#modalCodigo").textContent,r=document.querySelector("#modalInput").value;console.log(r);const l=a.objetosBD.find(m=>m.codigo===e);l&&(l.descripcion=r),i.classList.remove("show"),i.style.display="none",s.insertTabla()}),console.log(a.objetosBD)}if(n.target.classList.contains("btn-danger")){console.log("click a resolver");const o=n.target.closest(".btn-danger").dataset.value;console.log(o);let e=a.objetosBD.filter(r=>r.codigo!=o);s.insertTabla(),a.objetosBD=e}document.querySelector("#logout").addEventListener("click",()=>{document.querySelector("main").innerHTML=c.template,c.script(),document.querySelector("#cerrarSesionDiv").innerHTML='<span id="headerUserEmail"></span>'})})},tipoUsuario:null,rolesUsuario:()=>{s.tipoUsuario=="Profesor"&&(document.querySelectorAll(".btn-danger").forEach(o=>{o.classList.add("d-none")}),document.querySelectorAll(".botonEditar").forEach(o=>{o.classList.add("d-none")}),document.querySelectorAll(".resolver").forEach(o=>{o.classList.add("d-none")})),s.tipoUsuario=="Alumno"&&(document.querySelectorAll(".btn-danger").forEach(o=>{o.classList.add("d-none")}),document.querySelectorAll(".botonEditar").forEach(o=>{o.classList.add("d-none")}),document.querySelectorAll(".resolver").forEach(o=>{o.classList.add("d-none")}),document.querySelector("#tablaResuelto").innerHTML="")}},v={template:`
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Observaciones</h5>
        <button type="button" id="cerrar" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Código incidencia: <span id="modalCodigo"></span></p>
        <label for="comentario" class="form-label">Comentario:</label> 
        <input class="form-control" id="modalInput" >Este es un comentario sobre esta incidencia</input>
        <p class="small text-end">Autor: <span id="modalAutor"></span></p>
      </div>

      <div class="modal-footer">

        <button type="button" id="cancelar" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" id="guardar" class="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>
  </div>
    <h1>Administración de incidencias</h1>
    <h2 class="mt-5">Tickets pendientes</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th>Estado</th>
          
        </tr>
      </thead>
      <tbody id="tablaPendiente">
      </tbody>
    </table>
    <h2 class="mt-5">Tickets resueltos</h2>
    <table class="table mt-4" >
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Fecha resuelto</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody id="tablaResuelto">
       
       
      </tbody>
    </table>
    `,script:()=>{let n="",i="";a.objetosBD.forEach(t=>{t.estado=="pendiente"?n+=s(t.codigo,t.fecha,t.fechaResuelto,t.aula,t.grupo,t.ordenador,t.descripcion,t.alumno,t.estado):i+=s(t.codigo,t.fecha,t.fechaResuelto,t.aula,t.grupo,t.ordenador,t.descripcion,t.alumno,t.estado)}),document.querySelector("#tablaPendiente").innerHTML=n,document.querySelector("#tablaResuelto").innerHTML=i}},g=[{}],L={template:`
    <h1>Registrate</h1>

    <div class="container d-flex justify-content-center align-items-center vh-100">
          <form novalidate action="procesa.php" method="get" class="form border p-3 shadow w-25 ">
              <div id="valorRegistro"></div>
              <label for="email" class="label-control">Usuario:</label>
              <input required id="email" name="email" type="email" placeholder="tuemail@ejemplo.com" class="form-control">
              <div class="invalid-feedback small">Esta mal</div>
              <div class="valid-feedback">Esta bien</div>
              <label for="pass" class="label-control">Contraseña:</label>
              <input required minlength="4" id="pass"  name="pass" type="password" class="form-control">
              <div class="invalid-feedback">La contraseña debe tener mínimo 3 carácteres</div>
              <button id="registros" class="btn btn-success mt-3 w-100" >Enviar</button>
          </form>
  
      </div>
    `,script:()=>{p.script();const n=document.querySelector("form");n.addEventListener("submit",i=>{if(!n.checkValidity())i.preventDefault(),i.stopPropagation(),console.log("El formulario no es válido"),n.classList.add("was-validated");else{i.preventDefault(),S.script();const t=document.querySelector("#email").value,o=document.querySelector("#pass").value;localStorage.setItem("usuarios",JSON.stringify(g));try{const e={email:t,pass:o};g.push(e),localStorage.setItem("usuarios",JSON.stringify(g)),document.querySelector("#valorRegistro").innerHTML="Registro Exitoso! Pasando a la pantalla de Login",console.log("Registro exitoso"),alert("Registro Exitoso!")}catch(e){console.error("Error al acceder a la base de datos:",e),document.querySelector("#valorRegistro").innerHTML="Registro Fallido! Intentalo de nuevo",mensajeUsuario.innerText="Ha ocurrido un problema al acceder a la base de datos. Por favor, intenta de nuevo más tarde."}document.querySelector("main").innerHTML=c.template,c.script()}})}},p={template:`
    <header>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
        <div id="botonesLogin">
          <button class="btn btn-secondary ms-2" id="panel">PANEL</button>
          <button class="btn btn-secondary ms-2" id="login">LOGIN</button>
          <button class="btn btn-secondary ms-2" id="registro">REGISTRO</button>
          
        </div>
        <div id="cerrarSesionDiv">
        
          <span id="headerUserEmail"></span>
          
        </div>
      </div>
    </nav>
  </header>
    `,script:()=>{const n=document.querySelector("#panel");n.style.display="none",document.querySelector("#panel").addEventListener("click",()=>{document.querySelector("main").innerHTML=v.template,s.insertTabla()}),document.querySelector("#login").addEventListener("click",()=>{document.querySelector("main").innerHTML=c.template,c.script(),document.querySelector("#cerrarSesionDiv").innerHTML='<span id="headerUserEmail"></span>'}),document.querySelector("#registro").addEventListener("click",()=>{document.querySelector("main").innerHTML=L.template,document.querySelector("#cerrarSesionDiv").innerHTML='<span id="headerUserEmail"></span>',L.script()})}};document.querySelector("header").innerHTML=p.template;p.script();
