const express = require("express")

const userController = require("../controllers/userController")
const courseController = require("../controllers/courseController")
const enrollmentController = require("../controllers/enrollmentController")

const router = express.Router()

// USERS
router.post("/users", userController.createUser)
router.get("/users", userController.getUsers)
router.get("/users/:id", userController.getUserById)
router.put("/users/:id", userController.updateUser)
router.delete("/users/:id", userController.deleteUser)

// COURSES
router.post("/courses", courseController.createCourse)
router.get("/courses", courseController.getCourses)
router.put("/courses/:id", courseController.updateCourse)
router.delete("/courses/:id", courseController.deleteCourse)

// ENROLLMENTS
router.post("/enrollments", enrollmentController.createEnrollment)
router.get("/users/:id/courses", enrollmentController.getUserCourses)

module.exports = router