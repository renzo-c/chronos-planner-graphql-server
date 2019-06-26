"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var employeeModel = {
  id: {
    type: _sequelize["default"].UUID,
    defaultValue: _sequelize["default"].UUIDV4,
    primaryKey: true
  },
  firstName: {
    type: _sequelize["default"].STRING,
    allowNull: true,
    validate: {
      isAlpha: {
        args: true,
        msg: "Firstname must contain characters from a to z only"
      },
      len: {
        args: [4, 20],
        msg: "Firstname must contain more than 8 and less than 20 characters"
      }
    }
  },
  lastName: {
    type: _sequelize["default"].STRING,
    allowNull: true,
    validate: {
      isAlpha: {
        args: true,
        msg: "Lastname must contain characters from a to z only"
      },
      len: {
        args: [4, 20],
        msg: "Lastname must contain more than 8 and less than 20 characters"
      }
    }
  },
  user: {
    type: _sequelize["default"].STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: {
        args: true,
        msg: "User must contain characters and numbers only"
      }
    }
  },
  password: {
    type: _sequelize["default"].STRING,
    allowNull: false,
    validate: {
      len: {
        args: [8, 20],
        msg: "Password must contain at least 8 characters and not more than 20"
      }
    }
  },
  dni: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    validate: {
      is: {
        args: /[0-9]{8}/,
        msg: "DNI must contain 8 numbers only"
      }
    }
  },
  address: {
    type: _sequelize["default"].STRING,
    allowNull: false,
    validate: {
      len: {
        args: [8, 20],
        msg: "Address must contain no more than 20  characters"
      }
    }
  },
  phone: {
    type: _sequelize["default"].STRING,
    allowNull: false,
    validate: {
      len: {
        is: /[0-9]{9}/,
        msg: "Phone must contain 9 numbers only"
      }
    }
  },
  email: {
    type: _sequelize["default"].STRING,
    allowNull: false,
    validate: {
      isEmail: {
        args: true,
        msg: "Invalid email format. Valid format example: foo@bar.com"
      }
    }
  },
  updatedAt: {
    type: _sequelize["default"].DATE
  },
  deletedAt: {
    type: _sequelize["default"].DATE
  }
};
var _default = employeeModel;
exports["default"] = _default;