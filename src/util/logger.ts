import winston, {format} from "winston";
const { combine, timestamp, printf } = format;

const myFormat = printf(({level, message, timestamp}) => {
    return `[${timestamp}][${level}]: ${message}`;
});

export const logger = winston.createLogger({
    level: 'debug',
    format: combine(
        timestamp(),
        myFormat
    ),
    defaultMeta: {service: 'user-service'},
    transports: [],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({}));
}