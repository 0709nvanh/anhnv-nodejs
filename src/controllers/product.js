const products = [
    {
      id: 1,
      name: "A",
    },
    {
      id: 2,
      name: "B",
    },
  ];

export const List = (req, res) => {
    res.json(products);
}

export const getOne = (req, res) => {
    const DetailProduct  = products.find(item => item.id === +req.params.id);
    res.json(DetailProduct);
}

export const add = (req, res) => {
    products.push(req.body)
    res.json(products);
}

export const update =  (req,res) => {
    const UpdateProduct = products.map(item => item.id === +req.params.id ? req.body : item)
    res.json(req.body);
}

export const remove = (req, res) => {
    const DelProduct  = products.filter(item => item.id === +req.params.id );
    res.json(req.body);
}
  