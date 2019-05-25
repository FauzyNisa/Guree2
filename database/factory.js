'use strict'
const Factory = use('Factory')

Factory.blueprint('App/Models/Todo', (faker) => {
  return{
    konten: faker.paragraph()
  }
})

Factory.blueprint('App/Models/User', (faker) => {
  return{
    nuptk: faker.sentence(),
    nama: faker.sentence(),
    tempat_ngajar: faker.sentence(),
    tgl: faker.sentence(),
    jk: faker.sentence(),
    username: faker.sentence(),
    email: faker.sentence(),
    password: faker.sentence()
  }
})

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })
