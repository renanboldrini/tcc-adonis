'use strict'

const Model = use('Model')

class Balance extends Model {

    user () {
        return this.belongsTo('App/Models/User')
      }
      
}

module.exports = Balance
