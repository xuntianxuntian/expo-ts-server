import { ServerConfig } from "src/app";
import * as _ from "lodash";
import { DBConfig } from "src/db/mongo";
import { appInitialLog } from "../utils/log";

export const buildConfig = (process: NodeJS.Process): ServerConfig => {
  //default value
  var db_config: DBConfig = {
    DB: "mongo",
    DB_HOST: "local",
    DB_NAME: "test",
    DB_PORT: 27017,
    DB_USERNAME: "xixialin",
    DB_PSWD: "123456",
  };
  var config: ServerConfig = {
    PORT: 5000,
    MODE: "development",
    DB_CONFIG: db_config,
  };

  let _env = process.env;
  _env.PORT ? (config.PORT = _.toNumber(_env.PORT)) : null;
  _env.MODE ? (config.MODE = _env.MODE) : null;
  //db_config
  _env.DB ? (db_config.DB = _env.DB) : null;
  _env.DB_HOST ? (db_config.DB_HOST = _env.DB_HOST) : null;
  _env.DB_NAME ? (db_config.DB_NAME = _env.DB_NAME) : null;
  _env.DB_PORT ? (db_config.DB_PORT = _.toNumber(_env.DB_PORT)) : null;
  _env.DB_USERNAME ? (db_config.DB_USERNAME = _env.DB_USERNAME) : null;
  _env.DB_PSWD ? (db_config.DB_PSWD = _env.DB_PSWD) : null;

  appInitialLog.log({level:'info',message:JSON.stringify(config)})

  return config;
};
