'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Product = use('App/Models/Product')
const Category = use('App/Models/Category')
const producstData = require('./products.json')
/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

class ProductSeeder {
  async run () {
    await Category.create({ name: 'carregador' })

    producstData.map(p => {
      try {
        Product.create({
          name: p.name,
          amount: p.amount,
          price: p.price,
          url_image: p.url_image,
          category_id: 1
        })
      } catch (error) {
        console.log(error)
      }
    }
    )
  }
}

module.exports = ProductSeeder
