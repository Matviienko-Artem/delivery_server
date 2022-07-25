const Router = require("express");
const orderSchema = require("../models/Order");
const { check, validationResult } = require("express-validator");
const router = new Router();

router.post(
  "/add",
  [check("email", "Incorrect email").isEmail(), check("phone", "Incorrect phone").isMobilePhone()],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Incorrect request", errors });
      }

      const body = req.body;

      const newOrder = new orderSchema(body);
      await newOrder.save();

      return res.json({ message: "Order was created" });
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
);

router.get("/all", async (req, res) => {
  try {
    await orderSchema.find().then((data) => res.json({ message: "All orders", data }));
  } catch (error) {
    console.log(error);
    res.send({ message: "Server error", error });
  }
});

module.exports = router;
