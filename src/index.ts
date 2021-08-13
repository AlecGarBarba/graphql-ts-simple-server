import 'reflect-metadata';
import express from 'express';
import { ApolloServer} from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { TodoResolver } from './resolvers/todoResolver';

async function main(){
    const schema = await buildSchema({
        resolvers: [TodoResolver],
        emitSchemaFile: true,
    });

    const app = express();

    const apolloServer = new ApolloServer({
        schema,
    });
    await apolloServer.start();

    apolloServer.applyMiddleware({ app });

    app.get('/', (_,res)=>{
        res.status(200).send("Hello!");
    })

    app.listen(4000, ()=>{
        console.log("Listening on port 4000");
    })
}

main(); 