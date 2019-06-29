const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BlogSchmea = new Schema({
    article: { type: String, required: true },
    author: { type: String, required: true },
});


// Export the model
module.exports = mongoose.model('Blog', BlogSchmea);