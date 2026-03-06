const enrollmentService = require("../services/enrollmentService")

exports.createEnrollment = async (req, res) => {
  try {
    const { user_id, course_id } = req.body

    const enrollment = await enrollmentService.createEnrollment(user_id, course_id)

    res.status(201).json({
      success: true,
      message: "Enrollment created successfully",
      data: enrollment
    })

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      data: null
    })
  }
}

exports.getUserCourses = async (req, res) => {
  try {
    const userId = parseInt(req.params.id)

    const courses = await enrollmentService.getUserCourses(userId)

    res.json({
      success: true,
      message: "Courses retrieved",
      data: courses
    })

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      data: null
    })
  }
}