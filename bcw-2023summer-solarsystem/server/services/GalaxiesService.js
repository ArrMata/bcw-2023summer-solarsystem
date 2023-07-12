import { dbContext } from "../db/DbContext"

class GalaxiesService {
    async getGalaxies() {
        return await dbContext.Galaxies.find()
    }

    async createGalaxy(galaxyData) {
        const newGalaxy = await dbContext.Galaxies.create(galaxyData)
        return newGalaxy
    }
}

export const galaxiesService = new GalaxiesService()