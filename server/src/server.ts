import "dotenv/config";

import fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import multipart from "@fastify/multipart";
import { memoriesRoutes } from "./routes/memories";
import { authRoutes } from "./routes/auth";
import { uploadRoutes } from "./routes/upload";
import { resolve } from "node:path";

const app = fastify();

app.register(multipart);

app.register(require("@fastify/static"), {
  root: resolve(__dirname, "../uploads"),
  prefix: "/uploads",
});

app.register(cors, {
  //   origin: true, // all front-end URLS could access our back-end
  origin: ["https://localhost:6969", "https://localhost:5555"],
});
app.register(jwt, {
  secret: "spacetime",
});

app.register(authRoutes);
app.register(uploadRoutes);
app.register(memoriesRoutes);

app
  .listen({
    port: 6969,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("HTTP server running on localhost:6969");
  });
