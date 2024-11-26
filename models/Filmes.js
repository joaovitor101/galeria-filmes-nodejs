import { Sequelize } from "sequelize";
import connection from "../config/sequelize-config.js";

const Filmes = connection.define("filmes", {
  file: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ano: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  classificacao: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
Filmes.sync({ force: false });
export default Filmes;