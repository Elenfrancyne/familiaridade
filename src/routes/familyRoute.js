const express = require('express');

const router = express.Router();

const familyController = require("../controllers/familyController");

router.post("/register", familyController.registerFamily);
router.get("/listen", familyController.listenFamily);
router.get("/listen/:id", familyController.listenFamilyById);
router.put("/update/:id", familyController.updateFamilyById)
router.delete("/delete/:id", familyController.deleteFamilyPorId)





module.exports = router;