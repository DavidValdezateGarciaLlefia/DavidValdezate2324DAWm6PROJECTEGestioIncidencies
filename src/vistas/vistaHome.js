import { objetosBD } from "../../bd/bd"
import { botonCerrarSesion } from "../componentes/cerrar"
import { panel } from "../componentes/panel"

export const vistaHome = {
    template: //html
    `
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
    `,
    script:()=>{
      let htmlPendiente = ''
      let htmlResuelto = ''
      
      objetosBD.objetosBD.forEach(element =>{
        if(element.estado=='pendiente'){
          htmlPendiente += panel(element.codigo,element.fecha,element.fechaResuelto,element.aula,element.grupo,element.ordenador,element.descripcion,element.alumno,element.estado)
          
        }else{
          htmlResuelto += panel(element.codigo,element.fecha,element.fechaResuelto,element.aula,element.grupo,element.ordenador,element.descripcion,element.alumno,element.estado)
          
        }
        
      })
      document.querySelector('#tablaPendiente').innerHTML = htmlPendiente
      document.querySelector('#tablaResuelto').innerHTML = htmlResuelto
      
    }
    
}