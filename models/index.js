// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {
  foreignkey: 'category_id',
  onDelete: 'CASCADE',
});

Product.hasMany(ProductTag, {
  foreignkey: 'category_id',
  onDelete: 'CASCADE',
});

// Tags belongsToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  foreignkey: 'product_id',
  onDelete: 'CASCADE',
});

Tag.hasMany(ProductTag, {
  foreignkey: 'product_id',
  onDelete: 'CASCADE',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
