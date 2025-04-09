const { Schema, model } = require('mongoose');

const clubSchema = new Schema (
    {
        clubName: { type: String },
        location: { type: String },
        event: { type: String },
        date: { type: String },
        style: { enum: ['Rock', 'Electronic', 'Pop', 'Hip Hop'] },
        lineUp: { type: String },
        entry: { type: Number },
    }
);

const ClubModel = model('Club', clubSchema);

module.exports = ClubModel;