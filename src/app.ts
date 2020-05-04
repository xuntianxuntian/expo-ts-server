import express from "express";
import { appInitialLog } from "./utils/log";
import { ApplyMiddlewares } from "./middlewares";
import { ConnectToDB } from "./db";
import { DBConfig } from "./db/mongo";

/**
 * @PORT Number:Server running port
 * @MODE String:dev-mode or pruduction-mode
 * @_Middlewares Function:app-init middlewares,ex Logger,Security,Cors,...
 */
export interface ServerConfig {
  PORT: number;
  MODE: string;
  DB_CONFIG: DBConfig;
}

export class App {
  private appConfig: ServerConfig;

  constructor(config: ServerConfig) {
    this.appConfig = config;
  }

  start() {
    const app = express();
    /**
     * @description Initializing app setup,Cors/DataTransform/Security/Passport/Logger/DB_Access
     *
     */
    ApplyMiddlewares(app)
      .then((success) => {
        appInitialLog.log({
          message: "初始化函数加载成功...",
          level: "notice",
        });
      })
      .catch((failed) => {
        appInitialLog.log({
          message: "初始化函数加载失败...",
          level: "notice",
        });
      });
    ConnectToDB(this.appConfig.DB_CONFIG);

    app.get("/test1", (req, res) => {
      console.log("testing route..");
      res.send("this is a testing route");
    });

    app.listen(this.appConfig.PORT, () =>
      console.log(`server started ai port ${this.appConfig.PORT}`)
    );
  }
}
