const enrollmentRepository = require("../repositories/enrollmentRepository")

exports.createEnrollment = async (userId, courseId) => {

  const exists = await enrollmentRepository.findEnrollment(userId, courseId)

  if (exists) {
    throw new Error("User already enrolled in this course")
  }

  return await enrollmentRepository.createEnrollment(userId, courseId)
}

exports.getUserCourses = async (userId) => {
  return await enrollmentRepository.getUserCourses(userId)
}