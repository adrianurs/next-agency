import mongoose, { ConnectionStates } from 'mongoose';
import { _env } from '../env';

const connection = { isConnected: false };

export async function connectToMongo() {
  try {
    if (connection.isConnected) {
      console.log('@/lib/db/connect.ts -> connectToMongo: connection already open.');
      return;
    }
    const db = await mongoose.connect(_env.mongo_url);
    connection.isConnected = db.connections[0].readyState === ConnectionStates.connected;
  } catch (error) {
    if (error instanceof Error) {
      console.error('@/lib/db/connect.ts -> connectToMongo: ', error.message);
    }
    throw new Error(error as string);
  }
}
