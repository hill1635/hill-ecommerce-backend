// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: '',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: '',
  onDelete: 'CASCADE',
});


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignkey: '',
  onDelete: 'CASCADE',
});

Product.hasMany(Tag, {
  foreignkey: '',
  onDelete: 'CASCADE',
});

// Tags belongsToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignkey: '',
  onDelete: 'CASCADE',
});

Tag.hasMany(ProductTag, {
  foreignkey: '',
  onDelete: 'CASCADE',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
