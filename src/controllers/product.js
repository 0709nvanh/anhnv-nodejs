import Product from '../models/product'


export const add = async (req, res) => {
    try {
      const product = await new Product(req.body).save();
      res.json(product);
    } catch (error) {
      res.status(400).json({
        message: "Not success"
      })
    }
}


export const List = async (req, res) => {
  try {
    const products = await Product.find().exec();
    res.json(products);
  } catch (error) {
    res.status(400).json({
      message: "Not success"
    })
  }
}

export const getOne = async (req, res) => {
    try {
      const product = await Product.findOne({_id: req.params.id}).exec();
      res.json(product);
    } catch (error) {
      res.status(400).json({
        message: "Not success"
      })
    }
}

export const update = async (req,res) => {
  try {
    const product = await Product.findOneAndUpdate({_id: req.params.id}, req.body, { new: true }).exec();
    res.json(product);
  } catch (error) {
    res.status(400).json({
      message: "Not success"
    })
  }
}

export const remove = async (req, res) => {
    try {
      const product = await Product.findOneAndDelete({_id: req.params.id}).exec();
      res.json(product);
    } catch (error) {
      res.status(400).json({
        message: "Not success"
      })
    }
}
  