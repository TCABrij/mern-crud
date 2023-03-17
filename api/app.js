import express from "express";
import "dotenv/config";
import router from "./routes/routes.js";
import connectDb from "./db/connect.js";

const app = express();

// gets var from env
const port = process.env.PORT || 5000;
const localIP = process.env.LOCAL_IP;
const db_url = process.env.db_url || "mongodb://127.0.0.1/";

// Parser
app.use(express.urlencoded({extended: false}));

// Router
app.use(router);

// Database Connection
connectDb(db_url, "crud");

// server listener
app.listen(port, () => {
  console.log("===========================================");
  console.log("Local Machine: http://localhost:" + port);
  if (localIP) console.log(`Same Network: http://${localIP}:${port}`);
  else console.log("Not connected to any Network");
  console.log("===========================================");
});
