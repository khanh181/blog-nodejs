const { default: mongoose } = require('mongoose');

module.exports = {
    //? dành cho nhận 1 list ( array )
    multipleMongooseToObject: function (mongooses) {
        return mongooses.map((mongoose) => mongoose.toObject());
    },
    //? dành cho nhận 1 document ( object ) thôi
    MongooseToObject: function (mongooses) {
        return mongooses ? mongoose.toObject() : mongoose;
    },
};
