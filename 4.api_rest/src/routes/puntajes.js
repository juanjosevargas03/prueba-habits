const express = require('express');
const router = express.Router();
const modelCtrl = require("../controllers/puntajes");


router.get("/api/puntajes", modelCtrl.getModels);

router.post("/api/puntajes", modelCtrl.createModel);

router.get("/api/puntajes/:id", modelCtrl.getModel);

router.delete("/api/puntajes/:id", modelCtrl.deleteModel);

router.put("/api/puntajes/:id", modelCtrl.updateModel);


module.exports = router;