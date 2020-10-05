import "dotenv/config";
import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

import schema from "./schema";

const server = new ApolloServer({
  schema,
  playground: process.env.NODE_ENV === "development"
});

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB have a connection error: '))

export default server;