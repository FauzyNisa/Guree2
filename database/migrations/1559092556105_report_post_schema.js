
'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReportPostSchema extends Schema {
  up () {
    this.create('report_posts', (table) => {
      table.increments()
      table.string('username_from', 80).notNullable()
      table.string('post_to', 80).notNullable()
      table.string('alasan', 255).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('report_posts')
  }
}

module.exports = ReportPostSchema
