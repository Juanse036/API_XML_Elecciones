const fs = require('fs');
const util = require("util");
const readFile = util.promisify(fs.readFile);

const candidato =[ 
  {
    corporacion:'',
    circunscripcion:'',
    departamento:'',
    municipo:'',
    comuna:'',
    partido:'',   
    id:'',
    preferente:'',
    nombre:'',
    apellido:'',
    cedula:'',
    genero:'',
    sorteo:''
  }
]

const partido = [
  {
    id_partido:'',
    nombre:''
  }
]
const divipol = [
  {
    id_departamento:'',
    id_municipio:'',
    id_zona:'',
    id_puesto:'',
    nombre_departamento:'',
    nombre_municipio:'',
    nombre_puesto:'',
    indicador_puesto:'',
    potencial_mujeres:'',
    potencial_hombres:'',
    numero_mesas:'',
    id_comuna:'',
    nombre_comuna:'',
  }
]
 
const arraycandidatos = async () => {
  try {
    
    const json = await readFile('./files/CANDIDATOS.txt', 'utf8');
    const array1 = json.split(/\r?\n/);       
          candidato.splice(0, candidato.length);
          for (const i in array1){
              const candidatoTemp = {
                  corporacion:array1[i].substr(0,3),
                  circunscripcion:array1[i].substr(3,1),
                  id_departamento:array1[i].substr(4,2),
                  id_municipo:array1[i].substr(6,3),
                  id_comuna:array1[i].substr(9,2),
                  id_partido:array1[i].substr(11,4),   
                  id:array1[i].substr(15,3),
                  preferente:array1[i].substr(18,1),
                  nombre:array1[i].substr(19,50).trim(),
                  apellido:array1[i].substr(68,50).trim(),
                  cedula:array1[i].substr(119,15).trim(),
                  genero:array1[i].substr(134,1),
                  sorteo:array1[i].substr(135)
              }
              candidato.push(candidatoTemp);
          }   
          return candidato;
  } catch (error) {
    
  }
}



const arraypartidos = async () => {
  try {
    const json = await readFile('./files/PARTIDOS.txt', 'utf8');
    const array1 = json.split(/\r?\n/); 
          partido.splice(0, partido.length);
          for (const i in array1){
              const partidoTemp = {
                  id_partido:array1[i].substr(0,4),
                  nombre:array1[i].substr(4,200).trim()
              }
              partido.push(partidoTemp);
          }
    return partido;

  } catch (error) {
    return error;    
  }

}


const arraydivipol = async () => {
      try {
        const json = await readFile("./files/DIVIPOL.txt", 'utf8');
        const array1 = json.split(/\r?\n/); divipol.splice(0, divipol.length);
        for (const i in array1){
            const divipolTemp = {
                id_departamento:array1[i].substr(0,2),
                id_municipio:array1[i].substr(2,3),
                id_zona:array1[i].substr(5,2),
                id_puesto:array1[i].substr(7,2),
                nombre_departamento:array1[i].substr(9,12).trim(),
                nombre_municipio:array1[i].substr(21,30).trim(),
                nombre_puesto:array1[i].substr(51,30).trim(),
                indicador_puesto:array1[i].substr(91,1),
                potencial_mujeres:array1[i].substr(92,8),
                potencial_hombres:array1[i].substr(100,8),
                numero_mesas:array1[i].substr(108,6),
                id_comuna:array1[i].substr(114,2),
                nombre_comuna:array1[i].substr(116,30).trim()                  
            }
            divipol.push(divipolTemp);
        }    
        //console.log(divipol);
        return divipol;
      } catch (e) {
        console.log("Error loading client secret file:", e);
       }
};



module.exports = {
  arraycandidatos,
  arraypartidos,
  arraydivipol,
}