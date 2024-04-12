import winston, { format } from "winston"
import "winston-daily-rotate-file"

const transportsDefine = [
  new winston.transports.Console(),
  new winston.transports.DailyRotateFile({
    filename: "./logs/log-%DATE%.log"
  })
]

const formatDefine = winston.format.combine(
  format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  format.json(),
  format.printf((info) => {
    let msg = {
      timestamp: info.timestamp,
      level: info.level,
      message: info.message
    }

    const infoError = info.error

    if (infoError !== null) {
      msg = { ...msg, ...{ error: info.error } }
    }

    return JSON.stringify(msg)
  })
)

const loggerWiston = winston.createLogger({
  level: "debug",
  format: formatDefine,
  transports: transportsDefine
})

export default loggerWiston
