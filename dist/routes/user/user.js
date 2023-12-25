"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
const user_controller_1 = __importDefault(require("../../controllers/user.controller"));
const common_1 = __importDefault(require("../../helpers/common"));
const UserValidation = __importStar(require("../../helpers/validation/user.validation"));
const { GetUser, GetUserById, AddUsers, UpdateUserById, DeleteUserById } = new user_controller_1.default();
const { CheckValidationError } = new common_1.default();
module.exports = function (router) {
    //get users 
    router.get('/', GetUser);
    //get user by user id 
    router.get('/:id', GetUserById);
    // add record 
    router.post('/', UserValidation['AddUser'], CheckValidationError, AddUsers);
    //update user 
    router.put('/:id', UserValidation['UpdateUser'], CheckValidationError, UpdateUserById);
    //delete user
    router.delete('/:id', DeleteUserById);
};
//# sourceMappingURL=user.js.map