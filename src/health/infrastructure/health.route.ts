import { Router } from "express"

const healthRouter = Router()

healthRouter.get("/health", (_req, res) => { res.send("Health API") })

export default healthRouter
