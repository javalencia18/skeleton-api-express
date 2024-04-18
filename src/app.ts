import express from "express"
import "dotenv/config"
import cors from "cors"
import morgan from "morgan"
import requestIp from "request-ip"
import * as path from "path"

// CONFIG
import { PORT_APP } from "./app.config"
import logger from "./logger/infrastructure/loggerImpl"
import routes from "./routes"

const boostrap = (): void => {
  const app = express()

  // MIDDLEWARES
  app.use(cors())
  app.use(express.json())
  app.use(morgan("dev"))
  app.use(requestIp.mw())

  // RUTA DE RECURSOS PÚBLICOS
  app.use("/public", express.static(path.join(__dirname, "/resources")))
  app.use(routes)

  // MIDDLEWARE DE ERRORES
  app.use((err, _req, res, _next) => {
    const httpCodeError = err.statusCode ?? 500
    const messageError = err.message ?? "Internal server error"
    logger.error(err)
    res.status(Number(httpCodeError)).json({ error: messageError })
  })

  app.listen(PORT_APP, () => { logger.info(`SERVER STARTED ON PORT ${PORT_APP}`) })
}

boostrap()
