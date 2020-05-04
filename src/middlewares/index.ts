import cors from 'cors'
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from "helmet";


/**
 * 
 * @param app Express Application Instance
 * @description loading middlewares when initializing app (helmet cors bodyparser compression)
 */
export const ApplyMiddlewares = async (app:any) => {
    try{
        await app.use(helmet())
        await app.use(helmet.hidePoweredBy({setTo:'Expo:1.0.0'}))
        await app.use(cors());
        await app.use(bodyParser.json());
        await app.use(bodyParser.urlencoded({extended:true}));
        await app.use(compression());
    }catch{
        return Promise.reject()
    }
    return Promise.resolve()
}