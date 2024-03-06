const express = require('express');
const router = express.Router();
const loginUsers = require('../Controllers/login');
const adminData = require('../Controllers/admin');

router.post('/login', loginUsers.login_users);
router.post('/admin-data-create', adminData.adminPanelDataCreate);
router.get('/admin-data-get', adminData.adminPanelDataGet);
router.post('/count', adminData.countOfEmployeebasis);


module.exports = router;