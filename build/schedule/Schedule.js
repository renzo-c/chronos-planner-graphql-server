"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const scheduleModel = {
  id: {
    type: _sequelize.default.UUID,
    defaultValue: _sequelize.default.UUIDV4,
    primaryKey: true
  },
  tagName: {
    type: _sequelize.default.STRING,
    allowNull: true,
    validate: {
      is: {
        args: /[\w-]/,
        msg: "Tag must contain only letters, numbers, dashes or spaces"
      },
      len: {
        args: [4, 15],
        msg: "Tag must contain more than 4 and less than 15 characters"
      }
    }
  },
  start: {
    type: _sequelize.default.DATE,
    allowNull: true,
    //change when tests were done
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
    type: _sequelize.default.DATE,
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
  deletedAt: {
    type: _sequelize.default.DATE
  }
};
var _default = scheduleModel;
exports.default = _default;