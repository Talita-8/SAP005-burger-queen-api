const db = require("../db/models");

const userMethods = {
  createUser: async (req, res) => {
    try {
      const { name, email, password, role, restaurant } = req.body;
      const user = await db.User.create({
        name,
        email,
        password,
        role,
        restaurant,
      });
      res.status(201).json(user);
    } catch (error) {
      console.log("Ops, houve algum erro.", error);
    }
  },

  allUsers: async (req, res) => {
    try {
      const allUsers = await db.User.findAll({
        attributes: {
          exclude: ["password"],
        },
      });
      res.status(200).json(allUsers);
    } catch (error) {
      console.log("Ops, houve algum erro.", error);
    }
  },

  userId: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await db.User.findAll({
        where: {
          id: id,
        },
      });
      res.status(200).json(user);
    } catch (error) {
      console.log("Ops, houve algum erro.", error);
    }
  },

  userUpdate: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await db.User.update(
        {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          role: req.body.role,
        },
        {
          where: {
            id: userId,
          },
        }
      );
      res.send("Dados atualizados!");
    } catch (error) {
      console.log("Ops, houve algum erro.", error);
    }
  },

  userDelete: async (req, res) => {
    const userId = req.params.id;
    try {
      await db.User.destroy({
        where: {
          id: userId,
        },
      });
      res.send("Usuário excluído com sucesso!");
    } catch (error) {
      console.log("Ops, houve algum erro.", error);
    }
  },
};

module.exports = { userMethods };
