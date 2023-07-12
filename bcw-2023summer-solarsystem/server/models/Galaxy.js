import { Schema } from "mongoose";

export const GalaxySchema = new Schema({
    name: { type: String, required: true, maxlength: 100 },
    stars: { type: Number, required: true, min: 1 }
}, { timestamps: true, toJSON: { virtuals: true } })

GalaxySchema.virtual('planetCount', {
    localField: '_id',
    ref: 'Planet',
    foreignField: 'galxayId',
    count: true
})