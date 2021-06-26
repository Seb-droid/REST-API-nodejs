const express = require("express");
const toolkit = require("../toolkit");
//const { PostsModel } = require('../models/postsModel');
const router = express.Router();

const fs = require("fs");
 
let file = fs.readFileSync("./data/users.json").toString();
let users = JSON.parse(file);

let tab = [{
        
    firstname: "jean michel 1",
    lastname: "tartemp"

},
{
    firstname: "jean michel 2",
    lastname: "tartemp"
},
];

router.get("/123456", (req, res) => {
    res.json({
        firstname: "jean michel",
        lastname: "tartemp"
    })
});


//router.put("/:id", (req, res) => {});

/////////////////////////////// GET
 
/// get all users
router.get("/all", (req, res) => {
    
    try{
        res.json({tous_les_users: users});

    }
    catch(err){
        
        console.error(err = 'Erreur lors du parcours des données');
    }
    finally{
        res.json({résultat : 'FIN'});
    }
});
 
/// get id user
router.get("/:id", (req, res) => {
    let user;
    try{
        //let r = users[parseInt(req.params.id, 10)];
        if(user = users.find((user) => user.id === parseInt(req.params.id)))
        {
            res.json({ Un_user: user });
            //console.log(user);
        }
        else
        res.status(404).json({
            error: "User Not Found"
        });
        
    }
    catch(err){
        
        res.json(err = 'Erreur lors du parcours des données');
    }
    finally{
        res.json({résultat : 'FIN'});
    }
});

/////////////////////////////// END GET

let user_id;

/// user POST

router.post("/", (req, res) => {
    let current_id = 0;
    let max_id = 0;
    
    users.forEach(elem => {
        current_id = users.find((user) => user.id === parseInt(elem.id));
        console.log(current_id.id);

        if(current_id.id > max_id){
            max_id = parseInt(current_id.id, 10);
        }
    });

console.log("max_id: "+(max_id+1));
    users.push({
        id: (max_id + 1), // valeur id max +1
        prenom: req.body.prenom,
        nom: req.body.nom,
    });
    
    fs.writeFileSync("./data/users.json", JSON.stringify(users));

    res.json({
        inserted_in_users: users
    });
});



/// user PUT

router.put("/:id", (req, res) => {
    let user_;
    try{
        //let r = users[parseInt(req.params.id, 10)];
        if(user_ = users.find((user) => user.id === parseInt(req.params.id)))
        {
            user_id = users.findIndex((user) => user.id === parseInt(req.params.id));

            user_.prenom = req.body.prenom;
            user_.nom = req.body.nom;
            users[user_id] = user_;

            res.json({ 
                user_updated: user_,
                users_maj: users 
            });

            fs.writeFileSync("./data/users.json", JSON.stringify(users));

        }
        else
        res.status(404).json({
            error: "User Not Found"
        });
        
    }
    catch(err){
        
        res.json(err = 'Erreur lors du parcours des données');
    }
    finally{
        res.json({résultat : 'FIN'});
    }
});


/// user DELETE

router.delete("/:id", (req, res) => {
    let _user_;
    let user_delete;
    try{
        if(_user_ = users.find((user) => user.id === parseInt(req.params.id)))
        {
            user_id = users.findIndex((user) => user.id === parseInt(req.params.id));
            console.log(user_id);
            
            
            users.splice(user_id, 1 );

         
            console.log(users);
            
            res.json({ 
                user_deleted: _user_,
                users_maj: users,
            });

            fs.writeFileSync("./data/users.json", JSON.stringify(users));

        }
        else
        res.status(404).json({
            error: "User Not Found"
        });
        
    }
    catch(err){
        
        res.json(err = 'Erreur lors du parcours des données');
    }
    finally{
        res.json({résultat : 'FIN'});
    }
});


router.delete("/:id", (req, res) => {});
 
module.exports = router;