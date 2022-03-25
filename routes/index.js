import express from "express";
const router = express.Router();
import path from "path";
import { fileURLToPath } from "url";
// set up the root directory reference
// find the global URL using fileURLToPath
// and then run that into the __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", (req, res) => {
  // res.send("Hello from Express!");
  console.log("index!");
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/audio", (req, res) => {
  // res.send("Hello from audio!");
  console.log("audio!");
  res.sendFile(path.join(__dirname, "../views/audio.html"));
});

// catches broken routes
router.use((req, res) => {
  // console.log("page does not exist");
  res.sendFile(path.join(__dirname, "../views/404.html"));
});

export default router;
