import { objetosBD } from "../../bd/bd"
import { vistaComentario } from "../vistas/vistaComentario"
import { vistaHome } from "../vistas/vistaHome"
import { header } from "../componentes/header"
import { vistaLogin } from "../vistas/vistaLogin"

export const panel =  {
    
  insertTabla: ()=>{
    let templatePendiente = ''
    let templateResuelto = ''
    const pendienteHTML = document.querySelector('#tablaPendiente')
    const resueltoHTML = document.querySelector('#tablaResuelto')
    pendienteHTML.innerHTML = ''
    resueltoHTML.innerHTML = ''
    if (!pendienteHTML || !resueltoHTML) {
      console.log('Elementos de tabla no encontrados, posiblemente debido a un cambio en el DOM.')
      return
  }
    for(let x=0;x<objetosBD.objetosBD.length;x++){
      if(objetosBD.objetosBD[x].estado=='pendiente'){
        templatePendiente += //html
    `
    <tr>
          <td>${objetosBD.objetosBD[x].codigo}</td>
          <td>${objetosBD.objetosBD[x].fecha}</td>
          <td>${objetosBD.objetosBD[x].aula}</td>
          <td>${objetosBD.objetosBD[x].grupo}</td>
          <td>${objetosBD.objetosBD[x].ordenador}</td>
          <td>${objetosBD.objetosBD[x].descripcion}</td>
          <td>${objetosBD.objetosBD[x].alumno}</td>
          <th>${objetosBD.objetosBD[x].estado}</th>
          <td><button data-value="${objetosBD.objetosBD[x].codigo}" class="btn btn-success resolver" title="Resolver ticket">Resolver</button></td>
          <td><button data-value="${objetosBD.objetosBD[x].codigo}" class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          </button>
          </td>
          <td><button data-value="${objetosBD.objetosBD[x].codigo}" class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button data-value="${objetosBD.objetosBD[x].codigo}" class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>
          <td><button data-value="${objetosBD.objetosBD[x].codigo}" class="btn btn-success botonEditar" title="Boton Editar">Editar</button></td>
        </tr>
    `
    }else{
      templateResuelto += //html
      `
      <tr>
          <td>${objetosBD.objetosBD[x].codigo}</td>
          <td>${objetosBD.objetosBD[x].fecha}</td>
          <td>${objetosBD.objetosBD[x].fechaResuelto}</td>
          <td>${objetosBD.objetosBD[x].aula}</td>
          <td>${objetosBD.objetosBD[x].grupo}</td>
          <td>${objetosBD.objetosBD[x].ordenador}</td>
          <td>${objetosBD.objetosBD[x].descripcion}</td>
          <td>${objetosBD.objetosBD[x].alumno}</td>
          <td>${objetosBD.objetosBD[x].estado}</td>
          <td><button data-value="${objetosBD.objetosBD[x].codigo}"  class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button data-value="${objetosBD.objetosBD[x].codigo}"  class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>
          <td><button data-value="${objetosBD.objetosBD[x].codigo}" class="btn btn-success botonEditar" title="Boton Editar">Editar</button></td>
        </tr>
      `  
    }
    }
    pendienteHTML.innerHTML = templatePendiente
    resueltoHTML.innerHTML = templateResuelto

    



  },
  
  codigo:null,
  
   tablaBotones:()=>{
    document.querySelector('body').addEventListener('click',(e)=>{
      
      if (e.target.classList.contains('resolver')){
        function obtenerFechaActual() {
          let fechaActual = new Date();
          let dia = fechaActual.getDate();
          let mes = fechaActual.getMonth() + 1; 
          let año = fechaActual.getFullYear();
        
          if (dia < 10) dia = '0' + dia;
          if (mes < 10) mes = '0' + mes;
        
          return dia + '/' + mes + '/' + año;
        }
        console.log('click a resolver')
        const filaClick = e.target.closest('.resolver')
        const incidenciaCodigo = filaClick.dataset.value
        console.log(incidenciaCodigo)
        objetosBD.objetosBD.filter((item)=>{
          if(item.codigo == incidenciaCodigo){
            item.estado = 'resuelto'
            item.fechaResuelto = obtenerFechaActual()
          }
        }
        
        
        
        
        )
        panel.insertTabla() 
      }
    
   
      
      if (e.target.classList.contains('btn-warning')){
        
        console.log('click a boton de añadir')
        const filaClick = e.target.closest('.btn-warning')
        const incidenciaCodigo = filaClick.dataset.value
        console.log(incidenciaCodigo)
        panel.codigo = incidenciaCodigo
        document.querySelector('main').innerHTML = vistaComentario.template
        vistaComentario.inputComentarios()
        
      }
    
   
      if (e.target.classList.contains('btn-info')){
        console.log('click a ver comentario')
        document.querySelector('main').innerHTML = vistaComentario.template
        const filaClick = e.target.closest('.btn-info')
        const incidenciaCodigo = filaClick.dataset.value
        panel.codigo = incidenciaCodigo
       
        
        vistaComentario.insertaComentarios()
      }
   
    
      const modalEdit = document.querySelector('#exampleModal')
      if (e.target.classList.contains('botonEditar')){
        console.log('click a editar')
        const filaClick = e.target.closest('.botonEditar')
        const incidenciaCodigo = filaClick.dataset.value
        document.querySelector('#modalInput').innerHTML = ''
        modalEdit.classList.add('show')
        modalEdit.style.display='block'
        objetosBD.objetosBD.forEach(comentario => {
          const objeto = objetosBD.objetosBD.find(objeto => objeto.codigo === incidenciaCodigo);
          if (objeto) {
            document.querySelector('#modalCodigo').innerHTML = objeto.codigo
            document.querySelector('#modalAutor').innerHTML = objeto.alumno
          }
      });
      document.querySelector('#cerrar').addEventListener('click',()=>{
        modalEdit.classList.remove('show')
        
        modalEdit.style.display='none'
        document.querySelector('#modalInput').innerHTML = ''
      })
      document.querySelector('#cancelar').addEventListener('click',()=>{
        modalEdit.classList.remove('show')
        
        modalEdit.style.display='none'
        document.querySelector('#modalInput').innerHTML = ''
      })
      document.querySelector('#guardar').addEventListener('click', () => {
        const codigo = document.querySelector('#modalCodigo').textContent; 
        const descripcionNueva = document.querySelector('#modalInput').value; 
        console.log(descripcionNueva)
        const objeto = objetosBD.objetosBD.find(objeto => objeto.codigo === codigo);
        if (objeto) {
            objeto.descripcion = descripcionNueva;
        }
        modalEdit.classList.remove('show');
        modalEdit.style.display = 'none';
        panel.insertTabla(); 
    });
      console.log(objetosBD.objetosBD)
      }


      const modalAnadir = document.querySelector('#anModal')
      if (e.target.classList.contains('botonAnadir')){
        console.log('click a editar')
        
        
        
        modalAnadir.classList.add('show')
        modalAnadir.style.display='block'
        
      document.querySelector('#cerrarAn').addEventListener('click',()=>{
        modalAnadir.classList.remove('show')
        
        modalAnadir.style.display='none'
        
      })
      document.querySelector('#cancelarAn').addEventListener('click',()=>{
        modalAnadir.classList.remove('show')
        
        modalAnadir.style.display='none'
      })
      document.querySelector('#guardarAn').addEventListener('click', () => {

        const codigo = document.querySelector('#modalCodigoAn').value; 
          const descripcion = document.querySelector('#modalDescAn').value;
          const aula = document.querySelector('#modalAula').value;
          const grupo = document.querySelector('#modalGrupo').value;
          const ordenador = document.querySelector('#modalOrdenador').value;
          const alumno = document.querySelector('#modalAlumno').value;
          function obtenerFechaActual() {
            let fechaActual = new Date();
            let dia = fechaActual.getDate();
            let mes = fechaActual.getMonth() + 1; 
            let año = fechaActual.getFullYear();
          
            if (dia < 10) dia = '0' + dia;
            if (mes < 10) mes = '0' + mes;
          
            return dia + '/' + mes + '/' + año;
          }
        let ticketNuevo = {
           codigo: codigo,
           fecha: obtenerFechaActual(),
           fechaResuelto: '',
           aula: aula ,
           grupo: grupo,
           descripcion: descripcion,
           ordenador: ordenador,
           alumno: alumno,
           estado:'pendiente'


        }
        
        objetosBD.objetosBD.push(ticketNuevo)
        panel.insertTabla(); 
    });
      console.log(objetosBD.objetosBD)
      }
     

      



    
    
        if (e.target.classList.contains('btn-danger')){
          



          console.log('click a resolver')
          const filaClick = e.target.closest('.btn-danger')
          const incienciaCodigo = filaClick.dataset.value
          console.log(incienciaCodigo)
          let bdElementoBorrado = objetosBD.objetosBD.filter((item)=>
              item.codigo != incienciaCodigo
          )
          panel.insertTabla()
          objetosBD.objetosBD = bdElementoBorrado
        }

        document.querySelector('#logout').addEventListener('click',()=>{
          document.querySelector('main').innerHTML = vistaLogin.template
            vistaLogin.script()
            document.querySelector('#cerrarSesionDiv').innerHTML = `<span id="headerUserEmail"></span>`
        })
        
      }
     
        
   )},
   tipoUsuario: null,
  
   rolesUsuario:()=>{
    if(panel.tipoUsuario == 'Profesor'){
      let botonElim = document.querySelectorAll('.btn-danger')
      botonElim.forEach(boton => {
        boton.classList.add('d-none')
      });

      let botonEdit = document.querySelectorAll('.botonEditar')
      botonEdit.forEach(boton => {
        boton.classList.add('d-none')
      });

      let botonRes = document.querySelectorAll('.resolver')
      botonRes.forEach(boton => {
        boton.classList.add('d-none')
      });
    }

    if(panel.tipoUsuario == 'Alumno'){
      let botonElim = document.querySelectorAll('.btn-danger')
      botonElim.forEach(boton => {
        boton.classList.add('d-none')
      });
      let botonEdit = document.querySelectorAll('.botonEditar')
      botonEdit.forEach(boton => {
        boton.classList.add('d-none')
      });

      let botonRes = document.querySelectorAll('.resolver')
      botonRes.forEach(boton => {
        boton.classList.add('d-none')
      });
    
      document.querySelector('#tablaResuelto').innerHTML = ''
    }
  }
}
    
