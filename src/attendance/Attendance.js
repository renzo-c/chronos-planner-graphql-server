import Sequelize from "sequelize";

const attendanceModel = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  photo: {
    type: Sequelize.STRING
  },
  latitude: {
    type: Sequelize.FLOAT
  },
  longitude: {
    type: Sequelize.FLOAT
  },
  start: {
    type: Sequelize.DATE
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: "disabled",
    allowNull: false
  }
};

export default attendanceModel;
