import * as mongoose from 'mongoose';
import { Connection } from 'mongoose';
import { InternalServerErrorException } from '@nestjs/common';

export const DatabaseService = {
  provide: 'DATABASE_CONNECTION',
  useFactory: async (): Promise<Connection> => {
    try {
      return await mongoose
        .createConnection(process.env.MONGO_URL, {
          connectTimeoutMS: 10000,
        })
        .asPromise();
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  },
};
