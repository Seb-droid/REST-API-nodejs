const express = require("express");
const toolkit = require("../toolkit");
//const { PostsModel } = require('../models/PostsModel');
const router = express.Router();


/////////////////////////// GET


/// user GET

router.get("/:action/:a/:b", (req, res) => {
    let recordAction;
    
    let _action = req.params.action;
    let _a = req.params.a;
    let _b = req.params.b;
    let ope = '';
    let resop = '';

    function writeRec(){
        return _action + ': ' +_a + ope + _b + ' = ' + recordAction;
    }
    
    switch (_action) {
        case 'addition':
            recordAction = toolkit.ajouter(parseInt(req.params.a), parseInt(req.params.b));
            ope = ' + ';
            resop = writeRec();
            break;
        case 'soustraction':
            recordAction = toolkit.soustraire(parseInt(req.params.a), parseInt(req.params.b));
            ope = ' - ';
            resop = writeRec();
            break;
        case 'multiplication':
            recordAction = toolkit.multiplication(parseInt(req.params.a), parseInt(req.params.b));
            ope = ' x ';
            resop = writeRec();
            break;
        case 'division':
            recordAction = toolkit.division(parseInt(req.params.a), parseInt(req.params.b));
            ope = ' / ';
            resop = writeRec();
            break;

        default: resop = 'error: cette opération n\'existe pas'
                + ', essayez une autre orthographe...';
            break;
    }
    
    res.json({
        result: resop,
    })
});


/////////////////////////// END GET


/////////////////////////// POST

/// operation POST
router.post("/action", (req, res) => {
    let POSTrecordAction;
    
    let post_action = req.body.action;
    let post_a = req.body.a;
    let post_b = req.body.b;
    let post_ope = '';
    let _result = '';

    function writePost(){
        return post_action + ': ' +post_a + post_ope + post_b + ' = ' + POSTrecordAction;
    }
    
    switch (post_action) {
        case 'addition':
            POSTrecordAction = toolkit.ajouter(parseInt(req.body.a), parseInt(req.body.b));
            post_ope = ' + ';
            _result = writePost();
            break;
        case 'soustraction':
            POSTrecordAction = toolkit.soustraire(parseInt(req.body.a), parseInt(req.body.b));
            post_ope = ' - ';
            _result = writePost();
            break;
        case 'multiplication':
            POSTrecordAction = toolkit.multiplication(parseInt(req.body.a), parseInt(req.body.b));
            post_ope = ' x ';
            _result = writePost();
            break;
        case 'division':
            POSTrecordAction = toolkit.division(parseInt(req.body.a), parseInt(req.body.b));
            post_ope = ' / ';
            _result = writePost();
            break;

        default: _result = 'error: cette opération n\'existe pas'
                + ', essayez une autre orthographe...';
            break;
    }
    
    res.json({
        POST_result: _result,
    })
});
/// end POST OPERATION


////////////////////////////// END POST
 

router.delete("/:id", (req, res) => {});
 
module.exports = router;