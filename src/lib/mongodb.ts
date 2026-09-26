import { MongoClient, type Collection } from "mongodb";

const uri = process.env.MONGODB_URI;

type ClickDoc = { _id: string; count: number };

// ponytail: cached on globalThis so Next.js dev HMR doesn't open a new connection per reload
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

function getClientPromise(): Promise<MongoClient> {
  if (!uri) throw new Error("MONGODB_URI is not set");
  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect();
  }
  return globalForMongo._mongoClientPromise;
}

export async function getClicksCollection(): Promise<Collection<ClickDoc>> {
  const client = await getClientPromise();
  return client.db().collection<ClickDoc>("clicks");
}
