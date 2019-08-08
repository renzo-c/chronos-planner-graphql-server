"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const employeeModel = {
  id: {
    type: _sequelize.default.UUID,
    defaultValue: _sequelize.default.UUIDV4
  },
  firstName: {
    type: _sequelize.default.STRING,
    allowNull: true,
    validate: {
      isAlpha: {
        args: true,
        msg: "Firstname must contain characters from a to z only"
      },
      len: {
        args: [4, 20],
        msg: "must contain at least 4 characters and not more than 20"
      }
    }
  },
  lastName: {
    type: _sequelize.default.STRING,
    allowNull: true,
    validate: {
      isAlpha: {
        args: true,
        msg: "Lastname must contain only alphabetic characters"
      },
      len: {
        args: [4, 20],
        msg: "Lastname must contain at least 4 characters and not more than 20"
      }
    }
  },
  user: {
    type: _sequelize.default.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: {
        args: true,
        msg: "User must contain characters and numbers only"
      }
    },
    primaryKey: true
  },
  password: {
    type: _sequelize.default.STRING,
    allowNull: false
  },
  dni: {
    type: _sequelize.default.STRING,
    allowNull: false,
    validate: {
      is: {
        args: /[0-9]{8}/,
        msg: "DNI must contain 8 digits only"
      }
    }
  },
  address: {
    type: _sequelize.default.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [8, 20],
        msg: "Address must contain at least 8 characters and not more than 20"
      }
    }
  },
  phone: {
    type: _sequelize.default.STRING,
    allowNull: false,
    validate: {
      len: {
        is: /[0-9]{9}/,
        msg: "Phone must contain 9 digits only"
      }
    }
  },
  email: {
    type: _sequelize.default.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        args: true,
        msg: "Invalid email format. Valid format example: foo@bar.com"
      }
    }
  },
  status: {
    type: _sequelize.default.STRING,
    defaultValue: 'disabled',
    allowNull: false,
    validate: {
      is: {
        args: /^disabled|enabled$/,
        msg: "Field only accepts wheather 'enabled or 'disabled' words"
      }
    }
  },
  updatedAt: {
    type: _sequelize.default.DATE
  },
  deletedAt: {
    type: _sequelize.default.DATE
  }
};
var _default = employeeModel;
exports.default = _default;