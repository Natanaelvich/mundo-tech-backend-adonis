'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.integer('amount').notNullable()
      table.integer('price').notNullable()
      table.string('url_image').notNullable()
      table.integer('category_id')
        .unsigned()
        .references('id')
        .inTable('categories')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
