const Joi = require('joi');
const { createUserSchema, updateUserSchema } = require('./user.schema');

const id = Joi.number().integer();
const firstName = Joi.string().min(3).max(30);
const lastName = Joi.string();
const phone = Joi.string();

const getCustomerSchema = Joi.object({
  id: id.required(),
});

const createCustomerSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: createUserSchema,
});

const updateCustomerSchema = Joi.object({
  firstName,
  lastName,
  phone,
  user: updateUserSchema,
});

module.exports = {
  getCustomerSchema,
  createCustomerSchema,
  updateCustomerSchema,
};