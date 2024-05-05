const mongoose = require('mongoose');
const { Schema }= mongoose;
const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: { type: Buffer, required: true },    role: {type: String, require: true, default: 'user'},
    addresses: {type: [Schema.Types.Mixed]},
    name: {type: String},
    salt: Buffer//change frontend api 8:14:00
})

const virtual =  userSchema.virtual('id');
virtual.get(function(){
    return this._id;
})
userSchema.set('toJSON',{
    virtual: true,
    versionKey: false,
    transform: function (doc,ret) { delete ret._id}
} )

exports.Brand = mongoose.model('Brand',brandSchema)
