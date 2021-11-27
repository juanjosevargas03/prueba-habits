const { Schema, model } =  require("mongoose");

const subSchema = new Schema(
  {
    Usuario: {
      type: Schema.Types.ObjectId,
      ref: "Usuarios",
  },
  PuntosObtenidos: Number,
  Fecha: Date,
  Activo: Boolean
  }
);

const Puntajes = model("Puntajes", subSchema)

module.exports = Puntajes;