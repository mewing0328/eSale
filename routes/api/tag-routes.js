const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint!

// READ all tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [
        { model: Product, attributes: ['product_name', 'price', 'stock', 'category_id']}
      ]
    });
    res.status(200).json(tagData);
  } catch (err) { res.status(500).json(err) }
});

// READ one tag by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [
        { model: Product, attributes: ['product_name', 'price', 'stock', 'category_id']}
      ]
    });
    if (!tagData) {
      res.status(404).json({ message: `No tag found with this id!`});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) { res.status(500).json(err) }
});

// CREATE a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) { res.status(500).json(err) }
});

// UPDATE a tag by its `id` value
router.put('/:id', async (req, res) => {
  try { 
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (!tagData) {
      res.status(404).json({ message: `No tag found with this id!`});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) { res.status(500).json(err) }  
});

// DELETE a tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!tagData) {
      res.status(404).json({ message: `No tag found with this id!`})
    }
    res.status(200).json(tagData);
  } catch (err) { res.status(500).json(err) }  
});

module.exports = router;
