const fs = require('fs')

// users in JSON file for simplicity, store in a db for production applications
let users = require('data/users.json')

const create = (user: any) => {
  // generate new user id
  user.id = users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1

  // set date created and updated
  user.dateCreated = new Date().toISOString()
  user.dateUpdated = new Date().toISOString()

  // add and save user
  users.push(user)
  saveData()
}

const update = (id: string, params: any) => {
  const user = users.find((x: any) => x.id.toString() === id.toString())

  // set date updated
  user.dateUpdated = new Date().toISOString()

  // update and save
  Object.assign(user, params)
  saveData()
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
const _delete = (id: string) => {
  // filter out deleted user and save
  users = users.filter((x: any) => x.id.toString() !== id.toString())
  saveData()
}

// private helper functions

const saveData = () => {
  fs.writeFileSync('data/users.json', JSON.stringify(users, null, 4))
}

export const usersRepo = {
  getAll: () => users,
  getById: (id: any) =>
    users.find((x: any) => x.id.toString() === id.toString()),
  find: (x: any) => users.find(x),
  create,
  update,
  delete: _delete,
}
