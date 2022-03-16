import Category from '../models/category'
import Products from '../models/product'
import slugify from 'slugify';

export const add = async (req, res) => {
    try {
      req.body.slug = slugify(req.body.name)
      const category = await new Category(req.body).save();
      res.json(category);
    } catch (error) {
      res.status(400).json({
        message: "Not success"
      })
    }
}


export const List = async (req, res) => {
  try {
    const categories = await Category.find().exec();
    res.json(categories);
  } catch (error) {
    res.status(400).json({
      message: "Not success"
    })
  }
}

export const getOne = async (req, res) => {
  console.log(req.params.slug);
  try {
    const category = await Category.findOne({slug: req.params.slug}).exec();
    const products = await Products.find({ category: category }).populate('category').select('-category').exec();
    res.json({
      category, products
    });
  } catch (error) {
    res.status(400).json({
      message: "Lỗi"
    })
  }
}