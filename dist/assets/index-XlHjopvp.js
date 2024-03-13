(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();let t={objetosBD:[{codigo:"123456",fecha:"01/04/2023",fechaResuelto:"01/12/2023",aula:"T1",grupo:"DAW2",ordenador:"PC1",descripcion:"Error de pantalla",alumno:"Ejemplo Ejemplin",estado:"resuelto"},{codigo:"234245",fecha:"06/06/2033",fechaResuelto:"21/11/2025",aula:"T1",grupo:"DAW2",ordenador:"PC1",descripcion:"Pantallazo azul",alumno:"Michael Myers",estado:"resuelto"},{codigo:"435367",fecha:"12/07/2012",fechaResuelto:"11/02/2054",aula:"T3",grupo:"DAW2",ordenador:"PC13",descripcion:"Pc explota lol",alumno:"Freddy Krueger",estado:"resuelto"},{codigo:"765436",fecha:"01/06/2026",fechaResuelto:"",aula:"T111",grupo:"DAW1",ordenador:"PC65",descripcion:"El pc ha dejado de existir",alumno:"Pendiente Pendientin",estado:"pendiente"},{codigo:"165467",fecha:"01/04/2026",fechaResuelto:"",aula:"T7",grupo:"DAW1",ordenador:"PC4",descripcion:"Camara del pc no funciona",alumno:"The singularity",estado:"pendiente"}],comentariosBD:[]};const D={template:`
    <button class="btn btn-secondary ms-2" id="cerrarBoton">CERRAR SESION</button>
    `,script:()=>{document.querySelector("#cerrarBoton")&&document.querySelector("#cerrarBoton").addEventListener("click",()=>{document.querySelector("main").innerHTML="",document.querySelector("#cerrarBoton").style.display="none"})}},f={template:`
  <div class="d-flex">
    <h1>Comentarios</h1><button class="btn btn-link ms-auto" id="volver"> < Volver</button>
  </div>
  <div id="input">
   
  </div>
  <div id="comentarios" class="mt-4">
    
  </div>
  `,inputComentarios:()=>{let a=`
      <h2 class="my-4">Código ticket: <span>${i.codigo}</span></h2>
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
    `;document.querySelector("#input").innerHTML=a,document.querySelector("#inputComentario").addEventListener("click",f.añadirComentario)},añadirComentario:()=>{const a=document.querySelector("#comentarioInput"),l=document.querySelector("#fechaInput");let o={codigo:i.codigo,comentario:a.value,fecha:l.value.split("T")[0]};t.comentariosBD.push(o),f.insertaComentarios(),a.value="",l.value=""},insertaComentarios:()=>{let a="";t.comentariosBD.filter(o=>o.codigo===i.codigo).forEach(o=>{const n=t.objetosBD.find(e=>e.codigo===o.codigo);n&&(a+=`<div class="card p-3">
                <h5 class="text-end"><span class="autor">${n.alumno}</span><span class="fecha ms-4">${o.fecha}</span></h5>
                <p class="comentarioTexto">${o.comentario}</p>
            </div>`)}),document.querySelector("#comentarios").innerHTML=a}},b={template:`
  
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
  `,script:()=>{y.script();const a=document.querySelector("form");a.addEventListener("submit",l=>{if(!a.checkValidity())l.preventDefault(),l.stopPropagation(),console.log("El formulario no es válido"),a.classList.add("was-validated");else if(l.preventDefault(),a.checkValidity()){let r=function(){for(let c=0;c<d.length;c++){const u=d[c],m=u.email,h=u.pass;if(n===m&&e===h)return!0}return!1};var o=r;const n=document.querySelector("#email").value,e=document.querySelector("#pass").value,s=localStorage.getItem("usuarios"),d=JSON.parse(s);if(r()){alert("Login realizado correctamente!"),console.log(t.objetosBD);let c=document.getElementsByName("flexRadioDefault");for(let p of c)if(p.checked){i.tipoUsuario=p.value;break}console.log("holaaa ",i.tipoUsuario),document.querySelector("#cerrarSesionDiv").innerHTML=' <span id="headerUserEmail"></span> <button class="btn btn-secondary ml-4 ms-2" id="logout">CERRAR SESION</button>';const u=document.querySelector("#headerUserEmail");u.innerText=n;const m=document.querySelector("#panel");m.style.display="inline",document.querySelector("main").innerHTML=L.template,i.insertTabla(),i.rolesUsuario(),i.tablaBotones();const h=document.querySelector("#cerrarBoton");h.style.display="inline",document.querySelector("#cerrarSesionDiv").innerHTML=b.template,D.script(),L.script(),console.log("hola"),i.cerrarSesion()}else document.querySelector("#loginIncorrecto").innerHTML="Credenciales incorrectas, inténtalo de nuevo"}})}},i={insertTabla:()=>{let a="",l="";const o=document.querySelector("#tablaPendiente"),n=document.querySelector("#tablaResuelto");if(o.innerHTML="",n.innerHTML="",!o||!n){console.log("Elementos de tabla no encontrados, posiblemente debido a un cambio en el DOM.");return}for(let e=0;e<t.objetosBD.length;e++)t.objetosBD[e].estado=="pendiente"?a+=`
    <tr>
          <td>${t.objetosBD[e].codigo}</td>
          <td>${t.objetosBD[e].fecha}</td>
          <td>${t.objetosBD[e].aula}</td>
          <td>${t.objetosBD[e].grupo}</td>
          <td>${t.objetosBD[e].ordenador}</td>
          <td>${t.objetosBD[e].descripcion}</td>
          <td>${t.objetosBD[e].alumno}</td>
          <th>${t.objetosBD[e].estado}</th>
          <td><button data-value="${t.objetosBD[e].codigo}" class="btn btn-success resolver" title="Resolver ticket">Resolver</button></td>
          <td><button data-value="${t.objetosBD[e].codigo}" class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          </button>
          </td>
          <td><button data-value="${t.objetosBD[e].codigo}" class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button data-value="${t.objetosBD[e].codigo}" class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>
          <td><button data-value="${t.objetosBD[e].codigo}" class="btn btn-success botonEditar" title="Boton Editar">Editar</button></td>
        </tr>
    `:l+=`
      <tr>
          <td>${t.objetosBD[e].codigo}</td>
          <td>${t.objetosBD[e].fecha}</td>
          <td>${t.objetosBD[e].fechaResuelto}</td>
          <td>${t.objetosBD[e].aula}</td>
          <td>${t.objetosBD[e].grupo}</td>
          <td>${t.objetosBD[e].ordenador}</td>
          <td>${t.objetosBD[e].descripcion}</td>
          <td>${t.objetosBD[e].alumno}</td>
          <td>${t.objetosBD[e].estado}</td>
          <td><button data-value="${t.objetosBD[e].codigo}"  class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button data-value="${t.objetosBD[e].codigo}"  class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>
          <td><button data-value="${t.objetosBD[e].codigo}" class="btn btn-success botonEditar" title="Boton Editar">Editar</button></td>
        </tr>
      `;o.innerHTML=a,n.innerHTML=l},codigo:null,tablaBotones:()=>{document.querySelector("body").addEventListener("click",a=>{if(a.target.classList.contains("resolver")){let e=function(){let r=new Date,c=r.getDate(),u=r.getMonth()+1,m=r.getFullYear();return c<10&&(c="0"+c),u<10&&(u="0"+u),c+"/"+u+"/"+m};var n=e;console.log("click a resolver");const d=a.target.closest(".resolver").dataset.value;console.log(d),t.objetosBD.filter(r=>{r.codigo==d&&(r.estado="resuelto",r.fechaResuelto=e())}),i.insertTabla()}if(a.target.classList.contains("btn-warning")){console.log("click a boton de añadir");const s=a.target.closest(".btn-warning").dataset.value;console.log(s),i.codigo=s,document.querySelector("main").innerHTML=f.template,f.inputComentarios()}if(a.target.classList.contains("btn-info")){console.log("click a ver comentario"),document.querySelector("main").innerHTML=f.template;const s=a.target.closest(".btn-info").dataset.value;i.codigo=s,f.insertaComentarios()}const l=document.querySelector("#exampleModal");if(a.target.classList.contains("botonEditar")){console.log("click a editar");const s=a.target.closest(".botonEditar").dataset.value;document.querySelector("#modalInput").innerHTML="",l.classList.add("show"),l.style.display="block",t.objetosBD.forEach(d=>{const r=t.objetosBD.find(c=>c.codigo===s);r&&(document.querySelector("#modalCodigo").innerHTML=r.codigo,document.querySelector("#modalAutor").innerHTML=r.alumno)}),document.querySelector("#cerrar").addEventListener("click",()=>{l.classList.remove("show"),l.style.display="none",document.querySelector("#modalInput").innerHTML=""}),document.querySelector("#cancelar").addEventListener("click",()=>{l.classList.remove("show"),l.style.display="none",document.querySelector("#modalInput").innerHTML=""}),document.querySelector("#guardar").addEventListener("click",()=>{const d=document.querySelector("#modalCodigo").textContent,r=document.querySelector("#modalInput").value;console.log(r);const c=t.objetosBD.find(u=>u.codigo===d);c&&(c.descripcion=r),l.classList.remove("show"),l.style.display="none",i.insertTabla()}),console.log(t.objetosBD)}const o=document.querySelector("#anModal");if(a.target.classList.contains("botonAnadir")&&(console.log("click a editar"),o.classList.add("show"),o.style.display="block",document.querySelector("#cerrarAn").addEventListener("click",()=>{o.classList.remove("show"),o.style.display="none"}),document.querySelector("#cancelarAn").addEventListener("click",()=>{o.classList.remove("show"),o.style.display="none"}),document.querySelector("#guardarAn").addEventListener("click",()=>{const e=document.querySelector("#modalCodigoAn").value,s=document.querySelector("#modalDescAn").value,d=document.querySelector("#modalAula").value,r=document.querySelector("#modalGrupo").value,c=document.querySelector("#modalOrdenador").value,u=document.querySelector("#modalAlumno").value;function m(){let p=new Date,v=p.getDate(),g=p.getMonth()+1,q=p.getFullYear();return v<10&&(v="0"+v),g<10&&(g="0"+g),v+"/"+g+"/"+q}let h={codigo:e,fecha:m(),fechaResuelto:"",aula:d,grupo:r,descripcion:s,ordenador:c,alumno:u,estado:"pendiente"};t.objetosBD.push(h),i.insertTabla()}),console.log(t.objetosBD)),a.target.classList.contains("btn-danger")){console.log("click a resolver");const s=a.target.closest(".btn-danger").dataset.value;console.log(s);let d=t.objetosBD.filter(r=>r.codigo!=s);i.insertTabla(),t.objetosBD=d}document.querySelector("#logout").addEventListener("click",()=>{document.querySelector("main").innerHTML=b.template,b.script(),document.querySelector("#cerrarSesionDiv").innerHTML='<span id="headerUserEmail"></span>'})})},tipoUsuario:null,rolesUsuario:()=>{i.tipoUsuario=="Profesor"&&(document.querySelectorAll(".btn-danger").forEach(n=>{n.classList.add("d-none")}),document.querySelectorAll(".botonEditar").forEach(n=>{n.classList.add("d-none")}),document.querySelectorAll(".resolver").forEach(n=>{n.classList.add("d-none")})),i.tipoUsuario=="Alumno"&&(document.querySelectorAll(".btn-danger").forEach(n=>{n.classList.add("d-none")}),document.querySelectorAll(".botonEditar").forEach(n=>{n.classList.add("d-none")}),document.querySelectorAll(".resolver").forEach(n=>{n.classList.add("d-none")}),document.querySelector("#tablaResuelto").innerHTML="")}},L={template:`
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
<div class="modal fade" id="anModal" tabindex="-1" aria-labelledby="anModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="anModalLabel">Observaciones</h5>
        <button type="button" id="cerrarAn" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
        <label for="comentario" class="form-label">Código</label> 
        <input class="form-control" id="modalCodigoAn" ></input>
        <label for="comentario" class="form-label">Descripción</label> 
        <input class="form-control" id="modalDescAn" ></input>
        <label for="comentario" class="form-label">Aula</label> 
        <input class="form-control" id="modalAula" ></input>
        <label for="comentario" class="form-label">Grupo</label> 
        <input class="form-control" id="modalGrupo" ></input>
        <label for="comentario" class="form-label">Ordenador:</label> 
        <input class="form-control" id="modalOrdenador" ></input>
        <label for="comentario" class="form-label">Alumno:</label> 
        <input class="form-control" id="modalAlumno" ></input>
        
      </div>

      <div class="modal-footer">

        <button type="button" id="cancelarAn" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" id="guardarAn" class="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>
  <button class="btn btn-success botonAnadir">Añadir Ticket</button>
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
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          
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
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tablaResuelto">
       
       
      </tbody>
    </table>
    `,script:()=>{let a="",l="";t.objetosBD.forEach(o=>{o.estado=="pendiente"?a+=i(o.codigo,o.fecha,o.fechaResuelto,o.aula,o.grupo,o.ordenador,o.descripcion,o.alumno,o.estado):l+=i(o.codigo,o.fecha,o.fechaResuelto,o.aula,o.grupo,o.ordenador,o.descripcion,o.alumno,o.estado)}),document.querySelector("#tablaPendiente").innerHTML=a,document.querySelector("#tablaResuelto").innerHTML=l}},S=[{}],E={template:`
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
    `,script:()=>{y.script();const a=document.querySelector("form");a.addEventListener("submit",l=>{if(!a.checkValidity())l.preventDefault(),l.stopPropagation(),console.log("El formulario no es válido"),a.classList.add("was-validated");else{l.preventDefault(),D.script();const o=document.querySelector("#email").value,n=document.querySelector("#pass").value;localStorage.setItem("usuarios",JSON.stringify(S));try{const e={email:o,pass:n};S.push(e),localStorage.setItem("usuarios",JSON.stringify(S)),document.querySelector("#valorRegistro").innerHTML="Registro Exitoso! Pasando a la pantalla de Login",console.log("Registro exitoso"),alert("Registro Exitoso!")}catch(e){console.error("Error al acceder a la base de datos:",e),document.querySelector("#valorRegistro").innerHTML="Registro Fallido! Intentalo de nuevo",mensajeUsuario.innerText="Ha ocurrido un problema al acceder a la base de datos. Por favor, intenta de nuevo más tarde."}document.querySelector("main").innerHTML=b.template,b.script()}})}},y={template:`
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
    `,script:()=>{const a=document.querySelector("#panel");a.style.display="none",document.querySelector("#panel").addEventListener("click",()=>{document.querySelector("main").innerHTML=L.template,i.insertTabla()}),document.querySelector("#login").addEventListener("click",()=>{document.querySelector("main").innerHTML=b.template,b.script(),document.querySelector("#cerrarSesionDiv").innerHTML='<span id="headerUserEmail"></span>'}),document.querySelector("#registro").addEventListener("click",()=>{document.querySelector("main").innerHTML=E.template,document.querySelector("#cerrarSesionDiv").innerHTML='<span id="headerUserEmail"></span>',E.script()})}};document.querySelector("header").innerHTML=y.template;y.script();
