import express from "express";
import { param } from "express-validator";
import RestaurantController from "../controllers/RestaurantController";

const router = express.Router()

// api/restaurant/search/london
router.get("/search/:city", 
    param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("city parameter must be a valid string"),
    RestaurantController.searchRestaurants
);    

export default router;