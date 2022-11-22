const newRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./site');
const myRouter = require('./my');

function route(app) {
    app.use('/news', newRouter);
    app.use('/courses', coursesRouter);
    app.use('/my', myRouter);
    app.use('/', siteRouter);
}

module.exports = route;

/***/
