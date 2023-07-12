import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class PlanetsService {
    async getPlanetById(planetId) {
        const foundPlanet = await dbContext.Planets.findById(planetId)
        if (!foundPlanet)
            throw new BadRequest("invalid planet id")
        await foundPlanet.populate('galaxy')
        return foundPlanet
    }
    async createPlanet(planetData) {
        const newPlanet = await dbContext.Planets.create(planetData)
        return newPlanet
    }
}

export const planetsService = new PlanetsService()