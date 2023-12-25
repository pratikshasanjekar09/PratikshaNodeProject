const path = require('path')
import UserController from "../../controllers/user.controller";
import commonHelper from "../../helpers/common";
import * as UserValidation from '../../helpers/validation/user.validation';

const { GetUser, GetUserById, AddUsers, UpdateUserById, DeleteUserById } = new UserController();
const { CheckValidationError } = new commonHelper();


module.exports = function (router) {
    //get users 
    router.get('/', GetUser);
    //get user by user id 
    router.get('/:id', GetUserById);
    // add record 
    router.post('/', UserValidation['AddUser'],CheckValidationError, AddUsers);
    //update user 
    router.put('/:id',UserValidation['UpdateUser'],CheckValidationError, UpdateUserById);
    //delete user
    router.delete('/:id',DeleteUserById);


}
