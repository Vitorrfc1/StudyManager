const userRepository = require("../repositories/userRepository")

exports.createUser = async (data) => {

  if (!data.name || !data.email) {
    throw new Error("Name and email are required")
  }

  return userRepository.createUser(data)
}

exports.getUsers = () => {
  return userRepository.getUsers()
}

exports.getUserById = async (id) => {

  const user = await userRepository.getUserById(id)

  if (!user) {
    throw new Error("User not found")
  }

  return user
}

exports.updateUser = (id, data) => {
  return userRepository.updateUser(id, data)
}

exports.deleteUser = (id) => {
  return userRepository.deleteUser(id)
}