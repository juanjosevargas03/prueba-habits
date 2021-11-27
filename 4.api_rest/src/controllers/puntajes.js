const Model = require("../models/Puntajes");


 const getModels = async (req, res) => {
    try {
      const model = await Model.find({}).populate('Usuario','-Contraseña');
      return res.json(model);
    } catch (error) {
      res.json(error);
    }
  };
  
   const createModel = async (req, res) => {
    //const modelFound = await Model.findOne({ Usuario: req.body.Usuario });
    //if (modelFound) return res.status(301).json({ message: "The puntaje of that user already exists" });
  
    req.body.Fecha = new Date(req.body.Fecha);

    const model = new Model(req.body);
    const savedModel = await model.save();
    res.json(savedModel);
  };
  
   const getModel = async (req, res) => {
    const ModelFound = await Model.findById(req.params.id);
  
    if (!ModelFound) return res.status(204).json();
  
    return res.json(ModelFound);
  };
  
   const updateModel = async (req, res) => {
    const ModelUpdated = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
  
    if (!ModelUpdated) return res.status(204).json();
  
    return res.json(ModelUpdated);
  };
  
   const deleteModel = async (req, res) => {
    const ModelFound = await Model.findByIdAndDelete(req.params.id);
  
    if (!ModelFound) return res.status(204).json();
  
    return res.json(ModelFound);
  };
  
  module.exports = {
    getModels,
    createModel,
    getModel,
    updateModel,
    deleteModel
  };