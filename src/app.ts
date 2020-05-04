import express from 'express';
import { appInitiaInfo } from './utils/log';
import { ApplyMiddlewares } from './middlewares';




/**
 * @PORT Number:Server running port 
 * @MODE String:dev-mode or pruduction-mode 
 * @_Middlewares Function:app-init middlewares,ex Logger,Security,Cors,...
 * 
 */
export interface ServerConfig{
    PORT:number,
    MODE:string,



}

export class App {

    private appConfig:ServerConfig;

    constructor (config:Partial<ServerConfig>) {
        console.log('config',config)
        this.appConfig = {
            PORT:5000,
            MODE:'development',
            ...config
        };
        
    }

    start(){
        
        const app = express();
        /**
         * @description Initializing app setup,Cors/DataTransform/Security/Passport/Logger/DB_Access
         * 
         */

        ApplyMiddlewares(app)
            .then(success =>{appInitiaInfo.log({message:'初始化函数加载成功...',level:'info'})})
            .catch(failed =>{appInitiaInfo.log({message:'初始化函数加载失败...',level:'info'})});
        
        // ConnectToDB(app)
        

        app.get('/test1',(req,res)=>{
            console.log('testing route..')
            res.send('this is a testing route')
        })



        app.listen(this.appConfig.PORT,()=>console.log(`server started ai port ${this.appConfig.PORT}`))
    }

    
}