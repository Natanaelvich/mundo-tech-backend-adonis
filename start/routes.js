'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('sessions', 'SessionController.store')

Route.resource('categories', 'CategoryController').apiOnly().middleware('auth')

Route.resource('products', 'ProductController').apiOnly().middleware('auth')

Route.resource('sales', 'SaleController').apiOnly().middleware('auth')
