'use strict'
const BillsToPay = use('App/Models/BillsToPay')

/**
 * Resourceful controller for interacting with billstopays
 */
class BillsToPayController {
  /**
   * Show a list of all billstopays.
   * GET billstopays
   */
  async index () {
    const billsToPay = BillsToPay.all()
  
    return billsToPay
  }

  /**
   * Create/save a new billstopay.
   * POST billstopays
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single billstopay.
   * GET billstopays/:id
   */
  async show ({ params }) {
    const billsToPay = await BillsToPay.findOrFail(params.id)
  
    return billsToPay
  }

  /**
   * Update billstopay details.
   * PUT or PATCH billstopays/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a billstopay with id.
   * DELETE billstopays/:id
   */
  async destroy ({ params, auth, response }) {
    const billsToPay = await BillsToPay.findOrFail(params.id)
  
    if (billsToPay.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }
  
    await billsToPay.delete()
  }

}

module.exports = BillsToPayController
