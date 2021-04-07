const db = require("../db/models");

const productsMethods = {
  createProducts: async (req, res) => {
    const { name, flavor, complement, price, image, type, subtype } = req.body;
    try {
      const product = await db.Products.create({
        name,
        flavor,
        complement,
        price,
        image,
        type,
        subtype,
      });
      res.status(201).json(product);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  allProducts: async (req, res) => {
    try {
      const allProducts = await db.Products.findAll({
        order: [['id', 'ASC']]
      });
      res.status(200).json(allProducts);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  productId: async (req, res) => {
    const id = req.params.id;
    try {
      const product = await db.Products.findAll({
        where: {
          id: id,
        },
      });
      res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  productUpdate: async (req, res) => {
    const id = req.params.id;
    try {
      await db.Products.update(
        {
          name: req.body.name,
          flavor: req.body.flavor,
          complement: req.body.complement,
          price: req.body.price,
          image: req.body.image,
          type: req.body.type,
          subtype: req.body.subtype,
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.status(200).send("Produto atualizado com sucesso");
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  productDelete: async (req, res) => {
    const id = req.params.id;
    try {
      await db.Products.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).send("Produto excluído com sucesso");
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};

module.exports = { productsMethods };
