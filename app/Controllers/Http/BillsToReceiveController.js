'use strict'
const BillsToReceive = use('App/Models/BillsToReceive')

/**
 * Resourceful controller for interacting with billstoreceives
 */
class BillsToReceiveController {
  /**
   * Show a list of all billstoreceives.
   * GET billstoreceives
   */
  async index () {
    const billsToReceive = BillsToReceive.all()
  
    return billsToReceive
  }

  /**
   * Create/save a new billstoreceive.
   * POST billstoreceives
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single billstoreceive.
   * GET billstoreceives/:id
   */
  async show ({ params }) {
    const billsToReceive = await BillsToReceive.findOrFail(params.id)
  
    return billsToReceive
  }

  /**
   * Update billstoreceive details.
   * PUT or PATCH billstoreceives/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a billstoreceive with id.
   * DELETE billstoreceives/:id
   */
  async destroy ({ params, auth, response }) {
    const billsToReceive = await BillsToReceive.findOrFail(params.id)
  
    if (billsToReceive.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }
  
    await billsToReceive.delete()
  }
}

module.exports = BillsToReceiveController
