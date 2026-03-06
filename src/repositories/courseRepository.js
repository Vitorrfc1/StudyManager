const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

exports.createCourse = (data) => {
  return prisma.course.create({ data })
}

exports.getCourses = () => {
  return prisma.course.findMany()
}

exports.getCourseById = (id) => {
  return prisma.course.findUnique({
    where: { id: Number(id) }
  })
}

exports.updateCourse = (id, data) => {
  return prisma.course.update({
    where: { id: Number(id) },
    data
  })
}

exports.deleteCourse = (id) => {
  return prisma.course.delete({
    where: { id: Number(id) }
  })
}