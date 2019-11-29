const mongoose = require('mongoose')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

//URI fro Mongo database
const url = process.env.MONGO_DB_URI;
mongoose.connect();

const personSchema = new mongoose.Schema({
    name: String,
    number: String
});

personSchema.statics.Format = function(person) {
    return {
        name: person.name,
        number : person.number,
        id : person._id
    }
}

const Person = mongoose.mpdel('Persons', personSchema);

module.exports = Person;