import fastify from "fastify";
import cors from "@fastify/cors";
import { memoriesRoutes } from "./routes/memories";

const app = fastify();

app.register(cors, {
  //   origin: true, // all front-end URLS could access our back-end
  origin: ["https://localhost:6969", "https://localhost:5555"],
});
app.register(memoriesRoutes);

app
  .listen({
    port: 6969,
  })
  .then(() => {
    console.log("HTTP SERVER localhost:6969");
  });
