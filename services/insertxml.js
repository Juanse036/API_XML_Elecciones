const leerxml = require('../readers/leerxml');
const leertextos = require('../readers/leertxt');
var avance = [];
partido = [];
temppartido = [];

/*------------------------PARTIDOS NIVEL NACIONAL---------------------*/

async function ReadXmlNacional(){
  avance = await leerxml.partidosnacional();
  //console.log(avance);
}
async function getNacional(){
  avance = await leerxml.partidosnacional();
  partido = await leertextos.arraypartidos();      
  console.log('partido', partido);
  temppartido = partido.map(partido => [
      partido.id_partido,
      partido.nombre
  ]) 

  let nacional = avance.Detalle_Circunscripcion.lin.Detalle_Partido.lin; 
  let boletin = avance.Numero.V;

  for (var i = 0; i < nacional.length; i++){
    const temp = temppartido.filter((ele) => {
      if (ele[0] == nacional[i].Partido.V){
        return ele;
      }         
  })      
    nacional[i].Nombre = temp[0][1];
    nacional[i].Ciudad = 'NACIONAL';
    nacional[i].Boletin = boletin;
  }

  return nacional;
}


/*------------------------PARTIDOS NIVEL DEPARTAMENTOS---------------------*/

async function ReadXmlDepartamentos(){
    avance = await leerxml.partidosdepartamentos();  
    
}

async function getDepartamento(page = 1, departamento){
  avance = await leerxml.partidosdepartamentos(); 
  partido = await leertextos.arraypartidos();     
  
  let departamentos = avance.filter(element => {
    if (element.Desc_Departamento.V === departamento.departamento){
      return element;
    }
  })
   
  temppartido = partido.map(partido => [
      partido.id_partido,
      partido.nombre
  ]) 
  let boletin = departamentos[0].Numero.V;
  departamentos =  departamentos[0].Detalle_Circunscripcion.lin.Detalle_Partido.lin;  
  

  for (var i = 0; i < departamentos.length; i++){
    const temp = temppartido.filter((ele) => {
      if (ele[0] == departamentos[i].Partido.V){
        return ele;
      }         
  })  
    departamentos[i].Nombre = temp[0][1];
    departamentos[i].departamentos = departamento.departamento;
    departamentos[i].Boletin = boletin;
  }

  return departamentos;
}

/*------------------------PARTIDOS NIVEL CAPITALES---------------------*/
async function ReadXmlCapitales(){  
  avance = await leerxml.partidoscapitales();  
  
}

async function getCapitales(page = 1, capital){  
  
  avance = await leerxml.partidoscapitales(); 
  let ciudad = avance.filter(element => {
    if (element.Desc_Municipio.V === capital.capital){
      return element;
    }
  })

  partido = await leertextos.arraypartidos();      
  temppartido = partido.map(partido => [
      partido.id_partido,
      partido.nombre
  ])  
  let boletin = ciudad[0].Numero.V;
  ciudad =  ciudad[0].Detalle_Circunscripcion.lin.Detalle_Partido.lin;  

  for (var i = 0; i < ciudad.length; i++){
    const temp = temppartido.filter((ele) => {
      if (ele[0] == ciudad[i].Partido.V){
        return ele;
      }         
  })  
    ciudad[i].Nombre = temp[0][1];
    ciudad[i].Ciudad = capital.capital;
    ciudad[i].Boletin = boletin;
  }
  //console.log(ciudad);
  return ciudad;
}

  module.exports = {
    ReadXmlDepartamentos,
    ReadXmlNacional,
    ReadXmlCapitales,
    getNacional,
    getDepartamento,
    getCapitales
  }