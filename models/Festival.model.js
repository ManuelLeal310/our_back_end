const { Schema, model } = require('mongoose');

const festivalSchema = new Schema (
    {
     festName: { type: String },
     location: { type: String },
     date: { type: String },
     duration: { Number min 1 },
     style: { enum: ['Rock', 'Electronic', 'Pop', 'Hip Hop'] },
     lineUp: { type: String },
     tktPrice: { type: Number },
    }
);

const FestivalModel = model('Festival', festivalSchema);

module.exports = FestivalModel;