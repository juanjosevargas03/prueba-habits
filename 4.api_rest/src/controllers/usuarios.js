const Model = require("../models/Usuarios");

 const getModels = async (req, res) => {
    try {
      const model = await Model.find({},{ "Contraseña": 0 }).populate("Pais");
      return res.json(model);
    } catch (error) {
      res.json(error);
    }
  };
  
   const createModel = async (req, res) => {
    const modelFound = await Model.findOne({ Usuario: req.body.Usuario });
  
    if (modelFound) return res.status(301).json({ message: "The user already exists" });
  
    req.body.Contraseña = await Model.encryptPassword(req.body.Contraseña);

    const model = new Model(req.body);
    const savedModel = await model.save();
    savedModel.Contraseña = "";

    res.json(savedModel);
  };
  
   const getModel = async (req, res) => {
    const ModelFound = await Model.findById(req.params.id).populate("Pais");
  
    if (!ModelFound) return res.status(204).json();
  
    return res.json(ModelFound);
  };
  
   const updateModel = async (req, res) => {
    req.body.Contraseña = await Model.encryptPassword(req.body.Contraseña);
    const ModelUpdated = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
  
    if (!ModelUpdated) return res.status(204).json();
    ModelUpdated.Contraseña = "";
  
    return res.json(ModelUpdated);
  };
  
   const deleteModel = async (req, res) => {
    const ModelFound = await Model.findByIdAndDelete(req.params.id);
  
    if (!ModelFound) return res.status(204).json();
    ModelFound.Contraseña = "";
  
    return res.json(ModelFound);
  };
  
  module.exports = {
    getModels,
    createModel,
    getModel,
    updateModel,
    deleteModel
  };