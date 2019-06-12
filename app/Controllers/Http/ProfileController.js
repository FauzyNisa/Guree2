'use strict'

const { validate } = use('Validator')
const User = use('App/Models/User')
const Database  = use('Database')


class ProfileController {
  async index({request, response, view, auth}) {
    const user = auth.user.toJSON()
    //const user = await User.all()
    const data = await Database
      .select('id', 'username', 'konten', 'foto')
      .table('todos')
      .where('username', user.username)
    console.log(data)
    return view.render('profil', { user: user, data })
    // return view.render('profil', {user: user})
  }

  async edit({request, response, view, params}){
    const id = params.id;
    const profile = await User.find(id);

    return view.render('profilEdit', { user : profile})
  }

  async update({request, response, view, params, session}){
    const id = params.id;
    const profile = await User.find(id);
    profile.nuptk = request.input('nuptk');
    profile.nama = request.input('nama');
    profile.tempat_ngajar = request.input('tempat_ngajar');
    profile.tgl = request.input('tgl');
    profile.jk = request.input('jk');
    profile.username = request.input('username');
    profile.email = request.input('email');
    profile.password = request.input('password');
    profile.matpel = request.input('matpel')
    profile.status = request.input('status')
    profile.foto = request.input('foto')

    await profile.save();

    session.flash({ notification: 'Update profil sukses' });
    return response.route('Profile.index')
  }

  async orang({request, response, view, auth}) {
    //const user = auth.user.toJSON()
    const user = await User.all()
    return view.render('profilorang', { user: user.rows })
    // return view.render('profil', {user: user})
  }
}

module.exports = ProfileController
