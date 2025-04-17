const { Schema, model } = require('mongoose');

const festSchema = new Schema (
    {
     festName: { type: String },
     location: { type: String },
     date: { type: String },
     duration: { type: Number },
     style: { type: String },
     lineUp: { type: String },
     tktPrice: { type: Number },
     image: { type: String }
    }
);

const FestModel = model('Fest', festSchema);

module.exports = FestModel;