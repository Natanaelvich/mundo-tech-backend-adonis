'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  category () {
    return this.belongsTo('App/Models/Category')
  }

  sales () {
    return this.hasMany('App/Models/Sale')
  }
}

module.exports = Product
