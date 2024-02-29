const express = require('express')
const route = express.Router()
const reviewController=require('../controller/reviewController')

route.post('/post-review',reviewController.postReview)
route.post('/get-review',reviewController.getReview)

module.exports=route