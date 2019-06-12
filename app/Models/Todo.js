'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Database = use('Database')

class Todo extends Model {
  async getPribadi(){

    try{
      let pribadi = await Database.raw('select username, konten, foto from todos where username = "LALA"')

      console.log(pribadi[0])
      if(pribadi[0].length == 0){
        let pesan = {message : "belum posting"}
        console.log(pesan.message)
        return pesan
      }else{
        return this.username, this.konten
        var lalaaaa = await pribadi[0].find({"username": "LALA"})
        console.log(lalaaaa)


      }
    }catch(e){
      console.log(e)
    }

  }

}

module.exports = Todo
