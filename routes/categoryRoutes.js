const router = require('express').Router();
const { Category, User } = require('../models');

router.get('/categories', async (req, res) => {
  try {
    // Get all categories and JOIN with user data
    const categoryData = await Category.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const categories = categoryData.map((category) => category.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      categories,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/category/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const category = categoryData.get({ plain: true });

    res.render('category', {
      ...category,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
