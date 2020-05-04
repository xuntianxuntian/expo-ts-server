import { MongoClient, DBConfig } from "./mongo";
// import { MysqlClient } from "./mysql";
// import { PostgreClient } from "./postgre";




export const connectToDB = async (config: Partial<DBConfig>) => {
    const DBClient = new MongoClient(config);
    
};
