var mongoose = require('mongoose');

var Legume = require("../models/Legume");

var legumeController = {};


//Liste les legumes
legumeController.list = function(req, res) {
    Legume.find({}).exec(function(err, legumes){
        if(err){
            console.log('Error : ', err);
        }else{
            res.render("../views/legume/index",{legumes:legumes} );
        } 
    });
};

//Affiche 1 legume par son id
legumeController.show = function(req, res) {
    Legume.findOne({_id:req.params.id}).exec(function(err, legume){
        if(err){
            console.log('Error : ', err);
        }else{
            res.render("../views/legume/show",{legume:legume});
        } 
    });
};

//redirection à la page de creation de legume
legumeController.create = function(req, res){
    res.render("../views/legume/create");
}; 

//enregistrement des legumes
legumeController.save = function(req, res){
    var legume = new Legume(req.body);

    legume.save(function(err){
        if(err){
            console.log(err);
            res.render("../views/legume/create");
        } else{
            console.log("creation legume OK");
            res.redirect("/legumes/show/" + legume._id);
        } 
    });
};

//edition d'un legume par son id
legumeController.edit = function(req, res){
    var legume = new Legume(req.body);

    Legume.findOne({_id:req.params.id}).exec(function(err, legume){
        if(err){
            console.log("Error ", err);
        } else{
            res.render("../views/legume/edit",{legume: legume} );
        } 
    });
};

//gestion de l'edition dun legume
legumeController.update = function(req, res){
    Legume.findByIdAndUpdate(req.params.id,{ $set :{nom: req.body.nom, prix: req.body.prix} },{new: true}, function (err, legume){

        if (err){
            console.log(err);
            res.render("../views/legume/edit",{legume:req.body} );
        } 
        res.redirect("/legumes/show/" + legume._id);
        
    });
};

//export du module
module.exports = legumeController;