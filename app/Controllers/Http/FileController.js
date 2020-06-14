'use strict'

const Helpers = use('Helpers')

/** @typedef {import('@adonisjs/framework/src/Response')} Response */

class FileController {
  /**
   * Display a single product.
   * GET products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request

   */
  async show ({ params, response }) {
    return response.download(Helpers.tmpPath(`uploads/${params.nameimage}`))
  }
}

module.exports = FileController
