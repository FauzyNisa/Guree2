'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AkunSchema extends Schema {
  up () {
    this.create('akuns', (table) => {
      table.increments()
      table.string('nuptk', 80).notNullable().unique()
      table.string('nama', 254).notNullable()
      table.string('tempat_ngajar', 254).notNullable()
      table.string('tgl', 50).notNullable()
      table.string('jk', 2).notNullable()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('matpel', 254).NULL
      table.string('status', 254).NULL
      table.string('foto', 254).NULL
      table.timestamps()
    })
  }

  down () {
    this.drop('akuns')
  }
}

module.exports = AkunSchema
