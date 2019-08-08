"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const attendanceModel = {
  id: {
    type: _sequelize.default.UUID,
    defaultValue: _sequelize.default.UUIDV4,
    primaryKey: true
  },
  photo: {
    type: _sequelize.default.STRING
  },
  latitude: {
    type: _sequelize.default.FLOAT
  },
  longitude: {
    type: _sequelize.default.FLOAT
  },
  start: {
    type: _sequelize.default.DATE
  },
  status: {
    type: _sequelize.default.STRING,
    defaultValue: "disabled",
    allowNull: false
  }
};
var _default = attendanceModel;
exports.default = _default;