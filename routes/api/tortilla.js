const express = require('express');
const router = express.Router();

const authController = require('../../controllers/api/authController');
const customerController = require('../../controllers/api/customerController');
const invoiceController = require('../../controllers/api/invoiceController');
const itemController = require('../../controllers/api/itemController');

router.get('/auth/callback', authController.handleCallback);
router.get('/auth/status', authController.checkAuth);
router.get('/customers', customerController.getAll);
router.post('/customers/create', customerController.create);
router.post('/customers/bulk', customerController.createBulk);
router.post('/customers/test', customerController.createTest);
router.put('/customers/:id', customerController.update);

router.get('/invoices', invoiceController.getAll);
router.post('/create-invoice', invoiceController.create);
router.put('/api/update-invoice-line', invoiceController.updateLine);
router.put('/api/delete-invoice-line', invoiceController.deleteLine);
router.delete('/api/invoice/:invoiceId', invoiceController.delete);
router.get('/items', itemController.getAll);
router.post('/create-item', itemController.create);

module.exports = router;