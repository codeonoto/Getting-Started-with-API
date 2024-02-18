export default class ProductModel {
  constructor(id, name, desc, imageUrl, category, price, size) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.imageUrl = imageUrl;
    this.category = category;
    this.price = price;
    this.size = size;
  }

  static get(id) {
    const product = products.find((i) => i.id == id);
    return product;
  }

  static getAll() {
    return products;
  }

  static add(product) {
    product.id = products.lenght + 1;
    products.push(product);
    return product;
  }
}

var products = [
  new ProductModel(
    1,
    'Product 1',
    'Description for Product 1',
    'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
    'Cateogory1',
    19.99
  ),
  new ProductModel(
    2,
    'Product 2',
    'Description for Product 2',
    'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg',
    'Cateogory2',
    29.99,
    ['M', 'XL']
  ),
  new ProductModel(
    3,
    'Product 3',
    'Description for Product 3',
    'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg',
    'Cateogory3',
    39.99,
    ['M', 'XL', 'S']
  ),
];
