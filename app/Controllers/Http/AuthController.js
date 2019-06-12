'use strict'
const { validate } = use('Validator')
const User = use('App/Models/User')
class AuthController {
  async index({request, response, view}){

    return view.render('registrasi')
  }

  async registrasi({request, response, view, session}){
    const daftar = new User();
    daftar.nuptk = request.input('nuptk');
    daftar.nama = request.input('nama');
    daftar.tempat_ngajar = request.input('tempat_ngajar');
    daftar.tgl = request.input('tgl');
    daftar.jk = request.input('jk');
    daftar.username = request.input('username');
    daftar.email = request.input('email');
    daftar.password = request.input('password');
    await daftar.save();


    session.flash({ notification: 'berhasil registrasi!' });
    return response.route('Auth.index')
  }

  async indexLogin({ view }) {
    return view.render('login')
  }

  async login({ request, response, auth, session }) {
    const { email, password } = request.all() //ini untuk nerima inputannya
    try {
      await auth.attempt(email, password) //ini untuk cek di db
    } catch (e) { //ini misal email atau password gaada
      session.flashExcept(['password'])
      session.flash({ error: 'We cannot find any account with these credentials.' })
      return response.redirect('/')
    }
    session.flash({ notification: 'berhasil login!' }); //ini berhasil masuk
    return response.route('Todo.index')
  }

  async logout({ auth, response, session }) {
    await auth.logout()

    session.flash({ notification: 'berhasil logout!' });
    return response.route('Auth.indexLogin')
  }


}

module.exports = AuthController
