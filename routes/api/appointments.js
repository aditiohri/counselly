const express = require("express")
const router = express.Router();
const apptCtrl = require('../../controllers/appointments');

/*---------- Protected Routes ----------*/

router.use(require('../../config/auth'));
router.get("/", apptCtrl.index);
router.get('/:id', apptCtrl.show)
router.post("/", apptCtrl.create);

module.exports = router;