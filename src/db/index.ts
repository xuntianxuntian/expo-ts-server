import { MongoClient, DBConfig } from "./mongo";
// import { MysqlClient } from "./mysql";
// import { PostgreClient } from "./postgre";



export const ConnectToDB = async (config: DBConfig) => {
    const DBClient = new MongoClient(config);
    DBClient.connect();
};
