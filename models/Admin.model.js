const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const adminSchema = new Schema(
  {
    adminName: { type: String },
    email: { type: String, required: [true, 'Email is required.'], unique: true, lowercase: true, trim: true },
    password: { type: String, required: [true, 'Password is required.'] },
    isAdmin: { type: Boolean, default: true },
  },
  {    
    timestamps: true
  }
);

const AdminModel = model("Admin", adminSchema);

module.exports = AdminModel;
