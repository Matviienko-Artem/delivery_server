const Router = require("express");
const shopSchema = require("../models/Shop");
const router = new Router();

router.post(
  "/add",

  async (req, res) => {
    try {
      const { name, menu } = req.body;

      const newShop = new shopSchema({ name, menu });
      await newShop.save();

      return res.json({ message: "Shop was created" });
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
);

router.get("/all", async (req, res) => {
  try {
    await shopSchema.find().then((data) => res.json({ message: "All shops", data }));
  } catch (error) {
    console.log(error);

    res.send({ message: "Server error", error });
  }
});

module.exports = router;
