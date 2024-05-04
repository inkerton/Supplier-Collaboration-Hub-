const mongoose = require('mongoose');
const { Schema }= mongoose;
const cartSchema = new Schema({
    title: {type: String, required: true, unique: true},
    description: {type: String, require: true},
    price: { type: Number, min:[0, 'wrong min price'], max:[10000, 'wrong max price']},
    discountPercentage: { type: Number, min:[1, 'wrong min discount'], max:[99, 'wrong max discount']},
    rating: { type: Number, min:[0, 'wrong min rating'], max:[5, 'wrong max rating']},
    stock: { type: Number, min:[1, 'wrong min stock'], default:0},
    brands: {type: String, require: true},
    category: {type: String, require: true},
    thumbnail: {type: String, require: true},
    images: {type: [String], require: true},
    deleted: {type: Boolean, default: false},
})

const virtual =  cartSchema.virtual('id');
virtual.get(function(){
    return this._id;
})
cartSchema.set('toJSON',{
    virtual: true,
    versionKey: false,
    transform: function (doc,ret) { delete ret._id}
} )

exports.Cart = mongoose.model('Cart',cartSchema)
