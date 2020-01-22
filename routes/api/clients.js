const express = require("express");
const router = express.Router();
const clientCtrl = require('../../controllers/clients');

/*---------- Protected Routes ----------*/

router.get('/', clientCtrl.index);
router.get('/:id', clientCtrl.index);
router.post('/', clientCtrl.create);
router.delete('/:id', clientCtrl.delete);

module.exports = router;