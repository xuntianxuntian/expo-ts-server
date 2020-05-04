import { ServerConfig } from 'src/app'
import * as _ from "lodash";


export const buildConfig = (process:NodeJS.Process):Partial<ServerConfig> => {

    var config:Partial<ServerConfig> = {};
    let _env = process.env;
    _env.PORT? config.PORT = _.toNumber(_env.PORT) : null;
    _env.MODE? config.MODE = _env.MODE : null

    return config
}