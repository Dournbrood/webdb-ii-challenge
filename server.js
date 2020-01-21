const express = require("express");

const server = express();

server.use(express.json());

const database = require("./data/dbConfig.js");

server.get("/api/cars", (request, response) => {
    database.select("*").from("cars")
        .then((cars) => {
            response.status(200).json({ ...cars });
        })
        .catch((error) => {
            response.status(500).json({ message: "Internal server error. Please scream at the devs until this is resolved." })
            console.log(error);
        })
})

server.post("/api/cars", (request, response) => {
    //This right here is VERY trusting of our user. Inputs will be scrubbed later i'm sure.
    database("cars").insert({ ...request.body })
        .then((things) => {
            response.status(200).json({
                message: "All good to go!",
                stuff: things,
            })
        })
        .catch((error) => {
            response.status(500).json({ message: "Internal server error. Please scream at the devs until this is resolved." })
            console.log(error);
        })
})

module.exports = server;