const express = require('express');
const router = express.Router();
const inserttxt = require('../../services/inserttxt');

/* GET CANDIDATOS. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await inserttxt.getAllCandidatos(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

/* ------------------------------CANDIDATOS-------------------------------------- */
router.post('/readcandidato', async function(req, res, next) {
    try {
      res.json(await inserttxt.ReadCandidatosTXT(req.query.page));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  });


/* ------------------------------PARTIDOS-------------------------------------- */
router.post('/readpartido', async function(req, res, next) {
    try {
      res.json(await inserttxt.ReadPartidosTXT(req.query.page));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  });

  router.get('/getpartidos', async function(req, res, next) {
    try {
      res.json(await inserttxt.getPartidos(req.query.page));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  });


  /* ------------------------------DIVIPOL-------------------------------------- */

  router.post('/readdivipol', async function(req, res, next) {
    try {
      res.json(await inserttxt.ReadDivipolTXT(req.query.page));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  });

module.exports = router;