const userService = require("../services/userService")

exports.createUser = async (req, res) => {
  try {

    const user = await userService.createUser(req.body)

    res.status(201).json({
      success: true,
      message: "User created",
      data: user
    })

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
      data: null
    })

  }
}

exports.getUsers = async (req, res) => {

  const users = await userService.getUsers()

  res.json({
    success: true,
    data: users
  })
}

exports.getUserById = async (req, res) => {

  try {

    const user = await userService.getUserById(req.params.id)

    res.json({
      success: true,
      data: user
    })

  } catch (error) {

    res.status(404).json({
      success: false,
      message: error.message,
      data: null
    })

  }
}

exports.updateUser = async (req, res) => {

  const user = await userService.updateUser(req.params.id, req.body)

  res.json({
    success: true,
    message: "User updated",
    data: user
  })
}

exports.deleteUser = async (req, res) => {

  await userService.deleteUser(req.params.id)

  res.json({
    success: true,
    message: "User deleted"
  })
}