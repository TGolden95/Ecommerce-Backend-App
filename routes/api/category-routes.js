const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [Product],
    });
    res.status(200).json(categoryData);
  } catch (error) {}
});

// find one category by its `id` value
// be sure to include its associated Products
router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findOne({
      where: { id: req.params.id },
      include: [Product],
    });
    res.status(200).json(categoryData);
  } catch (error) {}
});

// create a new category
router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (error) {}
});

// update a category by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(categoryData);
  } catch (error) {}
});

// delete a category by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(categoryData);
  } catch (error) {}
});

module.exports = router;
