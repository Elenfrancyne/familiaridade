const express = require('express')

const router = express.Router()

const parentsController = require("../controllers/parentsController");


router.post("/register1", parentsController.registerParents);
router.get("/listen", parentsController.listenParents);
router.get("/listen/:id", parentsController.listenParentsById);
router.put("/update/:id", parentsController.updateParentsById);
router.delete("/delete/:id", parentsController.deleteParentsById);

module.exports = router;