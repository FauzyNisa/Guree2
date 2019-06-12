'use strict'

const { validate } = use('Validator')
const User = use('App/Models/User')

class OrangController {
  async index({request, response, view, auth}) {
    //const user = auth.user.toJSON()
    const user = await User.all()
    return view.render('profilOrang', {user: user.rows} )
    // return view.render('profil', {user: user})
  }


}

module.exports = OrangController
