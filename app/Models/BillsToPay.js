'use strict'

const Model = use('Model')

class BillsToPay extends Model {

    user () {
        return this.belongsTo('App/Models/User')
      }
      
}

module.exports = BillsToPay
