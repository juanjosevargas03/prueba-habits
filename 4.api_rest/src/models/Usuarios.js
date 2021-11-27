const { Schema, model } =  require("mongoose");
const bcrypt = require("bcryptjs");

const subSchema = new Schema(
  {
    Nombre: String,
    Edad: Number,
    Activo: Boolean,
    Pais: {
        type: Schema.Types.ObjectId,
        ref: "Paises",
    },
    Usuario: String,
    Contraseña: String
  }
);

subSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
  
  subSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
  }

const Usuarios = model("Usuarios", subSchema)

module.exports = Usuarios;