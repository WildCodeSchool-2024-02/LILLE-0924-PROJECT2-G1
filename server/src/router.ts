import express from "express";
import data from "../public/data.json";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
router.get("/restau", (req, res) => {
  res.send(data);
});

router.get("/restau/:id", (req, res) => {
  const id = req.params.id;
  const dataFiltered = data.restaurants.filter(
    (restau) => restau.id === Number.parseInt(id),
  );
  res.send(dataFiltered[0]);
});

/* ************************************************************************* */

export default router;
