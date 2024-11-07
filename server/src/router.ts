import express from "express";
import data from "../public/data.json";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

router.get("/restaurants", (req, res) => {
  res.send(data);
});


export default router;
