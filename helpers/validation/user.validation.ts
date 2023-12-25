
import { body } from 'express-validator';
const models = require('./../../models/index');
const { Op } = require("sequelize");


module.exports.AddUser = [
  body('username').trim().notEmpty().withMessage('UsernameRequired'),
  body('username').trim().isLength({ min: 2 }).withMessage('FullnameMinLengthRequired'),
  body('username').trim().isLength({ max: 30 }).withMessage('FullnameMaxLengthRequired'),
  body('age').trim().notEmpty().withMessage('AgeRequired'),
  body('hobbies').trim().notEmpty().withMessage('hobbiesRequired'),
];

module.exports.UpdateUser = [
    body('username').trim().notEmpty().withMessage('UsernameRequired'),
    body('username').trim().isLength({ min: 2 }).withMessage('FullnameMinLengthRequired'),
    body('username').trim().isLength({ max: 30 }).withMessage('FullnameMaxLengthRequired'),
    body('age').trim().notEmpty().withMessage('AgeRequired'),
    body('hobbies').trim().notEmpty().withMessage('hobbiesRequired'),
  ];
