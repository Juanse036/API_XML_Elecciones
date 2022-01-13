const express = require('express');
const router = express.Router();

const insertxml = require('../../services/insertxml');

/* ------------------------------NACIONAL-------------------------------------- */
router.get('/readnacional', async function(req, res, next) {
    try {
      res.json(await insertxml.ReadXmlNacional(req.query.page));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
});

router.get('/getnacional', async function(req, res, next) {
  try {
    res.json(await insertxml.getNacional(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

/* ------------------------------DEPARTAMENTOS-------------------------------------- */
router.get('/readdepartamentos', async function(req, res, next) {
    try {
      res.json(await insertxml.ReadXmlDepartamentos(req.query.page));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  });

  router.get('/getdepartamento/:departamento', async function(req, res, next) {
    try {
      res.json(await insertxml.getDepartamento(req.query.page, {departamento: req.params.departamento}));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  });

/* ------------------------------CAPITALES-------------------------------------- */
router.get('/readcapitales', async function(req, res, next) {
  try {
    res.json(await insertxml.ReadXmlCapitales(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});
router.get('/getcapitales/:capital', async function(req, res, next) {
  try {
    res.json(await insertxml.getCapitales(req.query.page, {capital: req.params.capital}));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});


  module.exports = router;