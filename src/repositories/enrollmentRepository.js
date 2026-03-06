const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

exports.createEnrollment = async (userId, courseId) => {
  return prisma.enrollment.create({
    data: {
      user_id: userId,
      course_id: courseId
    }
  })
}

exports.findEnrollment = async (userId, courseId) => {
  return prisma.enrollment.findFirst({
    where: {
      user_id: userId,
      course_id: courseId
    }
  })
}

exports.getUserCourses = async (userId) => {
  return prisma.user.findUnique({
    where: { id: userId },
    include: {
      enrollments: {
        include: {
          course: true
        }
      }
    }
  })
}