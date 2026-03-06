const courseService = require("../services/courseService")

exports.createCourse = async (req, res) => {

  const course = await courseService.createCourse(req.body)

  res.status(201).json({
    success: true,
    message: "Course created",
    data: course
  })
}

exports.getCourses = async (req, res) => {

  const courses = await courseService.getCourses()

  res.json({
    success: true,
    data: courses
  })
}

exports.updateCourse = async (req, res) => {

  const course = await courseService.updateCourse(req.params.id, req.body)

  res.json({
    success: true,
    message: "Course updated",
    data: course
  })
}

exports.deleteCourse = async (req, res) => {

  await courseService.deleteCourse(req.params.id)

  res.json({
    success: true,
    message: "Course deleted"
  })
}