const router = require('express').Router()
const AuthController = require('../controller/authController')
const authcontroller=new AuthController()


router.post('/signup',authcontroller.signin)
