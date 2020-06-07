'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/auth/src/Schemes/Session')} AuthSession */

class SessionController {
  /**
   * @param {object} ctx
   * @param {AuthSession} ctx.auth
   * @param {Request} ctx.request
   */

  async store ({ request, auth }) {
    const { email, password } = request.all()

    const tocken = await auth.attempt(email, password)

    return tocken
  }
}

module.exports = SessionController
