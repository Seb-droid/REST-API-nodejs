
//////////////////////////////
// modules / toolkit
const express = require("express");
const app = express();
const config = require("./config");
const toolkit = require("./toolkit");
const port = config.web.port;
const bodyparser = require('body-parser');

//////////////////////////////

//////////////////////////////
// models
const { sequelize, models } = require("./database/index.js");
//////////////////////////////

//////////////////////////////
// les routers
const usersRouter = require("./routers/users.js");

//////////////////////////////

//////////////////////////////
// authentification
sequelize.authenticate()
  .then(async() => {
    console.log("Connexion à la DB OK");
    // synchronisation
    await sequelize.sync(
      //alter = true, // modifie les données non similaires au modèle ?
      //force = true, // remplace la table (et efface ses données) même si elle existe
    );
    
    startServer();
  })
  .catch((error) => {
    console.error("Connexion à la DB Erreur:", error);
});

function startServer(){

  app.use(bodyparser.json());
  app.use("/users", usersRouter);
  // appel des json encode
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

//console.log(toolkit.ajouter(1,3));
