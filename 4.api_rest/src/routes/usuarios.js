const express = require('express');
const router = express.Router();
const modelCtrl = require("../controllers/usuarios");


router.get("/api/usuarios", modelCtrl.getModels);

router.post("/api/usuarios", modelCtrl.createModel);

router.get("/api/usuarios/:id", modelCtrl.getModel);

router.delete("/api/usuarios/:id", modelCtrl.deleteModel);

router.put("/api/usuarios/:id", modelCtrl.updateModel);


module.exports = router;