const express = require("express");
const toolkit = require("../toolkit");
const router = express.Router();

const fs = require("fs");
 
let file = fs.readFileSync("./data/users.json").toString();
let users = JSON.parse(file);

let tab = [{
        
    firstname: "jean michel 1",
    lastname: "padré"

},
{
    firstname: "jean michel 2",
    lastname: "padré"
},
];

router.get("/123456", (req, res) => {
    res.json({
        firstname: "jean michel",
        lastname: "padré"
    })
});

/// opération en GET

router.get("/helloworld", (req, res) => {
    let r = toolkit.ajouter(parseInt(req.params.a), parseInt(req.params.b));
    res.json({
        helloworld : "“Bonjour le monde !”"
    });
});

router.get("/addition/:a/:b", (req, res) => {
    let r = toolkit.ajouter(parseInt(req.params.a), parseInt(req.params.b));
    res.json({
        result: r
    });
});

router.get("/soustraction/:a/:b", (req, res) => {
    let r = toolkit.soustraire(parseInt(req.params.a), parseInt(req.params.b));
    res.json({
        result: r
    });
});

router.get("/multiplication/:a/:b", (req, res) => {
    let r = toolkit.multiplication(parseInt(req.params.a), parseInt(req.params.b));
    res.json({
        result: r
    });
});

router.get("/division/:a/:b", (req, res) => {
    
    if(req.params.a !='0' && req.params.b != '0'){

        let r = toolkit.division(parseInt(req.params.a), parseInt(req.params.b));
        res.json({
            result: r
        });
    }
    else
        res.json({
            error: "division par 0"
        });
    
});
/////////////////////////// END GET


///opération en POST
router.post("/addition", (req, res) => {
    
    let record = toolkit.ajouter(parseInt(req.body.a), parseInt(req.body.b));
    res.json({
        result: record
    });
});

router.post("/soustraction", (req, res) => {
    
    let record = toolkit.soustraire(parseInt(req.body.a), parseInt(req.body.b));
    res.json({
        result: record
    });
});

router.post("/multiplication", (req, res) => {
    let record = toolkit.multiplication(parseInt(req.body.a), parseInt(req.body.b));
    res.json({
        result: record
    });
});

router.post("/division", (req, res) => {
    if(req.body.a !='0' && req.body.b != '0')
    {
        let record = toolkit.division(parseInt(req.body.a), parseInt(req.body.b));

        res.json({
            result: record
        });
    }
    else
        res.json({
            error: "division par 0"
        }); 
});
/// end OPERATIONS



////////////////////////////// END POST
 
router.get("/:id", (req, res) => {
    
    try{
        let r = tab[parseInt(req.params.id, 10)];
        console.log(tab);
        res.json({résultat : r});
        //console.log(res);

    }
    catch(err){
        
        console.error(err = 'Erreur lors du parcours des données');
    }
    finally{
        res.json({résultat : 'FIN'});
    }
});

router.get("/get/all", (req, res) => {
    
    try{
        res.json(users
    );

    }
    catch(err){
        
        console.error(err = 'Erreur lors du parcours des données');
    }
    finally{
        res.json({résultat : 'FIN'});
    }
});
 
router.delete("/:id", (req, res) => {});
 
module.exports = router;