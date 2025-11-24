const express = require('express');
const { getProfile, updateProfile, deleteAccount } = require('../controllers/userController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.use(protect); // All routes are protected

router.route('/profile')
  .get(getProfile)
  .put(updateProfile);

router.delete('/account', deleteAccount);

module.exports = router;