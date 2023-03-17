import express from "express";
import "dotenv/config";
import router from "./routes/routes.js";
import { join } from "path";
import connectDb from "./db/connect.js";

const app = express();
const port = process.env.PORT || 5000;
const localIP = process.env.LOCAL_IP;
const db_url = process.env.db_url || "mongodb://127.0.0.1/";

// Parser
app.use(express.urlencoded({extended: false}));

// Router
app.use(router);

// Public Path Set
const publicPath = join(process.cwd(), "public");
app.use(express.static(publicPath));


// Database Connection
connectDb(db_url, "crud");

// set View Engine
app.set("view engine", "ejs");

// server listener
app.listen(port, () => {
  console.log("===========================================");
  console.log("Local Machine: http://localhost:" + port);
  if (localIP) console.log(`Same Network: http://${localIP}:${port}`);
  else console.log("Not connected to any Network");
  console.log("===========================================");
});
