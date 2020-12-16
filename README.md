# E-Commerce Backend

## Table of Contents
* Purpose
* NPMs
* Models
* API Routes
* Deployment


## Purpose
The purpose of this assignment was to complete models and routes for the backend development of an e-commerce site.  Most of the assignment file/folder structure was already provided.  The goal was to establish associations between models, create properties for the models, and connect them to an sql database to allow it to be dynamically updated.

## NPMs
The NPMs used help run this application were Dotenv, Express, MySQL2 and Sequelize.  MySQL2 was used to help connect to MySQL Workbench in order to run MySQL functions viewing, creating, updating, and deleting values in the database.  Sequelize provided the framework for Model and DataTypes objects to help create separate tables with columns and values in the database based on models created.  Dotenv, in conjuction with Sequelize, bridged the gap between the database and the model javascript files by connecting to a localhost.  Seed javascript files helped populate the database tables, while the model files provided the framework for creating, deleting, and modifying values in the database.  And finally, Express was used to establish the connection and api routes in order to perform these methods.

## Models
Models provided the framework for the product data.  Associations were created to link products to their category, tags and product tags, categories to their products, and tags to their products and product tags.  Some models had a one-to-one assocation (product to category, for example), while others had a one-to-many association (products to tags).  Products had a more robust model with five properties (id, product_name, price, stock, category_id) while tags and categories were more simple with only two properties (id and name).

## API Routes
GET, POST, PUT, and DELETE API methods were created to view and modify values in the database based on a certain criteria.  GET methods were created in the routes to view current values in the database as a whole or individually by ID number, along with their associations.  POST methods created new tags, products, and categories.  PUT methods updated properties of a particular value and DELETE, well, deleted them.

## Deployment
Insomnia was used to run the API GET, PUT, POST, and DELETE methods.  Running methods, as shown in the demo, also displayed and modified association values in the database.
Check out the demo <a href="https://www.youtube.com/watch?v=p6EML_1zdd0&feature=youtu.be">here</a>.