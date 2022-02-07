import { TypeOrmModuleOptions } from "@nestjs/typeorm";
require('dotenv').config()

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    entities: [__dirname + './../**/*.entity.js'],
    synchronize: true,
    url: process.env.DB_URL,
    ssl: { rejectUnauthorized: false }
};