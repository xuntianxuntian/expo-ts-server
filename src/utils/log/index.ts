import winston from "winston";

const { combine, timestamp, label, printf } = winston.format

const consoleFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
  })

export const appInitiaInfo = winston.createLogger({
    level:'info',
    format:combine(
        label({label:'App Initial'}),
        timestamp(),
        consoleFormat,
    ),
    transports:[
        new winston.transports.File({
            filename:'AppStartInfo',
            dirname:'./logs/app',
        })
    ]
})