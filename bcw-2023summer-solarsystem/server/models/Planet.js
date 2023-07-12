import { Schema } from "mongoose";

export const PlanetSchema = new Schema({
    name: { type: String, required: true, max: 50 },
    biome: { type: String, max: 50 },
    atmosphere: { type: Boolean, default: false },
    galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' }
}, { timestamps: true, toJSON: { virtuals: true } })

PlanetSchema.virtual('galaxy', {
    localField: 'galaxyId',
    foreignField: '_id',
    justOne: true,
    ref: 'Galaxy'
})