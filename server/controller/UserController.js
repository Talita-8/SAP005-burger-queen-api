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
      return res.status(400).json({ message: error.message });
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
      return res.status(400).json({ message: error.message });
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
      return res.status(400).json({ message: error.message });
    }
  },

  userUpdate: async (req, res) => {
    const userId = req.params.id;
    try {
      await db.User.update(
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
      return res.status(400).json({ message: error.message });
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
      return res.status(400).json({ message: error.message });
    }
  },
};

module.exports = { userMethods };
