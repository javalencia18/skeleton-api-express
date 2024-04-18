import { Router } from "express"
import healthRouter from "./health/infrastructure/health.route"

const routes = Router()
const prefix = "/api"

routes.use(prefix, healthRouter)

export default routes
