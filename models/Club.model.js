const { Schema, model } = require('mongoose');

const clubSchema = new Schema (
    {
        clubName: { type: String },
        location: { type: String },
        event: { type: String },
        date: { type: String },
        style: { type: String },
        lineUp: { type: String },
        entry: { type: Number },
        image: { type: String }
    }
);

const ClubModel = model('Club', clubSchema);

module.exports = ClubModel;