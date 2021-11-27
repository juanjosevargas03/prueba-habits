const express = require('express');
const router = express.Router();
const modelCtrl = require("../controllers/paises");


router.get("/api/paises", modelCtrl.getModels);

router.post("/api/paises", modelCtrl.createModel);

router.get("/api/paises/:id", modelCtrl.getModel);

router.delete("/api/paises/:id", modelCtrl.deleteModel);

router.put("/api/paises/:id", modelCtrl.updateModel);


module.exports = router;