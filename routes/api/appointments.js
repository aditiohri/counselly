const express = require("express")
const router = express.Router();
const apptCtrl = require('../../controllers/appointments');

/*---------- Protected Routes ----------*/

router.get("/", apptCtrl.index);
router.get('/:id', apptCtrl.show)
router.post("/", apptCtrl.create);
router.delete('/:id', apptCtrl.delete)
router.put('/:id', apptCtrl.update)

module.exports = router;