const express = require("express");
const toolkit = require("../toolkit");
const sequelize = require("../database/connect");
const { models } = require("../database");
const router = express.Router();
const index = require("../index");
const app = express();
//const { PostsModel } = require('../models/postsModel');



const fs = require("fs");
 
let file = fs.readFileSync("./data/users.json").toString();
//let users = JSON.parse(file);
(async() =>{
    let users = await models.User.findAll();
})()



//#region promise
/*
//// test promise
const result = (req) => {
    return new Promise((resolve, reject) => {
        
        
        const result = req;

        if(result)
        resolve(result);
        else 
        reject();
    })
}

////
console.log('log↓')
console.log(req)
result(req).then( (resultat)=>{
    console.log('resultat: ' + resultat);
}).catch(()=>{
    console.log("oups, purée erreur dans promise.....");
});*/
//#endregion
////



/////////////////////////////// GET
 
/// get all users
router.get("/all", (req, res) => {
    (async () =>{

        let all_users;
    
        all_users = await models.User.findAll();
        console.log(all_users);
        
        res.json({tous_les_users: all_users});
        
    })()
    
});
 



/// get id user
router.get("/:id", (req, res) => {
    let user;
    
    (async () =>{

        let all_users;
    
        
        user = await models.User.findAll();
        let get_a_user;
        //let r = users[parseInt(req.params.id, 10)];
        if(get_a_user = user.find((user) => user.id === parseInt(req.params.id)))
        {
            res.json({ Un_user: get_a_user });
            //console.log(get_a_user);
        }
        else
        res.status(404).json({
            error: "User Not Found"
        });
        
        
    })()
        
        
    
    
});

/////////////////////////////// END GET

let user_id;

/// user POST

router.post("/", (req, res) => {
    let current_id = 0;
    let max_id = 0;
    

    (async () =>{

        let users = await models.User.findAll();

        /*users.forEach(elem => {
            current_id = users.find((user) => user.id === parseInt(elem.id));
            //console.log(current_id.id);
            if(current_id.id > max_id){
                max_id = parseInt(current_id.id, 10);
            }
        });*/
        //console.log("max_id + 1: "+(max_id+1));
        users = await models.User.create({ prenom: req.body.prenom, nom: req.body.nom, username: "jdoe", password: "test" });
        
        let all_users = await models.User.findAll();

        res.json({
            maj:[ { user_add: users }],
            users_maj: all_users,
        });

    })()

});



/// user PUT

router.put("/:id", (req, res) => {
    let user_;

    (async () =>{

        let users = await models.User.findAll();

        if(user_ = users.find((user) => user.id === parseInt(req.params.id)))
        {
            user_id = await models.User.findAll({ attributes: ["id"] ,
                where: {id: parseInt(req.params.id)},
                }
            );
            console.log(user_);
            user_.prenom = req.body.prenom;
            user_.nom = req.body.nom;
            //console.log('user_id : ');
            //console.log(user_id[0].dataValues.id);
            let the_id = user_id[0].dataValues.id; // dans User[0].dataValues.id
            
            await models.User.update({prenom: user_.prenom, nom: user_.nom}, {
                where:{
                  id: the_id, // dans User[0].dataValues.id
                },
              });

            res.json({
              maj:[ { user_updated: user_ }],
                
                users_maj: users 
            });
            
            
        }
        else
        res.status(404).json({
            error: "User Not Found"
        });
        
    })()
        
});


/// user DELETE

router.delete("/:id", (req, res) => {
    let user_delete;
    let fichier_save='';
     
    (async () =>{

        let users = await models.User.findAll();

        if(user_ = users.find((user) => user.id === parseInt(req.params.id)))
        {
            fs.writeFileSync("./data/users.json", JSON.stringify(users))
            fichier_save='sauvegardé';
            


            user_id = await models.User.findAll({ attributes: ["id"] ,
                where: {id: parseInt(req.params.id)},
                }
            );
            //console.log(user_);
            
            //console.log('user_id : ');
            //console.log(user_id[0].dataValues.id);
            let the_id = user_id[0].dataValues.id; // dans User[0].dataValues.id
            //console.log('the_id: ' + the_id);

            
            await models.User.destroy({
                where: {
                  id: the_id, // dans User[0].dataValues.id
                },
              });

            res.json({
                maj:[{user_deleted: user_}],
                users_maj: await models.User.findAll(),
                fichier: fichier_save,
            });
            
            
        }
        else
        res.status(404).json({
            error404: "User Not Found"
        });
        
    })()
});


//router.delete("/:id", (req, res) => {});
 
module.exports = router;