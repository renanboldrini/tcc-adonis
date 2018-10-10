'use strict'

const Schema = use('Schema')

class BudgetSchema extends Schema {
  up () {
    this.create('budgets', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('value').notNullable()
      table.decimal('status').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('budgets')
  }
}

module.exports = BudgetSchema
