import mongoose from "mongoose";
import { appInitialLog } from "../../utils/log";

mongoose.Promise = require("bluebird");

export interface DBConfig {
  DB: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_NAME: string;
  DB_USERNAME: string;
  DB_PSWD: string;
}

export class MongoClient {
  private dbConfig: DBConfig;
  constructor(config: DBConfig) {
    this.dbConfig = config;
  }
  connect() {
    let uri = `mongodb://${this.dbConfig.DB_USERNAME}:${this.dbConfig.DB_PSWD}@${this.dbConfig.DB_HOST}:${this.dbConfig.DB_PORT}/${this.dbConfig.DB_NAME}`;
    mongoose
      .connect(uri)
      .then(() =>
        appInitialLog.notice({ level: "info", message: "MongoDB 链接成功..." })
      )
      .catch((err) =>
        appInitialLog.error({
          level: "error",
          message: `MongoDB 链接错误:${err.message}`
        })
      );
  }
}
