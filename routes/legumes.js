var express = require('express');
var router = express.Router();

var legume = require("../controllers/LegumeController");

//recuperer les legumes
router.get("/", legume.list);

//voir un legume par son id
router.get("/show/:id", legume.show);

//cree un legume
router.get("/create", legume.create);

//sauvegarder un legume. /!\ cest un POST 
router.post("/save", legume.save);

//editer un legume
router.get("/edit/:id", legume.edit);

//edit update.  /!\ cest un POST 
router.post("/update/:id", legume.update);


//export du module router
module.exports = router;

