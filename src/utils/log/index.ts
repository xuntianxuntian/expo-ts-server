import winston from "winston";

const { combine, timestamp, label, printf } = winston.format

const logLevel = {
    emerg:0,
    error:1,
    warn:2,
    info:3,
    notice:4,
    debug:5
}
const lineFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
  })

export const appInitialLog = winston.createLogger({
    levels:logLevel,
    format:combine(
        label({label:'App Initial'}),
        timestamp({
            format: "YYYY-MM-DD HH:mm:ss"
        }),
        winston.format.json(),
        lineFormat
    ),
    transports:[
        new winston.transports.File({
            level:'info',
            filename:'AppInfo.log',
            dirname:'./logs/app',
        }),
        new winston.transports.File({
            level:'error',
            filename:'AppStartErr.log',
            dirname:'./logs/app',
        }),
        new winston.transports.File({
            level:'notice',
            filename:'AppNotice.log',
            dirname:'./logs/app',
        })
    ]
})