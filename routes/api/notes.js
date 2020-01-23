const express = require("express");const router = express.Router();
const noteCtrl = require('../../controllers/notes');

/*---------- Protected Routes ----------*/

router.post('/appointments/:id/notes', noteCtrl.create);
router.delete('/notes/:id', noteCtrl.delete);

module.exports = router;