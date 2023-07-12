import { planetsService } from "../services/PlanetsService";
import BaseController from "../utils/BaseController";

export class PlanetsController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
            .post('', this.createPlanet)
            .get('/:planetId', this.getPlanetById)
    }
    async getPlanetById(req, res, next) {
        try {
            const planetId = req.params.planetId
            const foundPlanet = await planetsService.getPlanetById(planetId)
            return res.send(foundPlanet)
        } catch (error) {
            next(error)
        }
    }

    async createPlanet(req, res, next) {
        try {
            const planetBody = req.body
            res.send(await planetsService.createPlanet(planetBody))
        } catch (error) {
            next(error)
        }
    }
}