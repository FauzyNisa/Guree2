'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FollowingSchema extends Schema {
  up () {
    this.create('followings', (table) => {
      table.increments()
      table.string('username_from', 80).notNullable().unique()
      table.string('username_to', 80).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('followings')
  }
}

module.exports = FollowingSchema
