import mongoose from "mongoose";

mongoose.Promise = require('bluebird')

export interface DBConfig {
  DB: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_NAME: string;
  DB_USERNAME: string;
  DB_PSWD: string;
}

export class MongoClient {
  private config: DBConfig;
  constructor(config: Partial<DBConfig>) {
    this.config = {
      DB: "mongo",
      DB_HOST: "localhost",
      DB_PORT: 27017,
      DB_NAME: "test",
      DB_USERNAME: "xixialin",
      DB_PSWD: "123456",
      ...config,
    };
  }
  connect() {
      let uri = `mongodb://${this.config.DB_USERNAME}:${this.config.DB_PSWD}:@${this.config.DB_HOST}:${this.config.DB_PORT}/${this.config.DB_NAME}`;
      mongoose.connect(uri)
        .then(resolved => {})
        .catch()
  }
}
