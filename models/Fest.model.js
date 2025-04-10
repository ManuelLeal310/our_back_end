const { Schema, model } = require('mongoose');

const festSchema = new Schema (
    {
     festName: { type: String },
     location: { type: String },
     date: { type: String },
     duration: { Number },
     style: { type: String, enum: ['Rock', 'Electronic', 'Pop', 'Hip Hop'] },
     lineUp: { type: String },
     tktPrice: { type: Number },
     image: { type: String }
    }
);

const FestModel = model('Fest', festSchema);

module.exports = FestModel;