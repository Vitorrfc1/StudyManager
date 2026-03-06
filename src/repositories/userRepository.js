const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

exports.createUser = (data) => {
  return prisma.user.create({ data })
}

exports.getUsers = () => {
  return prisma.user.findMany()
}

exports.getUserById = (id) => {
  return prisma.user.findUnique({
    where: { id: Number(id) }
  })
}

exports.updateUser = (id, data) => {
  return prisma.user.update({
    where: { id: Number(id) },
    data
  })
}

exports.deleteUser = (id) => {
  return prisma.user.delete({
    where: { id: Number(id) }
  })
}