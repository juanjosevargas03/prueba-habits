const { Schema, model } =  require("mongoose");

const subSchema = new Schema(
  {
    Nombre: String,
    Iso: String,
    Codigo: Number,
    FechaRegistro: Date,
    FechaActualizacion: Date,
  }
);

const Paises = model("Paises", subSchema)

module.exports = Paises;