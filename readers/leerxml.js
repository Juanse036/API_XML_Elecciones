var parser = require('xml2json');
fs = require('fs');
const util = require("util");
const readFile = util.promisify(fs.readFile);

avance = [];
//---------------------------------------PARTIDOS NACIONAL

const partidosnacional = async () => {
    let my_content;
    try {
      const json = await readFile("./files/AVA_CJ_00_0033_7426.xml");
      my_content = JSON.parse(parser.toJson(json));
      avance = my_content.Consolidado.Avance;      
      return avance;
    } catch (e) {
      console.log("Error loading client secret file:", e);
     }
  };


//---------------------------------------PARTIDOS DEPARTAMENTOS
const partidosdepartamentos = async () => {
    let my_content;
    try {
      const json = await readFile("./files/AVA_CJ_DE_0033_7426.xml");
      my_content = JSON.parse(parser.toJson(json));
      avance = my_content.Consolidado.Avance;
      return avance;
    } catch (e) {
      console.log("Error loading client secret file:", e);
     }
    };

//---------------------------------------PARTIDOS CAPITALES
const partidoscapitales = async () => {
  let my_content;
  try {
    const json = await readFile("./files/AVA_CJ_CA_0033_7426.xml");
    my_content = JSON.parse(parser.toJson(json));
    avance = my_content.Consolidado.Avance;
    return avance;
  } catch (e) {
    console.log("Error loading client secret file:", e);
   }
  };


module.exports = {
    partidosdepartamentos,
    partidosnacional,
    partidoscapitales
  }