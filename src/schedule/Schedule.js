import Sequelize from "sequelize";

const scheduleModel = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  tagName: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      isAlphanumeric: {
        args: true,
        msg: "Tag must contain only letters or numbers"
      },
      len: {
        args: [4, 10],
        msg: "Tag must contain more than 4 and less than 10 characters"
      }
    }
  }
};

export default scheduleModel;
