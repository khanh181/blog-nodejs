const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
//
const path = require('path');
const { engine } = require('express-handlebars');
//
const app = express();
const port = 3000;

const router = require('./routes');
const db = require('./config/db');

//* connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

//* middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
//! trường hợp gửi dữ liệu client lên server ( qua html, thư viện trong js (xmlhttpm fetch,..))
app.use(express.json());

app.use(methodOverride('_method'));

//* HTTP Logger
// app.use(morgan('combined'));

//* Template Engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//*routes init
router(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
