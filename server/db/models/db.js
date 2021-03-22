const { Sequelize } = require('sequelize');
const newSequelize = new Sequelize('postgres://yfpbkcjerxakkb:89ce49a8e36431e47190ef6bfbd51882fc65bf28cf0e792a9c4b74703f123c63@ec2-54-167-168-52.compute-1.amazonaws.com:5432/d3uvjp4aaabegf')

module.exports = newSequelize;