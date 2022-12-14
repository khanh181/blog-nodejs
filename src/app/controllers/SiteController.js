const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //* [GET] /Site
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
        // res.render('home');
    }

    //* [GET] /Search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
