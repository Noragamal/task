const models = require('../database/models');

const createCustomer = async (req, res) => {
  try {
    const customer = await models.customer.create(req.body);
    return res.status(201).json({
      customer,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

const createProduct = async (req, res) => {
    try {
      const product = await models.product.create(req.body);
      return res.status(201).json({
        product,
      });
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }
  const getAllCustomers = async (req, res) => {
    try {
      const customer = await models.customer.findAll();
      return res.status(200).json({ customer });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
  const getAllProducts = async (req, res) => {
    try {
      const product = await models.product.findAll();
      return res.status(200).json({ product });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  const updateCustomer = async (req, res) => {
    try {
      const { customerId } = req.params;
      const [ updated ] = await models.customer.update(req.body, {
        where: { customerID: customerId}
      });
      if (updated) {
        const updatedCustomer = await models.customer.findOne({ where: { customerID: customerId } });
        return res.status(200).json({ post: updatedCustomer });
      }
      throw new Error('Customer not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const updateProduct = async (req, res) => {
    try {
      const { productId } = req.params;
      const [ updated ] = await models.product.update(req.body, {
        where: { productID: productId}
      });
      if (updated) {
        const updatedProduct = await models.product.findOne({ where: { productID: productId } });
        return res.status(200).json({ post: updatedProduct });
      }
      throw new Error('Product not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const deleteCustomer = async (req, res) => {
    try {
      const { customerId } = req.params;
      const deleted = await models.customer.destroy({
        where: { customerID: customerId }
      });
      if (deleted) {
        return res.status(204).send("Customer deleted");
      }
      throw new Error("Post not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const deleteCustomer = async (req, res) => {
    try {
      const { customerId } = req.params;
      const deleted = await models.customer.destroy({
        where: { customerID: customerId }
      });
      if (deleted) {
        return res.status(204).send("Customer deleted");
      }
      throw new Error("Post not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const deleteProduct = async (req, res) => {
    try {
      const { productId } = req.params;
      const deleted = await models.product.destroy({
        where: { productID: productId }
      });
      if (deleted) {
        return res.status(204).send("product deleted");
      }
      throw new Error("Post not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };




module.exports = {
  createCustomer,createProduct,getAllCustomers,getAllProducts,updateCustomer,updateProduct,deleteCustomer,deleteProduct
}