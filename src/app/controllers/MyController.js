const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MyController {
    //* [GET] /my/stored/courses
    storedCourse(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('my/stored-courses', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MyController();
