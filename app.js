import express from "express";
import router from "./routes/index.js";
import path from "path";
import { fileURLToPath } from "url";

// set up the root directory reference
// find the global URL using fileURLToPath
// and then run that into the __dirname (like users/desktop/accessibility_practice)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

const app = express();
const port = process.env.PORT || 3000;

// tell express to use the dir name and look into the public folder
app.use(express.static(path.join(__dirname, "public")));

// tell app to use the router file
app.use("/", router);

app.listen(port, () => {
  console.log(`App running at ${port}/`);
});
