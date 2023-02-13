const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// READ all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product, attributes: ['product_name', 'price', 'stock', 'category_id']}]
    });
    res.status(200).json(categoryData);
  } catch (err) { res.status(500).json(err) }
});

// READ one category by its `id` value
router.get('/:id', async (req, res) => {
  try{
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product, attributes: ['product_name', 'price', 'stock', 'category_id']}]
    });
    if (!categoryData) {
      res.status(404).json({ message: `No category found with this id!`});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) { res.status(500).json(err) }
});

// CREATE a new category
// req.body should look like this... { "category_name": "Bags" }
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) { res.status(500).json(err) }
});

// UPDATE a category by its `id` value
router.put('/:id', async (req, res) => {
  try { 
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (!categoryData) {
      res.status(404).json({ message: `No category found with this id!`});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) { res.status(500).json(err) }  
});

// DELETE a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!categoryData) {
      res.status(404).json({ message: `No category found with this id!`})
    }
    res.status(200).json(categoryData);
  } catch (err) { res.status(500).json(err) }  
});

module.exports = router;
