const leertextos = require('../readers/leertxt');
candidato = [];
partido = [];
tempcandidato = [];
temppartido = [];
divipol = [];
tempdivipol = [];
temppartidosdep = []
temppartidoscap = []

//----------------------CANDIDATOS.TXT-----------------------------------

async function ReadCandidatosTXT(){
  candidato = await leertextos.arraycandidatos();        
  tempcandidato = candidato.map(candidato => [
      candidato.corporacion, 
      candidato.circunscripcion, 
      candidato.id_departamento, 
      candidato.id_municipo, 
      candidato.id_comuna, 
      candidato.id_partido, 
      candidato.id, 
      candidato.preferente, 
      candidato.nombre, 
      candidato.apellido, 
      candidato.cedula, 
      candidato.genero, 
      candidato.sorteo
    ]);    
    
    
}

  //----------------------PARTIDOS.TXT-----------------------------------

  async function ReadPartidosTXT(){
    partido = await leertextos.arraypartidos();
    
    temppartido = partido.map(partido => [
      partido.id_partido,
      partido.nombre
    ])    
    
  }

    async function getPartidos(){
      partido = await leertextos.arraypartidos();
      
      temppartido = partido.map(partido => [
        partido.id_partido,
        partido.nombre
      ])    
      return temppartido;
    }


  //----------------------DIVIPOL.TXT-----------------------------------


  async function ReadDivipolTXT(){
    divipol = await leertextos.arraydivipol();
    tempdivipol = divipol.map(divipol => [
    divipol.id_departamento,
    divipol.id_municipio,
    divipol.id_zona,
    divipol.id_puesto,
    divipol.nombre_departamento,
    divipol.nombre_municipio,
    divipol.nombre_puesto,
    divipol.indicador_puesto,
    divipol.potencial_mujeres,
    divipol.potencial_hombres,
    divipol.numero_mesas,
    divipol.id_comuna,
    divipol.nombre_comuna
    ])
    
  }

  

module.exports = {
    ReadCandidatosTXT,
    ReadPartidosTXT,
    ReadDivipolTXT,
    getPartidos
  }