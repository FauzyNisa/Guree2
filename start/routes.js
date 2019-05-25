'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Helpers = use('Helpers')

// Route.on('/').render('welcome')
//('/nama-url-yang-kita mau', 'fileControlerrnyaApa.methodDalamFileControler').as('nama route yang akan dipanggil di view')
//get = ngambil nilai & view
//post = selagi ngirim bisa ngambil


Route.get('/', 'TodoController.index').as('Todo.index').middleware(['auth'])
Route.get('/create', 'TodoController.create').as('Todo.create')
Route.get('/edit/:id', 'TodoController.edit').as('Todo.edit')
Route.get('/delete/:id', 'TodoController.delete').as('Todo.delete')
Route.post('/store', 'TodoController.store').as('Todo.store')
Route.post('/update/:id', 'TodoController.update').as('Todo.update')

Route.post('/registrasi', 'AuthController.registrasi').as('Auth.registrasi')
Route.get('/registrasi2', 'AuthController.index').as('Auth.index')

Route.get('/login2', 'AuthController.indexLogin').as('Auth.indexLogin')
Route.post('/login', 'AuthController.login').as('Auth.login')

Route.get('/profile', 'ProfileController.index').as('Profile.index').middleware(['auth'])
Route.get('/p-edit/:id', 'ProfileController.edit').as('Profile.edit')
Route.post('/p-update/:id', 'ProfileController.update').as('Profile.update')

Route.get('/logout', 'AuthController.logout').as('Auth.logout').middleware(['auth'])
Route.post('/logout', 'AuthController.logout').as('Auth.logout').middleware(['auth'])

