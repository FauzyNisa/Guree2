'use strict'
const Todo = use('App/Models/Todo')
const Report = use('App/Models/ReportPost')
const Helpers = use('Helpers')
const Database = use('Database')
const User = use('App/Models/User')



class TodoController {

  async index({request, response, view, auth, session}){
    const user = auth.user.toJSON()
    const todos = await Todo.all();
    return view.render('index', { todos: todos.rows })
  }


  create({request, response, view}){
    return view.render('create')
  }

  async store({request, response, view, session, auth}){
    const user = auth.user.toJSON()
    const todo = new Todo();
    todo.username = await request.input('username', user.username)
    todo.konten = request.input('konten');
    todo.foto = request.input('foto');
    await todo.save();
    session.flash({ notification: 'Successfully create!' });
    return response.route('Todo.index')
  }

  async edit({request, response, view, params}){
    const id = params.id;
    const todo = await Todo.find(id);

    return view.render('edit', { todo : todo})
  }

  //response = timbal balik / feedback
  //request = inputan yang kita mau
  //params = buat nandain kalo kita mau ubah yang ber parameter tsb
  //session = yang lagi aktif
  async update({request, response, view, params, session}){
    const id = params.id;
    const todo = await Todo.find(id);
    todo.konten = request.input('konten');
    await todo.save();

    session.flash({ notification: 'Successfully update!' });
    response.redirect('/')
  }

  async delete({request, response, view, params, session}){
    const id = params.id;
    const todo = await Todo.find(id);
    await todo.delete();

    session.flash({ notification: 'Successfully delete!' });
    response.redirect('/')
  }

  async report({request, response, view, params, id}){
    const id = params.id;
    const todo = await Todo.find(id);
    const user = auth.user.toJSON()
    const report = new Report();
    report.username_from = await request.input('username', user.username)
    report.post_to = await Todo.find(id);
    todo.foto = request.input('foto');
    await todo.save();

    return view.render('edit', { todo : todo})
  }

}

module.exports = TodoController
