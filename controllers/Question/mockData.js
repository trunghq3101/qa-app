const mongooseInit = require('../../config/mongooseInit')
const questionService = require('./questionService')

mongooseInit()

for (let i = 0; i < 500; i ++) {
    questionService.saveNewQuestion({
        question: `This is the question No.${i}`,
        createdTime: new Date()
    })
}