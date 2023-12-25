"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const models = require('./../../models/index');
const { Op } = require("sequelize");
module.exports.AddUser = [
    (0, express_validator_1.body)('username').trim().notEmpty().withMessage('UsernameRequired'),
    (0, express_validator_1.body)('username').trim().isLength({ min: 2 }).withMessage('FullnameMinLengthRequired'),
    (0, express_validator_1.body)('username').trim().isLength({ max: 30 }).withMessage('FullnameMaxLengthRequired'),
    (0, express_validator_1.body)('age').trim().notEmpty().withMessage('AgeRequired'),
    (0, express_validator_1.body)('hobbies').trim().notEmpty().withMessage('hobbiesRequired'),
];
module.exports.UpdateUser = [
    (0, express_validator_1.body)('username').trim().notEmpty().withMessage('UsernameRequired'),
    (0, express_validator_1.body)('username').trim().isLength({ min: 2 }).withMessage('FullnameMinLengthRequired'),
    (0, express_validator_1.body)('username').trim().isLength({ max: 30 }).withMessage('FullnameMaxLengthRequired'),
    (0, express_validator_1.body)('age').trim().notEmpty().withMessage('AgeRequired'),
    (0, express_validator_1.body)('hobbies').trim().notEmpty().withMessage('hobbiesRequired'),
];
//# sourceMappingURL=user.validation.js.map