/**
 * @author Xixialin
 * @contactMail 871966006@qq.com
 * @description Clean architectrue based NodeJS App
 */

import { App, ServerConfig }  from './app'
import { buildConfig } from './config';
import * as dotenv from 'dotenv'

dotenv.config()
Promise = require('bluebird')


/**
 * initial server and start
 */
const server = new App(buildConfig(process));
server.start();
