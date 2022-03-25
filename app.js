import express from "express";
import router from "./routes/index.js";
import path from "path";
import { fileURLToPath } from "url";

// set up the root directory reference
// find the global URL using fileURLTopath
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

const app = express();
const port = process.env.PORT || 3000; // where our app will run

app.use(express.static(path.join(__dirname, "public")));

// tell app to use the router file
app.use("/", router);

app.listen(port, () => {
  console.log(`App running at ${port}/`);
});
