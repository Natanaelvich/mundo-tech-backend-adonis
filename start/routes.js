'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('sessions', 'SessionController.store')

Route.resource('categories', 'CategoryController').apiOnly()

Route.resource('products', 'ProductController').apiOnly()

Route.resource('sales', 'SaleController').apiOnly()
