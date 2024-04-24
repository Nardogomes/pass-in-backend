import {
  registerForEvent
} from "./chunk-JGU5ZLLO.mjs";
import {
  errorHandler
} from "./chunk-DCZJQNPL.mjs";
import {
  CheckIn
} from "./chunk-CJB6OL3T.mjs";
import {
  createEvent
} from "./chunk-CA2TGZA4.mjs";
import "./chunk-KDMJHR3Z.mjs";
import {
  getAttendeeBadge
} from "./chunk-JZNTM76V.mjs";
import {
  getEventAttendees
} from "./chunk-C3TALVUW.mjs";
import {
  getEvent
} from "./chunk-EMYN73K6.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform
} from "fastify-type-provider-zod";
import fastifyCors from "@fastify/cors";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xE3o da API para o back-end da aplica\xE7\xE3o.",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(CheckIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server is runnig on port 3333");
});
