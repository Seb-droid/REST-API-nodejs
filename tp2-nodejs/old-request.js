//const user = await models.User.create({ prenom: "John", nom: "DOE", username: "jdoe", password: "test" });
    //console.log(users);
    
    // delete
    /*const user = await models.User.findByPk(3);
    user.destroy();*/
    /*await models.User.destroy({
      where: {
        id: 4,
      },
    });*/

    // select all
    //const users = await models.User.findAll();
    /*const users = await models.User.findAll({
      where: {
        username: "vsalle",
      },
      group: ["password"]
    });*/
    // SELECT id, prenom, nom FROM Users
    //const users = await models.User.findAll({ attributes: ["id", "prenom", "nom"] });
    
    /*const user = await models.User.findOne({
      where: {
        username: "vsalle",
      },
    });*/
    
/*  // select count(*) where ...
    const users = await models.User.findAndCountAll({
      where: {
        username: "vsalle",
      },
      group: ["password"]
    });

    console.log(users.count);
    console.log(users.rows);
*/
/*
    const user = await models.User.findByPk(1);
    console.log(user);
*/

// update
/*const user = await models.User.findByPk(1);
user.nom = "Doe",
user.save();*/
/*
await models.User.update({prenom: "vincent", nom: "SALLE"}, {
  where:{
    id: 1
  },
});
*/

// order by
/*const users = await models.User.findAll({
  order: [
    ["nom", "ASC"]
  ]
});

console.log(users);
*/