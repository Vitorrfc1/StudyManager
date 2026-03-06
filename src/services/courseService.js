const courseRepository = require("../repositories/courseRepository")

exports.createCourse = (data) => {
  return courseRepository.createCourse(data)
}

exports.getCourses = () => {
  return courseRepository.getCourses()
}

exports.getCourseById = (id) => {
  return courseRepository.getCourseById(id)
}

exports.updateCourse = (id, data) => {
  return courseRepository.updateCourse(id, data)
}

exports.deleteCourse = (id) => {
  return courseRepository.deleteCourse(id)
}