import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all users
router.get('', userController.getAllUsers);    //responsible for retrieving a list of all users. 

//route to create a new user
// router.post('', newUserValidator, userController.newUser); //responsible for creating a new user

// // //route to get a single user by their user id
// // router.get('/:_id', userAuth, userController.getUser);    //used to retrieve a single user by their user ID. 

// //route to update a single user by their user id
// router.put('/:_id', userController.updateUser);        // updating a single user by their user ID.

// //route to delete a single user by their user id
// router.delete('/:_id', userController.deleteUser);  //delete a single user by their user ID

  export default router;    //that it can be used in other parts of your application.
