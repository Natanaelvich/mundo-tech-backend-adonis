/** @type {import('@adonisjs/lucid/src/Factory')} */
const User = use('App/Models/User')

class DatabaseSeeder {
  async run () {
    await User.create({
      username: 'natan',
      email: 'natan@gmail.com',
      password: 'natannatan'
    })
  }
}

module.exports = DatabaseSeeder
