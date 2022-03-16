import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// set up the root directory reference
// find the global URL using fileURLToPath
// and then run that into the __dirname (like users/desktop/accessibility_practice)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
  // res.send("Hello from Express!");
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/audio", (req, res) => {
  // res.send("Hello from audio!");
  res.sendFile(path.join(__dirname, "../views/audio.html"));
});

// catches broken routes
router.use((req, res) => {
  console.log("page does not exist");
  res.sendFile(path.join(__dirname, "../views/404.html"));
});

export default router;
