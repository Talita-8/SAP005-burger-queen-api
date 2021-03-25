const db = require("../db/models");

const productsMethods = {

  createProducts: async (req, res) => {
    const productsItens = req.body;
    try {
      const product = await db.Products.create({
        productsItens,
      });
      res.send(product);
    } catch (error) {
      console.log("Ops, houve algum erro.", error);
    }
  },

  allProducts: async (req, res) => {
    try {
      const allProducts = await db.Products.findAll({});
      res.send(allProducts);
    } catch (error) {
      console.log("Ops, houve algum erro.", error);
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
      res.send(product);
    } catch (error) {
      console.log("Ops, houve algum erro.", error);
    }
  },
  productUpdate: async (req, res) => {
    const id = req.params.id;
    try {
      const product = await db.Products.findAll({
        where: {
          id: id,
        },
      });
      res.send(product);
    } catch (error) {
      console.log("Ops, houve algum erro.", error);
    }
  },
  productDelete: async (req, res) => {
    const id = req.params.id;
    try {
      const product = await db.Products.destroy({
        where: {
          id: id,
        },
      });
      res.send(product);
    } catch (error) {
      console.log("Ops, houve algum erro.", error);
    }
  },
};

module.exports = { productsMethods };
