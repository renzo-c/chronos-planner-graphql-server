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
      is: {
        args: /[\w-]/,
        msg: "Tag must contain only letters, numbers, dashes or spaces"
      },
      len: {
        args: [4, 15],
        msg: "Tag must contain more than 4 and less than 15 characters"
      },
    }
  },
  start: {
    type: Sequelize.DATE,
    allowNull: true,        //change when tests were done
    validate: {
      isDate: {
        args: true,
        msg: "Field must be filled with a date value"
      },
      isAfter: {
        args: `${new Date()}`,
        msg: `Start must be a future date | ${new Date()}`
      }
    }
  },
  end: {
    type: Sequelize.DATE,
    allowNull: true,
    validate: {
      isDate: {
        args: true,
        msg: "Field must be filled with a date value"
      },
      isAfter: {
        args: `${new Date()}`,
        msg: `Start must be a future date | ${new Date()}`
      }
    }
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: 'disabled',
    allowNull: false,
    validate: {
      is: {
        args: /^disabled|enabled$/,
        msg: "Field only accepts wheather 'enabled or 'disabled' words"
      }
    }
  },
  deletedAt: {
    type: Sequelize.DATE
  }
};

export default scheduleModel;
