const db = require("../db/models");

const userMethods = {

  createUser: async (req, res) => {
    const { name, email, password, role, restaurant } = req.body;
    try {
      const user = await db.User.create({
        name, email, password, role, restaurant
      });
      res.json(user);
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
      res.json(allUsers);
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
      res.send(user);
    } catch (error) {
      console.log("Ops, houve algum erro.", error);
    }
  },

  userUpdate: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await db.User.findAll({
        where: {
          id: userId,
        },
      });
      res.send(user);
    } catch (error) {
      console.log("Ops, houve algum erro.", error);
    }
  },

  userDelete: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await db.User.destroy({
        where: {
          id: userId,
        },
      });
      res.send(user);
    } catch (error) {
      console.log("Ops, houve algum erro.", error);
    }
  }
};

module.exports = { userMethods };
