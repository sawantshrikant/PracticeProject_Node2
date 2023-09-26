import express from 'express'; // which is help us create express router and define route
const router = express.Router();   // this router object allow me to define and organize routes to my apllication

import userRoute from './user.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/abc', (req, res) => {        // GET request to /abc, it responds with JSON data containing the message 'Welcome'.
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  

  return router;         //write this so we can use routes function in main application
};

export default routes;   //we can use routes in other part 
