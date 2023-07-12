import { galaxiesService } from "../services/GalaxiesService";
import BaseController from "../utils/BaseController";

export class GalaxiesController extends BaseController {
    constructor() {
        super('api/galaxy')
        this.router
            .get('', this.getGalaxies)
            .post('', this.createGalaxy)
    }
    async getGalaxies(req, res, next) {
        try {
            return res.send(await galaxiesService.getGalaxies())
        } catch (error) {
            next(error)
        }
    }

    async createGalaxy(req, res, next) {
        try {
            const galaxyData = req.body
            return res.send(await galaxiesService.createGalaxy(galaxyData))
        } catch (error) {
            next(error)
        }
    }
}